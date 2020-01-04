/********************************************************/
/********************************************************/
/*jActs version 1.0*/
/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/
/*About Variables*/
/********************************************************/
/********************************************************/
const _jaName = "jActs";
const _jaVersion = 1.0;
const _jaAboutVersion = _jaName + " version: " + _jaVersion + " is running";
const _jaShowAbout = true;
const _jaAutoIni = true;

/********************************************************/
/********************************************************/
/*Common Variables*/
/********************************************************/
/********************************************************/
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

/********************************************************/
/********************************************************/
/*Internal Mechanism Variables*/
/********************************************************/
/********************************************************/
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

/********************************************************/
/********************************************************/
/*Animate Frame Capture*/
/********************************************************/
/********************************************************/

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
/********************************************************/
/********************************************************/
/*Update and FixedUpdate*/
/********************************************************/
/********************************************************/
var _jaUpdate = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Update must have an function as parameter";
    } else {
        INTERNAL_JA_VARIABLES._UpdateFuncs.push(func);
    }
    //console.log("fps", _jaFrame.fps, "DeltaTime", _jaFrame.DeltaTime, "TempSeconds", INTERNAL_JA_VARIABLES.MillisecondsCount, "Second Count",_jaFrame.SecondCount); //Debug Update
};
var _jaFixedUpdate = function(func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "FixedUpdate must have an function as parameter";
    } else {
        INTERNAL_JA_VARIABLES._FixedUpdateFuncs.push(func);
    }
    //console.log("FixedUpdate"); //Debug FixedUpdate
};

/********************************************************/
/********************************************************/
/*actions call*/
/********************************************************/
/********************************************************/

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

/********************************************************/
/********************************************************/
/*True / False Verifications check*/
/********************************************************/
/********************************************************/
var _jaIsNullEmptyOrUndefined = function (somethingToCheck) {
    return (somethingToCheck == null || somethingToCheck == "" || somethingToCheck == "undefined");
}
var _jaIsFunction = function(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
/********************************************************/
/********************************************************/
/*something*/
/********************************************************/
/********************************************************/



/********************************************************/
/********************************************************/
/*something*/
/********************************************************/
/********************************************************/


/********************************************************/
/********************************************************/
/*init*/
/********************************************************/
/********************************************************/
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