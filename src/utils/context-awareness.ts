import type { UserProfile, Product } from '../types/models';

/**
 * Get personalized greeting based on time of day
 */
export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Guten Morgen';
  } else if (hour >= 12 && hour < 18) {
    return 'Guten Tag';
  } else if (hour >= 18 && hour < 22) {
    return 'Guten Abend';
  } else {
    return 'Hallo';
  }
}

/**
 * Get personalized message based on time and routine
 */
export function getPersonalizedMessage(profile?: UserProfile | null): string {
  const hour = new Date().getHours();
  const greeting = getGreeting();

  if (!profile) {
    if (hour >= 5 && hour < 10) {
      return `${greeting}! Zeit für die Morgenroutine?`;
    } else if (hour >= 20 && hour < 23) {
      return `${greeting}! Bereit für die Abendroutine?`;
    }
    return `${greeting}! Willkommen bei elmex.`;
  }

  const name = profile.name ? `, ${profile.name}` : '';

  if (hour >= 5 && hour < 10) {
    return `${greeting}${name}! Schon geputzt?`;
  } else if (hour >= 20 && hour < 23) {
    return `${greeting}${name}! Zeit für die Nacht-Regeneration?`;
  } else if (hour >= 12 && hour < 14) {
    return `${greeting}${name}! Nicht die Mundspülung vergessen.`;
  }

  return `${greeting}${name}! Wie können wir dir heute helfen?`;
}

/**
 * Get contextual product recommendations based on time and user profile
 */
export function getContextualRecommendations(
  profile?: UserProfile | null,
  allProducts: Product[] = []
): Product[] {
  const hour = new Date().getHours();
  const recommendations: Product[] = [];

  if (!profile) {
    // Default recommendations
    return allProducts.slice(0, 3);
  }

  // Morning: Focus on fresh breath and whitening
  if (hour >= 5 && hour < 12) {
    const morningProducts = allProducts.filter(p =>
      p.benefits.some(b =>
        b.toLowerCase().includes('frisch') ||
        b.toLowerCase().includes('atem') ||
        b.toLowerCase().includes('weiss')
      )
    );
    recommendations.push(...morningProducts.slice(0, 2));
  }

  // Evening: Focus on protection and regeneration
  if (hour >= 20 && hour < 24) {
    const eveningProducts = allProducts.filter(p =>
      p.benefits.some(b =>
        b.toLowerCase().includes('schutz') ||
        b.toLowerCase().includes('regeneration') ||
        b.toLowerCase().includes('nacht')
      )
    );
    recommendations.push(...eveningProducts.slice(0, 2));
  }

  // Match user's dental issues
  if (profile.dentalIssues.length > 0) {
    const issueProducts = allProducts.filter(p => {
      return profile.dentalIssues.some(issue =>
        p.benefits.some(b => b.toLowerCase().includes(issue.toLowerCase()))
      );
    });
    recommendations.push(...issueProducts.slice(0, 2));
  }

  // Remove duplicates
  const unique = Array.from(new Set(recommendations.map(p => p.id)))
    .map(id => recommendations.find(p => p.id === id)!)
    .filter(Boolean);

  return unique.slice(0, 3);
}

/**
 * Get time-based emoji
 */
export function getTimeEmoji(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return '☀️';
  if (hour >= 12 && hour < 18) return '🌤️';
  if (hour >= 18 && hour < 21) return '🌅';
  return '🌙';
}

/**
 * Check if it's time for routine reminder
 */
export function shouldShowRoutineReminder(profile?: UserProfile | null): boolean {
  if (!profile || !profile.routine.lastCompleted) return false;

  const hour = new Date().getHours();
  const lastCompleted = new Date(profile.routine.lastCompleted);
  const hoursSinceCompletion = (Date.now() - lastCompleted.getTime()) / (1000 * 60 * 60);

  // Morning reminder (6-10 AM)
  if (hour >= 6 && hour < 10 && hoursSinceCompletion > 12) {
    return true;
  }

  // Evening reminder (8-10 PM)
  if (hour >= 20 && hour < 22 && hoursSinceCompletion > 4) {
    return true;
  }

  return false;
}
