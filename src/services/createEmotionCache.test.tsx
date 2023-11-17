import createEmotionCache from '@/createEmotionCache';

describe('createEmotionCache', () => {
  it('should return specific attributes', () => {
    const result = createEmotionCache();

    expect(result.key).toBe('css');
    expect(result.inserted).toStrictEqual({});
    expect(result.sheet['prepend']).toBe(true);
  });
});
