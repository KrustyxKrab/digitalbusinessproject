import { useState } from 'react';
import { quizFlow, getNextQuestion, getTimeBasedGreeting, type QuizQuestion } from './quiz-config';
import QuizStep from './QuizStep';
import QuizProgress from './QuizProgress';
import QuizResults from './QuizResults';
import type { QuizAnswer } from '../../types/models';

export default function OnboardingQuiz() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('start');
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [greeting] = useState<string>(getTimeBasedGreeting());

  const currentQuestion: QuizQuestion = quizFlow[currentQuestionId];
  const progress = (answers.length / Object.keys(quizFlow).length) * 100;

  const handleAnswer = (answer: string | string[]) => {
    // Save answer
    const newAnswer: QuizAnswer = {
      questionId: currentQuestionId,
      answer,
      timestamp: new Date()
    };
    setAnswers([...answers, newAnswer]);

    // Get next question
    const nextId = getNextQuestion(currentQuestionId, answer);

    if (!nextId || nextId === 'results') {
      setIsComplete(true);
      // Save to IndexedDB
      saveQuizResults(answers);
    } else {
      setCurrentQuestionId(nextId);
    }
  };

  const handleBack = () => {
    if (answers.length === 0) return;

    const newAnswers = [...answers];
    const lastAnswer = newAnswers.pop();

    if (lastAnswer) {
      setAnswers(newAnswers);
      setCurrentQuestionId(lastAnswer.questionId);
    }
  };

  const saveQuizResults = async (quizAnswers: QuizAnswer[]) => {
    // Save to IndexedDB
    const dbName = 'elmex-db';
    const storeName = 'quiz-results';

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        store.put({
          id: 'latest',
          answers: quizAnswers,
          completedAt: new Date()
        });
        transaction.oncomplete = () => resolve(undefined);
      };

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id' });
        }
      };
    });
  };

  if (isComplete) {
    return <QuizResults answers={answers} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {currentQuestionId === 'start' && (
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-brand font-bold gradient-title mb-4">
              {greeting}
            </h1>
            <p className="text-lg text-neutral-600">
              Lass uns gemeinsam die perfekte Zahnpflege für dich finden.
            </p>
          </div>
        )}

        <QuizProgress progress={progress} currentStep={answers.length + 1} />

        <div className="animate-slide-up">
          <QuizStep
            question={currentQuestion}
            onAnswer={handleAnswer}
            onBack={handleBack}
            canGoBack={answers.length > 0}
          />
        </div>
      </div>
    </div>
  );
}
