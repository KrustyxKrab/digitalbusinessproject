import { map } from 'nanostores';
import type { UserProfile } from '../types/models';

// User Profile Store
export const userProfile = map({
name: '',
  healthScore: 0,
  routine: {} 
});

// Helper functions
export function setUserProfile(profile: UserProfile) {
  userProfile.set(profile);
  // Persist to IndexedDB
  saveToIndexedDB('userProfile', profile);
}

export function updateHealthScore(score: number) {
  const currentProfile = userProfile.get();
  if (currentProfile) {
    userProfile.setKey('healthScore', score);
    saveToIndexedDB('userProfile', userProfile.get());
  }
}

export function updateStreak(count: number) {
  const currentProfile = userProfile.get();
  if (currentProfile) {
    userProfile.setKey('routine', {
      ...currentProfile.routine,
      streakCount: count
    });
    saveToIndexedDB('userProfile', userProfile.get());
  }
}

// IndexedDB helpers
async function saveToIndexedDB(key: string, value: any) {
  if (typeof window === 'undefined') return;

  const dbName = 'elmex-db';
  const storeName = 'user-data';

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      store.put({ key, value });
      transaction.oncomplete = () => resolve(undefined);
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'key' });
      }
    };
  });
}

export async function loadFromIndexedDB(key: string): Promise<any> {
  if (typeof window === 'undefined') return null;

  const dbName = 'elmex-db';
  const storeName = 'user-data';

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const getRequest = store.get(key);

      getRequest.onsuccess = () => {
        resolve(getRequest.result?.value || null);
      };
    };

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'key' });
      }
    };
  });
}

// Initialize store from IndexedDB on client
if (typeof window !== 'undefined') {
  loadFromIndexedDB('userProfile').then((profile) => {
    if (profile) {
      userProfile.set(profile);
    }
  });
}
