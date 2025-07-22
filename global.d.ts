/// <reference types="svelte" />
/// <reference types="vite/client" />

// Déclarations globales pour les fichiers statiques
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
