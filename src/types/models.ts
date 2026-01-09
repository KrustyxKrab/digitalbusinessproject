// Core Data Models for elmex.de

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  age: number;
  familyMembers: FamilyMember[];
  dentalIssues: string[];
  preferences: Preferences;
  healthScore: number;
  routine: DentalRoutine;
  products: UserProduct[];
  reminders: Reminder[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FamilyMember {
  id: string;
  name: string;
  age: number;
  relation: 'partner' | 'child' | 'other';
  dentalIssues: string[];
}

export interface Preferences {
  notifications: boolean;
  soundEnabled: boolean;
  language: 'de' | 'en';
  theme: 'light' | 'dark' | 'auto';
}

export interface DentalRoutine {
  morning: RoutineStep[];
  evening: RoutineStep[];
  streakCount: number;
  achievements: Achievement[];
  lastCompleted?: Date;
}

export interface RoutineStep {
  id: string;
  action: string;
  product?: Product;
  duration: number; // in seconds
  completed: boolean;
  order: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress: number; // 0-100
  target: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'toothpaste' | 'mouthwash' | 'toothbrush' | 'floss';
  productLine: 'kariesschutz' | 'sensitive' | 'zahnfleisch' | 'junior';
  description: string;
  benefits: string[];
  ingredients: string[] | {
    active: {
      name: string;
      description: string;
    }[];
    other: string;
  };
  price: number;
  imageUrl: string;
}

export interface ProductDetail extends Product {
  sku: string;
  slug: string;
  subtitle: string;
  heroTitle: string;
  heroDescription: string;
  badge: {
    text: string;
    icon?: string;
  };
  features: {
    icon: string;
    text: string;
  }[];
  howItWorks: {
    title: string;
    description: string;
    steps: {
      number: number;
      title: string;
      description: string;
    }[];
  };
  usage: {
    title: string;
    expert: {
      name: string;
      title: string;
      description: string;
    };
    instructions: string[];
    videoUrl?: string;
  };
  matchingScore?: {
    percentage: number;
    profile: string;
    note?: string;
    alternativeProduct?: {
      name: string;
      url: string;
    };
  };
  rating: {
    value: number;
    count: number;
  };
  availability: string;
  buyLinks: {
    retailer: string;
    url: string;
  }[];
}

export interface UserProduct {
  id: string;
  product: Product;
  purchaseDate: Date;
  estimatedEmptyDate: Date;
  usage: UsagePattern;
}

export interface UsagePattern {
  tubeSize: number; // in ml
  dailyUsage: number; // estimated in ml
  frequency: number; // times per day
}

export interface Reminder {
  id: string;
  type: 'toothbrush-change' | 'product-reorder' | 'dentist-appointment' | 'routine';
  title: string;
  message: string;
  dueDate: Date;
  completed: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  productRecommendations?: Product[];
}

export interface ChatHistory {
  id: string;
  userId: string;
  messages: ChatMessage[];
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  product: Product;
  frequency: number; // in days
  nextDelivery: Date;
  status: 'active' | 'paused' | 'cancelled';
  createdAt: Date;
}

export interface Dentist {
  id: string;
  name: string;
  practice: string;
  email: string;
  phone: string;
  address: string;
  verified: boolean;
}

export interface Prescription {
  id: string;
  dentistId: string;
  userId: string;
  productIds: string[];
  notes: string;
  createdAt: Date;
  validUntil: Date;
}

export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
  timestamp: Date;
}

export interface QuizResult {
  userId: string;
  answers: QuizAnswer[];
  recommendedProducts: Product[];
  dentalIssues: string[];
  completedAt: Date;
}
