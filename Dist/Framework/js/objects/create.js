/**
 * Description. 
   Instantiate create a copy of an object in a especific position
   it have options to especify the rotation, relativeness, id, afterInstantiateFunction
   
   Element is expected to have no float and position fixed or absolute

    position and rotation accepts both array with values or object with its values

   ie:
   _jaInstantiate(id, [x,y], null, null, null, null );
   _jaInstantiate(id, [x,y], [x,y,z,deg], relative_id, newObject_id, functionToBeExecuteAfterTheInstantiate );
   _jaInstantiate(_ja('objId'), _ja('otherObject')._jaPosition(), [0,0,30,30], _ja('ObjToBeRelative'), 'newObjectID', function(newEl){ console.log('Object '+newEl+' was instantiated') });
  

    //relativeTo

 * 
 * @param {Object} object Element who contains the full object, its id or unique references
 * @param {['X','Y']} position X and Y values
 * @param {['X','Y','Z','rotation degree']} rotation X Y Z factor and degree value
 * @param {Object} relativeTo Element to be relative or null to be body relative
 * @param {String} customId Element to be relative or null to be body relative
 * @param {Function} afterInstantiateFunc Element to be relative or null to be body relative
 * 
 */
var _jaInstantiate = function (object, position, rotation, relativeTo, customId, afterInstantiateFunc) {
    //TODO DO - IMPLEMENT GET ROTATION FROM OBJECT
    if (_jaIsNullEmptyOrUndefined(object) || _jaIsNullEmptyOrUndefined(position)) {
        console.log('Instanciate requires at last object and position');
        return;
    }
    var uniqueObject = (_jActs_GetElement(object).lenght > 0) ? _jActs_GetElement(object)[0] : _jActs_GetElement(object);
    var obj = {
        id: function () { return !_jaIsNullEmptyOrUndefined(customId) ? customId : 'CopyOf_id_' + object.id + '_class_' + object.className + '_' + _jaMath.RandomRange(1, 9999) + '_' + new Date().getTime().toString(); },
        el: function () { return uniqueObject.cloneNode(true); },
        setPosition: function (element) {
            let pos = getComputedStyle(element).getPropertyValue('position').toString().toLowerCase();
            //getComputedStyle(element).getPropertyValue('position')
            if (pos != 'fixed' && pos != 'absolute') {
                element.style.position = 'fixed';
            }
            return element;
        },
        setPositionXandY: function (element) {
            let pLeft, pTop;
            if (!_jaIsObject(relativeTo)) {
                pLeft = parseInt(position[0]) + 'px';
                pTop = parseInt(position[1]) + 'px';
            } else {
                pLeft = parseInt(position[0]) + parseInt(relativeTo._jaPosition(0)) + 'px';
                pTop = parseInt(position[1]) + parseInt(relativeTo._jaPosition(1)) + 'px';
            }
            element.style.left = pLeft;
            element.style.top = pTop;
            return element;
        },
        setRotation: function (element) {
            if (_jaIsNullEmptyOrUndefined(rotation) || rotation.length != 4) {
                return element;
            } else {
                element.style.transform = 'rotate3d(' + parseInt(rotation[0]) + ', ' + parseInt(rotation[1]) + ', ' + parseInt(rotation[2]) + ', ' + parseInt(rotation[3]) + 'deg)';
                return element;
            }
        },
        get: function () {
            let o = this.el();
            o.id = this.id();
            o.style.float = 'none'
            o = this.setPosition(o);
            o = this.setPositionXandY(o);
            o = this.setRotation(o);
            return o;
        },
    };
    myInstance = obj.get();

    document.body.append(myInstance);
    
    if (!_jaIsNullEmptyOrUndefined(afterInstantiateFunc) && _jaIsFunction(afterInstantiateFunc)) {
        return afterInstantiateFunc(myInstance);
    }
};