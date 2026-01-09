// Quiz Configuration for Onboarding

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'age';
  options?: QuizOption[];
  next?: string | ((answer: string | string[]) => string);
}

export interface QuizOption {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

// Helper to get time-based greeting
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Guten Morgen! Schon die Zähne geputzt?';
  } else if (hour >= 12 && hour < 18) {
    return 'Hallo! Schön, dass du da bist.';
  } else if (hour >= 18 && hour < 22) {
    return 'Guten Abend! Bereit für deine Abendroutine?';
  } else {
    return 'Hallo! Noch wach? Perfekt für deine Nachtpflege.';
  }
}

export const quizFlow: Record<string, QuizQuestion> = {
  welcome: {
    id: 'welcome',
    question: 'Möchten Sie personalisierte Beratung für Ihre Zahngesundheit?',
    type: 'single',
    options: [
      {
        value: 'yes',
        label: 'Ja, gerne',
        description: 'Dauert ca. 2-3 Minuten'
      },
      {
        value: 'skip',
        label: 'Direkt zu Produkten',
        description: 'Überspringen Sie den Fragebogen'
      }
    ],
    next: (answer) => {
      if (answer === 'skip') return 'results';
      return 'start';
    }
  },

  start: {
    id: 'start',
    question: 'Für wen suchst du heute?',
    type: 'single',
    options: [
      {
        value: 'myself',
        label: 'Für mich selbst',
        icon: '👤',
        description: 'Persönliche Zahnpflege-Empfehlungen'
      },
      {
        value: 'child',
        label: 'Für mein Kind',
        icon: '👶',
        description: 'Kindgerechte Zahnpflege'
      },
      {
        value: 'family',
        label: 'Für die ganze Familie',
        icon: '👨‍👩‍👧‍👦',
        description: 'Produkte für alle Familienmitglieder'
      },
      {
        value: 'issues',
        label: 'Ich habe akute Beschwerden',
        icon: '⚕️',
        description: 'Gezielte Hilfe bei Problemen'
      }
    ],
    next: (answer) => {
      if (answer === 'child') return 'childAge';
      if (answer === 'family') return 'familySize';
      if (answer === 'issues') return 'symptoms';
      return 'userAge';
    }
  },

  userAge: {
    id: 'userAge',
    question: 'Wie alt bist du?',
    type: 'single',
    options: [
      { value: '18-30', label: '18-30 Jahre' },
      { value: '31-50', label: '31-50 Jahre' },
      { value: '51-65', label: '51-65 Jahre' },
      { value: '65+', label: 'Über 65 Jahre' }
    ],
    next: 'dentalConcerns'
  },

  childAge: {
    id: 'childAge',
    question: 'Wie alt ist dein Kind?',
    type: 'single',
    options: [
      { value: '0-2', label: '0-2 Jahre', description: 'Erste Zähnchen' },
      { value: '3-6', label: '3-6 Jahre', description: 'Milchzähne' },
      { value: '7-12', label: '7-12 Jahre', description: 'Zahnwechsel' },
      { value: '13+', label: 'Über 13 Jahre', description: 'Jugendliche' }
    ],
    next: 'childConcerns'
  },

  familySize: {
    id: 'familySize',
    question: 'Wie viele Personen gehören zu deiner Familie?',
    type: 'single',
    options: [
      { value: '2', label: '2 Personen' },
      { value: '3', label: '3 Personen' },
      { value: '4', label: '4 Personen' },
      { value: '5+', label: '5+ Personen' }
    ],
    next: 'familyConcerns'
  },

  dentalConcerns: {
    id: 'dentalConcerns',
    question: 'Welche Themen sind dir wichtig? (Mehrfachauswahl möglich)',
    type: 'multiple',
    options: [
      {
        value: 'cavity-protection',
        label: 'Kariesschutz',
        icon: '🛡️',
        description: 'Wirksamer Schutz vor Karies'
      },
      {
        value: 'sensitive-teeth',
        label: 'Empfindliche Zähne',
        icon: '❄️',
        description: 'Schutz bei Schmerzempfindlichkeit'
      },
      {
        value: 'gum-health',
        label: 'Zahnfleischgesundheit',
        icon: '💚',
        description: 'Stärkung des Zahnfleischs'
      },
      {
        value: 'whitening',
        label: 'Weißere Zähne',
        icon: '✨',
        description: 'Natürlich weiße Zähne'
      },
      {
        value: 'fresh-breath',
        label: 'Frischer Atem',
        icon: '💨',
        description: 'Langanhaltende Frische'
      },
      {
        value: 'natural',
        label: 'Natürliche Inhaltsstoffe',
        icon: '🌿',
        description: 'Pflanzliche Wirkstoffe'
      }
    ],
    next: 'brushingFrequency'
  },

  childConcerns: {
    id: 'childConcerns',
    question: 'Was ist dir bei der Zahnpflege deines Kindes wichtig?',
    type: 'multiple',
    options: [
      { value: 'cavity', label: 'Kariesschutz', icon: '🛡️' },
      { value: 'taste', label: 'Angenehmer Geschmack', icon: '😋' },
      { value: 'fun', label: 'Spaß beim Putzen', icon: '🎮' },
      { value: 'gentle', label: 'Sanfte Reinigung', icon: '🤲' }
    ],
    next: 'results'
  },

  familyConcerns: {
    id: 'familyConcerns',
    question: 'Welche Bedürfnisse haben eure Familienmitglieder?',
    type: 'multiple',
    options: [
      { value: 'kids', label: 'Kinderzähne', icon: '👶' },
      { value: 'adults', label: 'Erwachsene', icon: '👤' },
      { value: 'seniors', label: 'Senioren', icon: '👵' },
      { value: 'sensitive', label: 'Empfindliche Zähne', icon: '❄️' },
      { value: 'gums', label: 'Zahnfleischprobleme', icon: '💚' }
    ],
    next: 'results'
  },

  symptoms: {
    id: 'symptoms',
    question: 'Welche Beschwerden hast du aktuell?',
    type: 'multiple',
    options: [
      { value: 'pain', label: 'Zahnschmerzen', icon: '🦷' },
      { value: 'bleeding', label: 'Zahnfleischbluten', icon: '🩸' },
      { value: 'sensitivity', label: 'Schmerzempfindlichkeit', icon: '❄️' },
      { value: 'bad-breath', label: 'Mundgeruch', icon: '😷' },
      { value: 'inflammation', label: 'Entzündung', icon: '🔥' }
    ],
    next: 'urgency'
  },

  urgency: {
    id: 'urgency',
    question: 'Wie dringend sind deine Beschwerden?',
    type: 'single',
    options: [
      {
        value: 'urgent',
        label: 'Sehr dringend',
        description: 'Starke Schmerzen, sofortige Hilfe nötig'
      },
      {
        value: 'moderate',
        label: 'Mäßig',
        description: 'Unangenehm, aber aushaltbar'
      },
      {
        value: 'mild',
        label: 'Leicht',
        description: 'Vorbeugend behandeln'
      }
    ],
    next: 'results'
  },

  brushingFrequency: {
    id: 'brushingFrequency',
    question: 'Wie oft putzt du dir täglich die Zähne?',
    type: 'single',
    options: [
      { value: '1', label: '1x täglich' },
      { value: '2', label: '2x täglich', description: '⭐ Empfohlen' },
      { value: '3+', label: '3x oder öfter' },
      { value: 'irregular', label: 'Unregelmäßig' }
    ],
    next: 'brushingTechnique'
  },

  brushingTechnique: {
    id: 'brushingTechnique',
    question: 'Wie putzen Sie Ihre Zähne?',
    type: 'multiple',
    options: [
      { value: 'circular', label: 'Kreisende Bewegungen', icon: '🔄' },
      { value: 'horizontal', label: 'Hin und her', icon: '↔️' },
      { value: 'vertical', label: 'Auf und ab', icon: '↕️' },
      { value: 'unsure', label: 'Bin mir nicht sicher', icon: '❓' }
    ],
    next: 'eatingHabits'
  },

  eatingHabits: {
    id: 'eatingHabits',
    question: 'Wie würden Sie Ihre Essgewohnheiten beschreiben?',
    type: 'multiple',
    options: [
      { value: 'sugary', label: 'Viel Süßes', icon: '🍬' },
      { value: 'acidic', label: 'Säurehaltige Lebensmittel', icon: '🍋' },
      { value: 'balanced', label: 'Ausgewogen', icon: '🥗' },
      { value: 'snacking', label: 'Häufige Snacks', icon: '🍪' }
    ],
    next: 'consumption'
  },

  consumption: {
    id: 'consumption',
    question: 'Welche Gewohnheiten treffen auf Sie zu?',
    type: 'multiple',
    options: [
      { value: 'coffee', label: 'Kaffee täglich', icon: '☕' },
      { value: 'tea', label: 'Tee täglich', icon: '🫖' },
      { value: 'smoking', label: 'Rauchen', icon: '🚬' },
      { value: 'none', label: 'Keine davon', icon: '✅' }
    ],
    next: 'results'
  },

  results: {
    id: 'results',
    question: 'Perfekt! Wir haben deine persönlichen Empfehlungen erstellt.',
    type: 'single',
    options: []
  }
};

// Helper to get next question
export function getNextQuestion(
  currentId: string,
  answer: string | string[]
): string | null {
  const current = quizFlow[currentId];
  if (!current.next) return null;

  if (typeof current.next === 'function') {
    return current.next(answer);
  }

  return current.next;
}
