// src/createEmotionCache.ts
import createCache, { EmotionCache } from '@emotion/cache';

function createEmotionCache(): EmotionCache {
  return createCache({ key: 'css', prepend: true });
}

export default createEmotionCache;
