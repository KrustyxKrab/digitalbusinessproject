import { useState, useEffect } from 'react';
import type { QuizAnswer, Product } from '../../types/models';

interface QuizResultsProps {
  answers: QuizAnswer[];
}

export default function QuizResults({ answers }: QuizResultsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [dentalIssues, setDentalIssues] = useState<string[]>([]);

  const [healthScore, setHealthScore] = useState<number>(0);

  // Account creation state
  const [showAccountOption, setShowAccountOption] = useState<boolean>(true);
  const [accountChoice, setAccountChoice] = useState<'pending' | 'create' | 'skip'>('pending');
  const [accountData, setAccountData] = useState({ email: '', name: '' });

  useEffect(() => {
    // Analyze answers and generate recommendations
    const issues = analyzeAnswers(answers);
    setDentalIssues(issues);

    // Generate product recommendations based on answers
    const products = generateRecommendations(answers);
    setRecommendations(products);

    // Calculate health score
    const score = calculateHealthScore(answers);
    setHealthScore(score);

    // Create user profile
    createUserProfile(answers, issues);
  }, [answers]);

  const analyzeAnswers = (answers: QuizAnswer[]): string[] => {
    const issues: string[] = [];

    answers.forEach(answer => {
      if (answer.questionId === 'dentalConcerns' && Array.isArray(answer.answer)) {
        issues.push(...answer.answer);
      }
      if (answer.questionId === 'symptoms' && Array.isArray(answer.answer)) {
        issues.push(...answer.answer);
      }
    });

    return issues;
  };

  const generateRecommendations = (answers: QuizAnswer[]): Product[] => {
    // Mock recommendations - in real app, this would query actual products
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'elmex KARIESSCHUTZ',
        category: 'toothpaste',
        productLine: 'kariesschutz',
        description: 'Hocheffektiver Kariesschutz durch Aminfluorid',
        benefits: ['Kariesschutz', 'Remineralisierung'],
        ingredients: ['Aminfluorid'],
        price: 3.99,
        imageUrl: '/products/kariesschutz.png'
      },
      {
        id: '2',
        name: 'elmex SENSITIVE',
        category: 'toothpaste',
        productLine: 'sensitive',
        description: 'Sanfter Schutz für empfindliche Zähne',
        benefits: ['Schmerzlinderung', 'Sanfter Schutz'],
        ingredients: ['Aminfluorid', 'Kaliumnitrat'],
        price: 4.49,
        imageUrl: '/products/sensitive.png'
      },
      {
        id: '3',
        name: 'elmex ZAHNFLEISCH',
        category: 'toothpaste',
        productLine: 'zahnfleisch',
        description: 'Stärkt das Zahnfleisch und beugt Entzündungen vor',
        benefits: ['Zahnfleischpflege', 'Entzündungsschutz'],
        ingredients: ['Aminfluorid', 'Zink'],
        price: 4.29,
        imageUrl: '/products/zahnfleisch.png'
      }
    ];

    // Filter based on user's needs
    return mockProducts.slice(0, 2);
  };

  const createUserProfile = (answers: QuizAnswer[], issues: string[], accountInfo?: { email: string; name: string; accountCreated: boolean }) => {
    // Save to localStorage as a foundation for the MeinElmex dashboard
    const profile = {
      quizCompleted: true,
      completedAt: new Date().toISOString(),
      answers: answers,
      dentalIssues: issues,
      healthScore: calculateHealthScore(answers),
      ...(accountInfo && { account: accountInfo }),
    };

    localStorage.setItem('elmex-user-profile', JSON.stringify(profile));
    console.log('User profile created:', profile);
  };

  const handleAccountChoice = (choice: 'create' | 'skip') => {
    setAccountChoice(choice);
    if (choice === 'skip') {
      setShowAccountOption(false);
    }
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountData.email && accountData.name) {
      // Store account preference
      const accountInfo = {
        email: accountData.email,
        name: accountData.name,
        accountCreated: true
      };

      // Re-create profile with account info
      const issues = analyzeAnswers(answers);
      createUserProfile(answers, issues, accountInfo);

      setShowAccountOption(false);
    }
  };

  const calculateHealthScore = (answers: QuizAnswer[]): number => {
    // Simple scoring based on brushing frequency and dental concerns
    let score = 70; // Base score

    answers.forEach(answer => {
      if (answer.questionId === 'brushingFrequency') {
        if (answer.answer === '2') score += 20;
        else if (answer.answer === '3+') score += 10;
        else if (answer.answer === 'irregular') score -= 10;
      }
    });

    return Math.min(100, Math.max(0, score));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Account Creation Option */}
        {showAccountOption && (
          <div className="card mb-8 animate-slide-up text-center">
            <h2 className="text-2xl md:text-3xl font-brand font-bold text-neutral-900 mb-4">
              Möchten Sie ein Konto erstellen?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              <strong>Mit Konto:</strong> Zugriff von allen Geräten, personalisierte Beratung.<br />
              <strong>Ohne Konto:</strong> Funktioniert nur auf diesem Gerät.
            </p>

            {accountChoice === 'pending' && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleAccountChoice('create')}
                  className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium shadow-lg"
                >
                  Ja, Konto erstellen
                </button>
                <button
                  onClick={() => handleAccountChoice('skip')}
                  className="px-8 py-3 bg-neutral-200 text-neutral-700 rounded-full hover:bg-neutral-300 transition-colors font-medium"
                >
                  Nein, ohne Konto fortfahren
                </button>
              </div>
            )}

            {accountChoice === 'create' && (
              <form onSubmit={handleAccountSubmit} className="max-w-md mx-auto mt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-left text-sm font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={accountData.name}
                      onChange={(e) => setAccountData({ ...accountData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={accountData.email}
                      onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium"
                    >
                      Konto erstellen
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountChoice('pending')}
                      className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-full hover:bg-neutral-300 transition-colors font-medium"
                    >
                      Zurück
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        <div className="text-center mb-12 animate-slide-up">
          <div className="text-6xl mb-4 bling-effect">✨</div>
          <h1 className="text-4xl md:text-5xl font-brand font-bold gradient-title mb-4">
            Perfekt! Dein persönliches Zahnpflege-Profil ist bereit.
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Wir haben deine Antworten analysiert und die perfekten Produkte sowie eine individuelle Routine für dich zusammengestellt.
          </p>
        </div>

        {/* Health Score Card */}
        <div className="card mb-8 animate-slide-up text-center bg-gradient-to-br from-white to-orange-50" style={{ animationDelay: '0.05s' }}>
          <h2 className="text-2xl font-brand font-bold text-neutral-900 mb-6">
            Dein Zahngesundheits-Score
          </h2>
          <div className="relative inline-block mb-4">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-neutral-200"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(healthScore / 100) * 351.86} 351.86`}
                className="text-primary transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-neutral-900">{healthScore}</span>
            </div>
          </div>
          <p className="text-neutral-600 max-w-md mx-auto">
            {healthScore >= 90 ? 'Ausgezeichnet! Du hast bereits eine sehr gute Zahnpflege-Routine.' :
             healthScore >= 70 ? 'Gut! Mit ein paar Optimierungen wird deine Routine noch besser.' :
             'Lass uns gemeinsam deine Zahnpflege verbessern!'}
          </p>
        </div>

        {dentalIssues.length > 0 && (
          <div className="card mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-brand font-bold text-neutral-900 mb-4">
              Deine Zahnpflege-Schwerpunkte
            </h2>
            <div className="flex flex-wrap gap-2">
              {dentalIssues.map((issue, index) => (
                <span key={index} className="badge badge-primary">
                  {issue}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className="card card-interactive animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-full h-48 bg-linear-to-br from-neutral-100 to-neutral-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-6xl">🦷</div>
              </div>
              <h3 className="text-xl font-brand font-semibold text-neutral-900 mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-600 mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.benefits.map((benefit, i) => (
                  <span key={i} className="badge badge-success">
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {product.price.toFixed(2)} €
                </span>
                <button className="btn px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
                  Details ansehen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="card mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-brand font-bold text-neutral-900 mb-6">
            Deine nächsten Schritte
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
              <span className="text-3xl">📊</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Besuche dein persönliches Dashboard
                </h3>
                <p className="text-sm text-neutral-600">
                  Verfolge deinen Fortschritt, setze Erinnerungen und optimiere deine Routine.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
              <span className="text-3xl">🛒</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Starte mit deinen empfohlenen Produkten
                </h3>
                <p className="text-sm text-neutral-600">
                  Teste die für dich ausgewählten Produkte und erlebe den Unterschied.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Chatte mit dem elmex Expert AI
                </h3>
                <p className="text-sm text-neutral-600">
                  Stelle Fragen zur Zahnpflege und erhalte sofort professionelle Antworten.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary-dark transition-colors rounded-full btn shadow-lg hover:shadow-xl mb-4"
          >
            Zum Dashboard →
          </a>
          <p className="text-sm text-neutral-600">
            Oder starte direkt mit dem{' '}
            <a href="/ai-beratung" className="text-primary hover:underline font-medium">
              AI-Berater
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
