import { AppState } from '../types';
import { defaultState } from '../data/defaultData';

const PUBLISHED_KEY = 'cietdh_published_data_v5';
const DRAFT_KEY = 'cietdh_draft_data_v5';
const PREVIEW_KEY = 'cietdh_is_preview_mode_v5';

export function getPublishedState(): AppState {
  try {
    const data = localStorage.getItem(PUBLISHED_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading published data from localStorage:', e);
  }
  return defaultState;
}

export function getDraftState(): AppState {
  try {
    const data = localStorage.getItem(DRAFT_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading draft data from localStorage:', e);
  }
  // If no draft exists, initialize with current published data
  return getPublishedState();
}

export function saveDraftState(state: AppState): void {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving draft data:', e);
  }
}

export function publishState(state: AppState): void {
  try {
    localStorage.setItem(PUBLISHED_KEY, JSON.stringify(state));
    localStorage.setItem(DRAFT_KEY, JSON.stringify(state)); // sync draft with published
  } catch (e) {
    console.error('Error publishing data:', e);
  }
}

export function getPreviewMode(): boolean {
  try {
    const val = localStorage.getItem(PREVIEW_KEY);
    return val === 'true';
  } catch {
    return false;
  }
}

export function savePreviewMode(val: boolean): void {
  try {
    localStorage.setItem(PREVIEW_KEY, String(val));
  } catch {
    // ignore
  }
}

export function resetToDefaults(): AppState {
  try {
    localStorage.setItem(PUBLISHED_KEY, JSON.stringify(defaultState));
    localStorage.setItem(DRAFT_KEY, JSON.stringify(defaultState));
    localStorage.setItem(PREVIEW_KEY, 'false');
  } catch (e) {
    console.error('Error resetting defaults:', e);
  }
  return defaultState;
}
