var calculator = require('../lib/calculator.js');
var expect = require('chai').expect;

describe('CalculatorTest', function () {
    describe('Verify the arithmetic operations of the calculator', function () {
        it('Add: should return 2 when inputting 1 and 1', function () {
            expect(calculator.add(1, 1)).to.be.equal(2);
        });
        it('Subtract: should return 0 when inputting 10 and 10', function () {
            expect(calculator.subtract(10, 10)).to.be.equal(0);
        });
        it('Divide: should return 2 when inputting 4 and 2', function () {
            expect(calculator.divide(4, 2)).to.be.equal(2);
        });
        it('Divide: should throw error when inputtin 2 and 0', function () {
            expect(function () {
                calculator.divide(2, 0);
            }).to.throw('Attempt to divide by zero');
        });
        it('Multiply: should return 100 when inputting 10 and 10', function () {
            expect(calculator.multiply(10, 10)).to.be.equal(100);
        });
    });
});
