
var _jaMathHelper = {
    MaxDecimalPlaceNotFixed: function (number, decimalPlaces = 2) {
        var intNumber = parseInt(number);
        var fixedNumber = parseInt(number).toFixed(decimalPlaces);
        return (intNumber == fixedNumber) ? intNumber : fixedNumber;
    },
    RandomRange : function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    GetLetter: function (num) {
        switch (num) {
            case 1: return 'a';
            case 2: return 'b';
            case 3: return 'c';
            case 4: return 'd';
            case 5: return 'e';
            case 6: return 'f';
            case 7: return 'g';
            case 8: return 'h';
            case 9: return 'i';
            case 10: return 'j';
            case 11: return 'k';
            case 12: return 'l';
            case 13: return 'm';
            case 14: return 'n';
            case 15: return 'o';
            case 16: return 'p';
            case 17: return 'q';
            case 18: return 'r';
            case 19: return 's';
            case 20: return 't';
            case 21: return 'u';
            case 22: return 'v';
            case 23: return 'w';
            case 24: return 'x';
            case 25: return 'y';
            case 26: return 'z';
            default: return 'Error, random letter from 1 to 26';
        }
    },
};

var _jaMath = {
    Random: function () { return Math.random(); },
    RandomRange: function (min, max) { return _jaMathHelper.RandomRange(min, max); },
    RandomLetter: function (min, max) {
        let minLetterNumber = 1;
        let maxLetterNumber = 26;
        min = Math.max(min, minLetterNumber);
        max = Math.min(max, maxLetterNumber);
        let currentLetterNumber = _jaMathHelper.RandomRange(min, max);
        let letterByNumber = _jaMathHelper.GetLetter(currentLetterNumber);
        return letterByNumber;
    },
};

Number.prototype._jaClamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};