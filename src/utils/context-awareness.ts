import type { UserProfile } from '../types/models';

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
 *
 * Returns product slugs instead of full product objects for efficient data management.
 * Components should load full product data from JSON files using these slugs.
 *
 * @param profile - User profile with dental issues and preferences
 * @returns Array of product slugs (e.g., ["kariesschutz-zahnpasta", "sensitive-zahnpasta"])
 */
export function getContextualRecommendations(
  profile?: UserProfile | null
): string[] {
  const hour = new Date().getHours();
  const recommendations: string[] = [];

  if (!profile) {
    // Default recommendations for visitors without profile
    return ['sensitive-zahnpasta', 'kariesschutz-zahnpasta', 'elmex-gelee'];
  }

  // Morning: Focus on fresh breath and whitening
  if (hour >= 5 && hour < 12) {
    recommendations.push('kariesschutz-zahnpasta');
    recommendations.push('mundspuelung-kariesschutz');
  }

  // Evening: Focus on protection and regeneration
  if (hour >= 20 && hour < 24) {
    recommendations.push('sensitive-zahnpasta');
    recommendations.push('elmex-gelee');
  }

  // Match user's dental issues to product slugs
  if (profile.dentalIssues.length > 0) {
    profile.dentalIssues.forEach(issue => {
      const issueLower = issue.toLowerCase();

      if (issueLower.includes('sensitive') || issueLower.includes('empfindlich')) {
        recommendations.push('sensitive-zahnpasta');
        recommendations.push('sensitive-professional-zahnpasta');
      } else if (issueLower.includes('karies') || issueLower.includes('cavity')) {
        recommendations.push('kariesschutz-zahnpasta');
        recommendations.push('elmex-gelee');
      } else if (issueLower.includes('zahnfleisch') || issueLower.includes('gum')) {
        recommendations.push('zahnfleisch-zahnpasta');
      } else if (issueLower.includes('white') || issueLower.includes('weiss')) {
        recommendations.push('opti-schmelz-white-zahnpasta');
      } else if (issueLower.includes('junior') || issueLower.includes('kind')) {
        recommendations.push('elmexjunior');
      }
    });
  }

  // Remove duplicates and limit to 3 recommendations
  const unique = Array.from(new Set(recommendations));
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
