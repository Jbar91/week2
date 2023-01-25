import { strictEquals } from './equals';

describe('Given strictEquals', () => {
  describe('When we have two parameters', () => {
    test("Then if they're 1 and 1 it should return true", () => {
      const a = 1;
      const b = 1;
      const expected = true;
      const result = strictEquals(a, b);
      expect(result).toBe(expected);
    });
    test("Then if they're NaN and NaN it should return false", () => {
      const a = NaN;
      const b = NaN;
      const expected = false;
      const result = strictEquals(a, b);
      expect(result).toBe(expected);
    });
  });
});
