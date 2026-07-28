'use client';

import { useSyncExternalStore } from 'react';
import { uiStore, type UiState } from './store';

export function useUiStore<T>(selector: (s: UiState) => T): T {
  return useSyncExternalStore(
    uiStore.subscribe,
    () => selector(uiStore.get()),
    () => selector(uiStore.get())
  );
}
