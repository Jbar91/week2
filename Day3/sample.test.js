import { add } from './sample';

// Gherkin GWT

describe('Given add function', () => {
  // A = Arrange
  // A = Act
  // A = Assert

  describe('When we have two numbers', () => {
    test('If a = 1 and b = 1 result should be 2', () => {
      // Arrange
      const a = 1;
      const b = 1;
      const expected = 2;
      // Act
      const r = add(a, b);
      // Assert
      expect(r).toBe(expected);
    });

    test('If a = 1 and b = 1 result should be 2', () => {
      // Arrange
      const a = 1;
      const b = 1;
      const expected = 2;
      // Act
      const r = add(a, b);
      // Assert
      expect(r).toBe(expected);
    });
  });
});
