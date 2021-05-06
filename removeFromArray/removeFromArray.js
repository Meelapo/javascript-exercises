const removeFromArray = function (range, ...values) {
    return range.filter((val) => !values.includes(val));
};

module.exports = removeFromArray;
