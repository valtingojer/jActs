/*~******************************************************~*/
/*~******************************************************~*/
/*jActs version 1.0*/
/*~******************************************************~*/
/*~******************************************************~*/

/*~******************************************************~*/
/*~******************************************************~*/
/*About Variables*/
/*~******************************************************~*/
/*~******************************************************~*/
const _jaName = "jActs";
const _jaVersion = 1.0;
const _jaAboutVersion = _jaName + " version: " + _jaVersion + " is running";
const _jaShowAbout = true;
const _jaAutoIni = true;

/*~******************************************************~*/
/*~******************************************************~*/
/*Common Variables*/
/*~******************************************************~*/
/*~******************************************************~*/
const _jaStartTime = new Date();
var _jaTime = {
    Start: _jaStartTime, //Time when script first started
    SecondCount: 0, //Seconds since page was started
    DeltaTime : 0, //Time between frames
}
var _jaFrame = {
    DeltaTime : 0, //Time between frames
    fps: 0, //Frames peer second, limited by INTERNAL_JA_VARIABLES.MinimumRefreshTime
}
var _jaMathHelper = {
    MaxDecimalPlaceNotFixed: function (number, decimalPlaces = 2) {
        var intNumber = parseInt(number);
        var fixedNumber = number.toFixed(decimalPlaces);
        return (intNumber == fixedNumber) ? intNumber : fixedNumber;
    },
};
var _jActsWindowSizeHelper = function (action) {
    var totalTop = function (id) { return _jaMathHelper.MaxDecimalPlaceNotFixed(document.getElementById(id).offsetTop + _jaWindow.scroll.y());   };
    var offsetLeft = function (id) { return _jaMathHelper.MaxDecimalPlaceNotFixed(document.getElementById(id).offsetLeft); };

    switch (action) {
        //absolute positions
        //topleft
        case "TopLeft_offset_top": return totalTop(_jaWindow.element.topLeft.id);
        case "TopLeft_offset_left": return offsetLeft(_jaWindow.element.topLeft.id);
        //topRight
        case "TopRight_offset_top": return totalTop(_jaWindow.element.topRight.id);
        case "TopRight_offset_left": return offsetLeft(_jaWindow.element.topRight.id);
        //bottomLeft
        case "BottomLeft_offset_top": return totalTop(_jaWindow.element.bottomLeft.id);
        case "BottomLeft_offset_left": return offsetLeft(_jaWindow.element.bottomLeft.id);
        //bottomRight
        case "BottomRight_offset_top": return totalTop(_jaWindow.element.bottomRight.id);
        case "BottomRight_offset_left": return offsetLeft(_jaWindow.element.bottomRight.id);

        case "GetXSize": return _jaWindow.element.topLeft.position.right() - _jaWindow.element.topLeft.position.left();
        case "GetYSize": return _jaWindow.element.topLeft.position.bottom() - _jaWindow.element.topLeft.position.top();

        case "GetMidleX": return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.topLeft.position.right() / 2);
        case "GetMidleY": return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.topLeft.position.bottom() / 2);

        case "WindowBottomToDocumentTop":
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.bottomLeft.position.top() - _jaDocument.position.top());

        case "DocumentSize":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top + _jaWindow.scroll.y());
        case "DocumentTopPos":
            var el = document.getElementById(_jaDocument.element.top.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top + _jaWindow.scroll.y());
        case "DocumentTopWindowTop":
            var el = document.getElementById(_jaDocument.element.top.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaDocument.position.top() + _jaWindow.scroll.y());
        case "DocumentToWindowTop":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top);
        case "DocumentToWindowBottom":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top - _jaWindow.size.y());

        default:
    }
};
var _jaWindow = {
    scroll: {
        y: function () { return _jaMathHelper.MaxDecimalPlaceNotFixed(window.scrollY); },
    },
    element: {
        scrollbar: {
            width: window.innerWidth - document.documentElement.clientWidth, //Todo leftcorner - element 100 width
        },
        topLeft: {
            id: "jacts-fixed-top-left",
            position: {
                top: function () { return _jActsWindowSizeHelper('TopLeft_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('BottomLeft_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('TopLeft_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('TopRight_offset_left'); },
            },
        },
        topRight: {
            id: "jacts-fixed-top-right",
            position: {
                top: function () { return _jActsWindowSizeHelper('TopRight_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('BottomRight_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('TopRight_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('TopLeft_offset_left'); },
            },
        },
        bottomLeft: {
            id: "jacts-fixed-bottom-left",
            position: {
                top: function () { return _jActsWindowSizeHelper('BottomLeft_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('TopLeft_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('BottomLeft_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('BottomRight_offset_left'); },
            },
        },
        bottomRight: {
            id: "jacts-fixed-bottom-right",
            position: {
                top: function () { return _jActsWindowSizeHelper('BottomRight_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('TopRight_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('BottomRight_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('BottomLeft_offset_left'); },
            },
        },
    },
    size: {
        x: function () { return _jActsWindowSizeHelper("GetXSize"); },
        y: function () { return _jActsWindowSizeHelper("GetYSize"); },
        xpx: function () { return _jActsWindowSizeHelper("GetXSize").toString() + "px"; },
        ypx: function () { return _jActsWindowSizeHelper("GetYSize").toString() + "px"; },
        v2: function () { return [_jActsWindowSizeHelper("GetXSize"), _jActsWindowSizeHelper("GetYSize")] },
        XbyY: function () { return _jActsWindowSizeHelper("GetXSize").toString() + "x" + _jActsWindowSizeHelper("GetYSize").toString() },
    },
    middle: {
        x: function(){ return _jActsWindowSizeHelper("GetMidleX"); },
        y: function(){ return _jActsWindowSizeHelper("GetMidleY"); },
    },
    offset: {
        top: {
            toDocumentTop: function () { return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.scroll.y()) },
            toDocumentBottom: function () { return _jaDocument.offset.bottom.toWindowTop(); },
        },
        bottom: {
            toDocumentTop: function () { return _jActsWindowSizeHelper('WindowBottomToDocumentTop'); },
            toDocumentBottom: function () { return _jaDocument.offset.bottom.toWindowBottom(); },
        },
    },
}

var _jaDocument = {
    element:{
        top : { id: "jacts-absolute-top" },
        bottom : { id: "jacts-absolute-bottom" },
    },
    size: {
        y: function(){ return _jActsWindowSizeHelper("DocumentSize"); },
    },
    position: {
        top: function () { return _jActsWindowSizeHelper("DocumentTopPos"); },
        bottom: function () { return _jActsWindowSizeHelper("DocumentSize"); },
    },
    offset: {
        top: {
            toWindowTop: function () { return _jActsWindowSizeHelper("DocumentTopWindowTop"); },
            toWindowBottom: function () { return _jActsWindowSizeHelper('WindowBottomToDocumentTop'); },
        },
        bottom: {
            toWindowTop: function () { return _jActsWindowSizeHelper("DocumentToWindowTop"); },
            toWindowBottom: function () { return _jActsWindowSizeHelper("DocumentToWindowBottom"); },
        },
    },
}
/*~******************************************************~*/
/*~******************************************************~*/
/*Internal Mechanism Variables*/
/*~******************************************************~*/
/*~******************************************************~*/
var INTERNAL_JA_VARIABLES = {
    //time counting
    MillisecondsCount: 0, //internal milliseconds temp count
    T: [], //base time recives the now value from animate
    PosDeltaTime: _jaStartTime, //Used as temp to calculate delta time
    MinimumRefreshTime: 10, //Defines the minimum milliseconts value to try refresh the frame

    //Update and fixed Update
    FixedUpdateDelay: 20, //Time between fixe update repeat it self
    _UpdateFuncs : [], //array with all update funcs registered
    _FixedUpdateFuncs : [], //array with all fixed update funcs registered

    //something


    //something


    //something

};

/*~******************************************************~*/
/*~******************************************************~*/
/*Animate Frame Capture*/
/*~******************************************************~*/
/*~******************************************************~*/

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame;
}

var ___ANIMATE = function(now) {
    INTERNAL_JA_VARIABLES.T.unshift(now);
    if (INTERNAL_JA_VARIABLES.T.length > INTERNAL_JA_VARIABLES.MinimumRefreshTime) {
        ___InternalUpdate(now);
        _jaDoThe("Update");
    }
    window.requestAnimationFrame(___ANIMATE);

    this.___InternalUpdate = function(now, dateNow) {
        var t0 = INTERNAL_JA_VARIABLES.T.pop();
        _jaFrame.fps = Math.floor(1000 * 10 / (now - t0));
        _jaFrame.DeltaTime = new Date() - INTERNAL_JA_VARIABLES.PosDeltaTime;
        _jaTime.DeltaTime = _jaFrame.DeltaTime;
        INTERNAL_JA_VARIABLES.PosDeltaTime = new Date();

        INTERNAL_JA_VARIABLES.MillisecondsCount = parseInt(INTERNAL_JA_VARIABLES.MillisecondsCount) + parseInt(_jaFrame.DeltaTime);

        //console.log(INTERNAL_JA_VARIABLES.MillisecondsCount, _jaFrame.DeltaTime); //Debug seconds counting

        if (INTERNAL_JA_VARIABLES.MillisecondsCount >= 1000) {
            _jaTime.SecondCount = parseInt(_jaTime.SecondCount) + 1;
            INTERNAL_JA_VARIABLES.MillisecondsCount = 0;
            //console.log(_jaFrame.SecondCount); //Debug Second Count
        }
    }
};


/*~******************************************************~*/
/*~******************************************************~*/
/*Ambient Modifications*/
/*~******************************************************~*/
/*~******************************************************~*/

var _jActsPrepareAmbient = {
    setNumericPosition: function (el, top = 'unset', right = 'unset', bottom = 'unset', left = 'unset') {
        if (!_jaIsNullEmptyOrUndefined(top)) {
            el.style.top = top.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(right)) {
            el.style.right = right.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(bottom)) {
            el.style.bottom = bottom.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(left)) {
            el.style.left = left.toString() + "px";
        }
        return el;
    },
    setZindex: function (el) {
        el.className = 'jacts-holder-debug-class';
        el.style.zIndex = -9999;
        return el;
    },
    setAbsoluePosition: function (el) {
        el.style.position = "absolute";
        return el;
    },
    setFixedPosition: function (el) {
        el.style.position = "fixed";
        return el;
    },
    setFixedAndZindex: function (el) {
        return this.setFixedPosition(this.setZindex(el));
    },
    setAbsAndZindex: function (el) {
        return this.setAbsoluePosition(this.setZindex(el));
    },
    createMainHolder: function () {
        var mainHolder = document.createElement("div");
        mainHolder.id = 'jacts-main-holder';
        mainHolder = this.setAbsAndZindex(mainHolder);
        mainHolder = this.setNumericPosition(mainHolder, '0', null, null, '0');
        document.body.prepend(mainHolder);
    },
    createFixedReferences: function () {
        var ref1 = document.createElement("div");
        var ref2 = document.createElement("div");
        var ref3 = document.createElement("div");
        var ref4 = document.createElement("div");

        ref1 = this.setFixedAndZindex(ref1);
        ref2 = this.setFixedAndZindex(ref2);
        ref3 = this.setFixedAndZindex(ref3);
        ref4 = this.setFixedAndZindex(ref4);

        var topLeft = this.setNumericPosition(ref1, '0', null, null, '0');
        var topRight = this.setNumericPosition(ref2, '0', '0');
        var bottomLeft = this.setNumericPosition(ref3, null, null, '0', '0');
        var bottomRight = this.setNumericPosition(ref4, null, '0', '0', null);

        topLeft.id = "jacts-fixed-top-left";
        topRight.id = "jacts-fixed-top-right";
        bottomLeft.id = "jacts-fixed-bottom-left";
        bottomRight.id = "jacts-fixed-bottom-right";

        topRight.style.float = "right";
        bottomRight.style.float = "right";

        var holder = document.getElementById('jacts-main-holder');

        holder.appendChild(topLeft);
        holder.appendChild(topRight);
        holder.appendChild(bottomLeft);
        holder.appendChild(bottomRight);
    },
    createAbsoluteReferences: function () {
        var ref1 = document.createElement("div");
        var ref2 = document.createElement("div");

        ref1 = this.setAbsAndZindex(ref1);
        ref2 = this.setZindex(ref2);

        var top = this.setNumericPosition(ref1, '0', '0');
        var bottom = this.setNumericPosition(ref2, null, null, '0', '0');

        top.id = "jacts-absolute-top";
        bottom.id = "jacts-absolute-bottom";

        top.style.float = "right";
        bottom.style.float = "right";

        var holder = document.body;

        holder.appendChild(top);
        holder.appendChild(bottom);
    },

    init: function () {
        this.createMainHolder();
        this.createFixedReferences();
        this.createAbsoluteReferences();
    },
}

/*~******************************************************~*/
/*~******************************************************~*/
/*~Update and FixedUpdate~*/
/*~******************************************************~*/
/*~******************************************************~*/

/**
 * Description. 
   Send a function inside this, like that:
   
   _jaUpdate( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaUpdate = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Update must have an function as parameter";
    } else {
        INTERNAL_JA_VARIABLES._UpdateFuncs.push(func);
    }
    //console.log("fps", _jaFrame.fps, "DeltaTime", _jaFrame.DeltaTime, "TempSeconds", INTERNAL_JA_VARIABLES.MillisecondsCount, "Second Count",_jaFrame.SecondCount); //Debug Update
};
/**
 * Description. 
   Send a function inside this, like that:
   
   _jaFixedUpdate( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaFixedUpdate = function(func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "FixedUpdate must have an function as parameter";
    } else {
        INTERNAL_JA_VARIABLES._FixedUpdateFuncs.push(func);
    }
    //console.log("FixedUpdate"); //Debug FixedUpdate
};


/*~******************************************************~*/
/*~******************************************************~*/
/*Move Functions*/
/*~******************************************************~*/
/*~******************************************************~*/
/**
 * Description. 
   Move element foward on left css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) left based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- set of classes . if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- set of classes . if does not work properly try previous

    Exemple of call based on id
    (ie.1) _jaMoveLeftFoward('#elementId');
    (ie.2) _jaMoveLeftFoward('#elementId', 10); 
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveLeftFoward = function (elCode, factor = 1) {
    _jActsMovementsHelper("left", "foward", elCode, factor);
}
/**
 * Description. 
   Move element backward on left css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) left based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveLeftBackward('#elementId');
    (ie.2) _jaMoveLeftBackward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveLeftBackward = function (elCode, factor = 1) {
    _jActsMovementsHelper("left", "backward", elCode, factor);
}
/**
 * Description. 
   Move element upward on top css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) top based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveTopUpward('#elementId');
    (ie.2) _jaMoveTopUpward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveTopUpward = function (elCode, factor = 1) {
    _jActsMovementsHelper("top", "upward", elCode, factor);
}
/**
 * Description. 
   Move element downward on top css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) top based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveTopDownward('#elementId');
    (ie.2) _jaMoveTopDownward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveTopDownward = function (elCode, factor = 1) {
    _jActsMovementsHelper("top", "downward", elCode, factor);
}

/*~******************************************************~*/
/*~******************************************************~*/
/*actions call*/
/*~******************************************************~*/
/*~******************************************************~*/

var _jaDoThe = function (action) {
    switch (action) {
        case "Update":
            INTERNAL_JA_VARIABLES._UpdateFuncs.forEach(chieldFunc => chieldFunc());
            break;
        case "FixedUpdate":
            INTERNAL_JA_VARIABLES._FixedUpdateFuncs.forEach(chieldFunc => chieldFunc());
            break;
        default:
            //default action
            break;
    }
}

/*~******************************************************~*/
/*~******************************************************~*/
/*HELPER actions*/
/*~******************************************************~*/
/*~******************************************************~*/
var _jActsHelper = function (action, element) {
    
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

var _jActsMovementsHelper = function (origin, direction, elCode, factor) {
    this.getCalcBasedOnDirection = function (position) {
        switch (direction) {
            case "foward":  return position + factor;
            case "backward": return position - factor;
            case "upward": return position - factor;
            case "downward": return position + factor;
            default:
                break;
        }
    };
    this.changeStyle = function (el, value) {
        switch (origin) {
            case "left": el.style.left = value; break;
            case "top": el.style.top = value; break;
            case "right": el.style.right = value; break;
            case "bottom": el.style.bottom = value; break;
            default:
                break;
        }
    };
    this.makeMove = function (el) {
        var pxValue = window.getComputedStyle(el, null).getPropertyValue(origin);
        var increaseValue = getCalcBasedOnDirection(parseInt(pxValue));
        changeStyle(el, increaseValue.toString() + "px");
    }
    this.makeClassMove = function (className) {
        var els = document.getElementsByClassName(className);

        if (els.length > 0) {
            for (var i = 0; i < els.length; i++) {
                makeMove(els[i]);
            }
        }
    };
    this.makeIdMove = function (idName) {
        var el = document.getElementById(idName);

        if (!_jaIsNullEmptyOrUndefined(el)) {
            makeMove(el);
        }

    };

    var codes = _jActsHelper("TranslateClassAndId", elCode);

    if (codes.length > 0) {
        for (var code = 0; code < codes.length; code++) {
            switch (code) {
                case 0:
                    codes[code].forEach(function (elVal) {
                        makeIdMove(elVal);
                    });
                    break;
                case 1:
                    codes[code].forEach(function (elVal) {
                        makeClassMove(elVal);
                    });
                    break;
                default:
                    break;
            }
        }
    }
    
};

/*~******************************************************~*/
/*~******************************************************~*/
/*True / False Verifications check*/
/*~******************************************************~*/
/*~******************************************************~*/
var _jaIsNullEmptyOrUndefined = function (somethingToCheck) {
    return (somethingToCheck == null || somethingToCheck == "" || somethingToCheck == "undefined");
}
var _jaIsFunction = function(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

/*~******************************************************~*/
/*~******************************************************~*/
/*something*/
/*~******************************************************~*/
/*~******************************************************~*/



/*~******************************************************~*/
/*~******************************************************~*/
/*something*/
/*~******************************************************~*/
/*~******************************************************~*/


/*~******************************************************~*/
/*~******************************************************~*/
/*init*/
/*~******************************************************~*/
/*~******************************************************~*/
var _jaIni = function () {
    window.requestAnimationFrame(___ANIMATE);
    _jActsPrepareAmbient.init();
    setInterval(function () { _jaDoThe("FixedUpdate"); }, INTERNAL_JA_VARIABLES.FixedUpdateDelay);
    if (_jaShowAbout) { console.log(_jaAboutVersion); }
}
var _jaDoTheAutoIni = function(){
    if (_jaAutoIni) {
        _jaIni();
    }
}
window.onload = function () {
    _jaDoTheAutoIni();
};
