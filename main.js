const stringLength = (string) => {
    if (string.length > 10) {
        throw new Error("String's length is too long");
    } else if (string.length < 1) {
        throw new Error("String's length is too short");
    }
    return string.length;
}

const reverseString = (string) => {
    return string.split("").reverse().join("");
}

const capitalize = (string) => {
    if (typeof string !== 'string') {
        return false;
    }
    return string[0].toUpperCase() + string.slice(1);
}

class calculator {
    static add(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 + number2;
    }

    static subtract(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 - number2;
    }

    static divide(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 / number2;
    }

    static multiply(number1, number2) {
        if (typeof number1 === 'string' || typeof number2 === 'string') {
            throw new Error("Some arguments are not numbers");
        } else if (!number1 || !number2) {
            return undefined;
        }
        return number1 * number2;
    }
}

const functions = {stringLength, reverseString, capitalize, calculator}

module.exports = functions;

