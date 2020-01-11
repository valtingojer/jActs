var _jActsClassAndIdHelper = function (action, element) {

    this.TranslateClassAndId = function () {
        var valueToReturn = [];
        var blank = [];
        var content = [];

        var tmpElement = element.toString().replace('.', '');
        tmpElement = tmpElement.toString().replace('#', '');
        content.push(tmpElement);

        if (element.toString().startsWith('.')) {
            valueToReturn.push(blank);
            valueToReturn.push(content);
        } else if (element.toString().startsWith('#')) {
            valueToReturn.push(content);
            valueToReturn.push(blank);
        }

        return valueToReturn;
    };

    switch (action) {
        case "TranslateClassAndId":
            return TranslateClassAndId();
            break;
        default:
            break;
    }
};
