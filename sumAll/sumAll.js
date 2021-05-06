const sumAll = function (min, max) {
    if (
        typeof min !== "number" ||
        typeof max !== "number" ||
        min < 0 ||
        max < 0
    ) {
        return "ERROR";
    }

    if (max < min) {
        [min, max] = [max, min];
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
