var _jaInstantiate = function (object, position, rotation, relativeToScreen, customId, afterCreation) {
    //TODO DO - IMPLEMENT ROTATION AND RELATIVE TO OBJECT

    var obj = {
        id: function () {
            return !_jaIsNullEmptyOrUndefined(customId) ? customId : 'CopyOf_id_' + object.id + '_class_' + object.className + '_' + _jaMath.RandomRange(1, 9999) + '_' + new Date().getTime().toString();
        },
    };

    newObj = object.cloneNode(true);
    newObj.id = obj.id();
    newObj.style.top = "300px";

    document.body.append(newObj);
    
    if (!_jaIsNullEmptyOrUndefined(afterCreation) && _jaIsFunction(afterCreation)) {
        return afterCreation(newObj);
    }
};