const repeatString = function (phrase, number) {
    let finalPhrase = "";

    if (number < 0) {
        return "ERROR";
    }
    for (let index = 0; index < number; index++) {
        finalPhrase += phrase;
    }
    return finalPhrase;
};

module.exports = repeatString;
