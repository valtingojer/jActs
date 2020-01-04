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
    (ie.1) _jaMoveLeftBackward('#elementId');
    (ie.2) _jaMoveLeftBackward('#elementId', 10);
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
    (ie.1) _jaMoveLeftBackward('#elementId');
    (ie.2) _jaMoveLeftBackward('#elementId', 10);
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
    setInterval(function () { _jaDoThe("FixedUpdate"); }, INTERNAL_JA_VARIABLES.FixedUpdateDelay);
    if (_jaShowAbout) { console.log(_jaAboutVersion); }
}
var _jaDoTheAutoIni = function(){
    if (_jaAutoIni) {
        _jaIni();
    }
}
_jaDoTheAutoIni();