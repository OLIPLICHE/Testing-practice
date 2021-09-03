const {stringLength, reverseString, capitalize, calculator} = require('./main');

describe('String functions', () => {
    test('Length of "World" is 5', () =>{
        // Assert
        expect(stringLength('World')).toBe(5);
    });

    test('Length of string is too long', () =>{
        // Assert
        expect(stringLength('hello world')).toThrow(Error);
    });

    test('Length of string is too short', () =>{
        // Assert
        expect(stringLength('')).toThrow(Error);
    });

    test('Get a reverse string', () =>{
        // Assert
        expect(reverseString("arthur")).toMatch(/ruhtra/);
    });

    test('capitalize should return first character capitalized', () =>{
        // Assert
        expect(capitalize("arthur")).toMatch(/Arthur/);
    })

    test('capitalize should receive a string', () =>{
        // Assert
        expect(capitalize(world)).toBeTruthy();
    })
})

describe('Calculator functions', () => {
    describe('add function', () =>{
        test('add of 5 and 3 is 8', () =>{
            // Assert
            expect(calculator.add(5,3)).toBe(8);
        })

        test('add does not have undefined arguments', () =>{
            // Assert
            expect(calculator.add(5)).toBeDefined();
        })

        test('add return a number', () =>{
            // Assert
            expect(calculator.add('1',3)).toThrow(Error);
        })
    });

    describe('substract function', () =>{
        test('substract of 10 and 3 is 7', () =>{
            // Assert
            expect(calculator.subtract(10,3)).toBe(7);
        })

        test('substract does not have undefined arguments', () =>{
            // Assert
            expect(calculator.subtract(10)).toBeDefined();
        })

        test('substract should return a number', () =>{
            // Assert
            expect(calculator.subtract(10,'3')).toThrow(Error);
        })
    });

    describe('divide function', () =>{
        test('divide of 25 and 5 is 5', () =>{
            // Assert
            expect(calculator.divide(25,5)).toBe(5);
        })

        test('divide does not have undefined arguments', () =>{
            // Assert
            expect(calculator.divide(25)).toBeDefined();
        })

        test('divide return a number', () =>{
            // Assert
            expect(calculator.divide('25','10')).toThrow(Error);
        })
    });

    describe('multiply function', () =>{
        test('multiply of 100 and 5 is 500', () =>{
            // Assert
            expect(calculator.multiply(100,5)).toBe(500);
        })

        test('multiply does not have undefined arguments', () =>{
            // Assert
            expect(calculator.multiply(500)).toBeDefined();
        })

        test('multiply return a number', () =>{
            // Assert
            expect(calculator.multiply('50',8)).toThrow(Error);
        })
    });
})
