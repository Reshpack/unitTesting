const { capitalize, reverseStr, calculator, caesarCipher, analyzeArray } = require('./index');

describe('capitalize function', () => {
    test('should capitalize the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
    });
});

describe('reverseStr function', () => {
    test('should reverse the string', () => {
        expect(reverseStr('hello')).toBe('olleh');
        expect(reverseStr('world')).toBe('dlrow');
    });
});

describe('calculator object', () => {
    test('should add two numbers correctly', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });

    test('should handle division by zero', () => {
        expect(calculator.divide(6, 0)).toBe("Cannot divide by 0");
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 4)).toBe(8);
    });
});

describe('caesarCipher function', () => {
    test('should shift characters in the string by the given factor', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('should handle wrapping from z to a', () => {
        expect(caesarCipher('xyz', 1)).toBe('yza');
    });

    test('should keep the same case', () => {
        expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme');
    });

    test('should keep punctuation unchanged', () => {
        expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
    });
});

describe('analyzeArray function', () => {
    test('should return correct object for non-empty array', () => {
        const inputArray = [1, 8, 3, 4, 2, 6];
        const expectedResult = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        };
        expect(analyzeArray(inputArray)).toEqual(expectedResult);
    });

    test('should return correct object for empty array', () => {
        const inputArray = [];
        const expectedResult = {
            average: NaN,
            min: NaN,
            max: NaN,
            length: 0
        };
        expect(analyzeArray(inputArray)).toEqual(expectedResult);
    });
});