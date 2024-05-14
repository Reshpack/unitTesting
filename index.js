function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseStr(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return "Cannot divide by 0";
        }
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

function caesarCipher(str, shift) {
    return str
        .split("")
        .map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                let isUpperCase = char === char.toUpperCase();
                let offset = isUpperCase ? 65 : 97; 
                code = ((code - offset + shift) % 26 + 26) % 26 + offset; 
                return String.fromCharCode(code);
            }
            return char;
        })
        .join("");
}

function analyzeArray(array) {
    if (array.length === 0) {
        return {
            average: NaN,
            min: NaN,
            max: NaN,
            length: 0
        };
    }
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = sum / array.length;

    return {
        average,
        min,
        max,
        length: array.length
    };
}

module.exports = { capitalize, reverseStr, calculator, caesarCipher, analyzeArray };

console.log(reverseStr('suresh')); // hserus

console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.divide(6, 2));   // Output: 3
console.log(calculator.multiply(2, 4)); // Output: 8

console.log(caesarCipher("I am going to become a software engineer", 4));
