var _jActs_Animate = {
    //time counting
    MillisecondsCount: 0, //internal milliseconds temp count
    T: [], //base time recives the now value from animate
    PosDeltaTime: _jaStartTime, //Used as temp to calculate delta time
    MinimumRefreshTime: 10, //Defines the minimum milliseconts value to try refresh the frame
};

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame;
}

var ___ANIMATE = function (now) {
    _jActs_Animate.T.unshift(now);
    if (_jActs_Animate.T.length > _jActs_Animate.MinimumRefreshTime) {
        ___InternalUpdate(now);
        _jaDoTheAction("Update");
    }
    window.requestAnimationFrame(___ANIMATE);

    this.___InternalUpdate = function (now, dateNow) {
        var t0 = _jActs_Animate.T.pop();
        _jaFrame.fps = Math.floor(1000 * 10 / (now - t0));
        _jaFrame.DeltaTime = new Date() - _jActs_Animate.PosDeltaTime;
        _jaTime.DeltaTime = _jaFrame.DeltaTime;
        _jActs_Animate.PosDeltaTime = new Date();

        _jActs_Animate.MillisecondsCount = parseInt(_jActs_Animate.MillisecondsCount) + parseInt(_jaFrame.DeltaTime);

        //console.log(_jActs_Animate.MillisecondsCount, _jaFrame.DeltaTime); //Debug seconds counting

        if (_jActs_Animate.MillisecondsCount >= 1000) {
            _jaTime.SecondCount = parseInt(_jaTime.SecondCount) + 1;
            _jActs_Animate.MillisecondsCount = 0;
            //console.log(_jaFrame.SecondCount); //Debug Second Count
        }
    }
};

