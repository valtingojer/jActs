
var _jaMathHelper = {
    MaxDecimalPlaceNotFixed: function (number, decimalPlaces = 2) {
        var intNumber = parseInt(number);
        var fixedNumber = parseInt(number).toFixed(decimalPlaces);
        return (intNumber == fixedNumber) ? intNumber : fixedNumber;
    },
};
