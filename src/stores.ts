import {writable} from 'svelte/store';

// Définir les types pour les stores
type ThemeType = 'light' | 'dark';

// Créer les stores avec leurs types
export const theme = writable<ThemeType>('light');
export const openTab = writable("infos");
