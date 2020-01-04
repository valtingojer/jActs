/********************************************************/
/*jActs version 1.0*/
/********************************************************/
"use strict";

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
}
/********************************************************/
/*About Variables*/
/********************************************************/
var _jaName = "jActs";
var _jaVersion = 1.0;
var _jaAboutVersion = _jaName + " version: " + _jaVersion + " is running";

/********************************************************/
/*Common Variables*/
/********************************************************/
var _StartTime = new Date();
var _DeltaTime = 0;
var _FPS = 0;
var _SECOND_COUNT = 0;

//Internal only Variables
var ___FIXED_UPDATE_DELAY = 20;
var ___SECONDS_COUNT = 0;
var ___t = [];
var ___POS_DELTA_TIME = _StartTime;

function ___ANIMATE(now) {
    ___t.unshift(now);
    if (___t.length > 10) {
        ___InternalUpdate(now);
        _Update();
    }
    window.requestAnimationFrame(___ANIMATE);

    this.___InternalUpdate = function (now, dateNow) {
        var t0 = ___t.pop();
        _FPS = Math.floor(1000 * 10 / (now - t0));
        _DeltaTime = new Date() - ___POS_DELTA_TIME;
        ___POS_DELTA_TIME = new Date();

        ___SECONDS_COUNT += _DeltaTime;

        //console.log(___SECONDS_COUNT, _DeltaTime); //Debug seconds counting

        if (___SECONDS_COUNT >= 1000) {
            _SECOND_COUNT++;
            //console.log(_SECOND_COUNT); //Debug Second Count
            ___SECONDS_COUNT = 0;
        }
    };
};

var _Update = function _Update() {
    //console.log("fps", _FPS, "DeltaTime", _DeltaTime, "TempSeconds", ___SECONDS_COUNT, "Second Count",_SECOND_COUNT); //Debug Update
};
var _FixedUpdate = function _FixedUpdate() {
    //console.log("FixedUpdate"); //Debug FixedUpdate
};
var ___CALL_FIXED_UPDATE = function ___CALL_FIXED_UPDATE() {
    _FixedUpdate();
    setTimeout(___CALL_FIXED_UPDATE, ___FIXED_UPDATE_DELAY);
};
window.requestAnimationFrame(___ANIMATE);
___CALL_FIXED_UPDATE();
console.log(_jaAboutVersion);

