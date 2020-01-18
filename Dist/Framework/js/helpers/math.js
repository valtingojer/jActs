
var _jaMathHelper = {
    MaxDecimalPlaceNotFixed: function (number, decimalPlaces = 2) {
        var intNumber = parseInt(number);
        var fixedNumber = parseInt(number).toFixed(decimalPlaces);
        return (intNumber == fixedNumber) ? intNumber : fixedNumber;
    },
    RandomRange : function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
};

var _jaMath = {
    Random: function () { return Math.random(); },
    RandomRange: function (min, max) { return _jaMathHelper.RandomRange(min, max); },
};

Number.prototype._jaClamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};