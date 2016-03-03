// four standard arithmetic operations

var add = function (n1, n2) {
    return n1 + n2;
};

var subtract = function (n1, n2) {
    return n1 - n2;
};

var divide = function (n1, n2) {
    if (n2 === 0) {
        throw new Error("Attempt to divide by zero");
    }
    return n1 / n2;
};

var multiply = function (n1, n2) {
    return n1 * n2;
};

module.exports = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
};
