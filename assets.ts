
/**
 * GAME ASSETS CONFIGURATION
 * 
 * Using new URL(path, import.meta.url).href is the standard way to reference 
 * static assets in ESM. It works natively in browsers and tells Vite to 
 * bundle the file during the build.
 */

export const ASSETS = {
  // Level 1: Mäkikotka
  LEVEL_1_PUZZLE: new URL('./makikotka.jpg', import.meta.url).href,

  // Level 2: Pirunpelto & Pallo
  LEVEL_2_LEFT: new URL('./pirunpelto.jpg', import.meta.url).href,
  LEVEL_2_RIGHT: new URL('./pallo.jpg', import.meta.url).href,

  // Level 3: Rocky vs Apollo & Math
  LEVEL_3_LEFT: new URL('./apollo.jpg', import.meta.url).href,
  LEVEL_3_RIGHT: new URL('./ball.jpg', import.meta.url).href,
};
