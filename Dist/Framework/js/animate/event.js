var _jActs_Animate = {
    //time counting
    MillisecondsCount: 0, //internal milliseconds temp count
    MillisecondsForDoubleSecond: 0,
    MillisecondsForHalfSecond: 0,
    MillisecondsForQuartSecond: 0,
    MillisecondsForTenthSecond: 0,
    SecondsForMunutCount: 0,
    SecondsForDoubleMunutCount: 0,
    SecondsForHalfMunutCount: 0,
    SecondsForQuartMunutCount: 0,
    SecondsForTenthMunutCount: 0,
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
        _jActs_Animate.MillisecondsForHalfSecond = parseInt(_jActs_Animate.MillisecondsForHalfSecond) + parseInt(_jaFrame.DeltaTime);
        _jActs_Animate.MillisecondsForQuartSecond = parseInt(_jActs_Animate.MillisecondsForQuartSecond) + parseInt(_jaFrame.DeltaTime);
        _jActs_Animate.MillisecondsForTenthSecond = parseInt(_jActs_Animate.MillisecondsForTenthSecond) + parseInt(_jaFrame.DeltaTime);
        _jActs_Animate.MillisecondsForDoubleSecond = parseInt(_jActs_Animate.MillisecondsForDoubleSecond) + parseInt(_jaFrame.DeltaTime);

        if (_jActs_Animate.MillisecondsCount >= 1000) {
            _jaTime.secondCount = parseInt(_jaTime.secondCount) + 1;
            _jActs_Animate.MillisecondsCount = 0;

            _jActs_Animate.SecondsForMunutCount = parseInt(_jActs_Animate.SecondsForMunutCount) + 1;
            _jActs_Animate.SecondsForDoubleMunutCount = parseInt(_jActs_Animate.SecondsForDoubleMunutCount) + 1;
            _jActs_Animate.SecondsForHalfMunutCount = parseInt(_jActs_Animate.SecondsForHalfMunutCount) + 1;
            _jActs_Animate.SecondsForQuartMunutCount = parseInt(_jActs_Animate.SecondsForQuartMunutCount) + 1;
            _jActs_Animate.SecondsForTenthMunutCount = parseInt(_jActs_Animate.SecondsForTenthMunutCount) + 1;
        }
        if (_jActs_Animate.MillisecondsForHalfSecond >= 500) {
            _jaTime.halfSecondCount = parseInt(_jaTime.halfSecondCount) + 1;
            _jActs_Animate.MillisecondsForHalfSecond = 0;
        }
        if (_jActs_Animate.MillisecondsForQuartSecond >= 250) {
            _jaTime.quartSecondCount = parseInt(_jaTime.quartSecondCount) + 1;
            _jActs_Animate.MillisecondsForQuartSecond = 0;
        }
        if (_jActs_Animate.MillisecondsForTenthSecond >= 100) {
            _jaTime.tenthSecondCount = parseInt(_jaTime.tenthSecondCount) + 1;
            _jActs_Animate.MillisecondsForTenthSecond = 0;
        }
        if (_jActs_Animate.MillisecondsForDoubleSecond >= 2000) {
            _jaTime.doubleSecondCount = parseInt(_jaTime.doubleSecondCount) + 1;
            _jActs_Animate.MillisecondsForDoubleSecond = 0;
        }

        if (_jActs_Animate.SecondsForMunutCount >= 60) {
            _jaTime.minutCount = parseInt(_jaTime.minutCount) + 1;
            _jActs_Animate.SecondsForMunutCount = 0;
        }
        if (_jActs_Animate.SecondsForDoubleMunutCount >= 120) {
            _jaTime.doubleMinutCount = parseInt(_jaTime.doubleMinutCount) + 1;
            _jActs_Animate.SecondsForDoubleMunutCount = 0;
        }
        if (_jActs_Animate.SecondsForHalfMunutCount >= 30) {
            _jaTime.halfMinutCount = parseInt(_jaTime.halfMinutCount) + 1;
            _jActs_Animate.SecondsForHalfMunutCount = 0;
        }
        if (_jActs_Animate.SecondsForQuartMunutCount >= 15) {
            _jaTime.quartMinutCount = parseInt(_jaTime.quartMinutCount) + 1;
            _jActs_Animate.SecondsForQuartMunutCount = 0;
        }
        if (_jActs_Animate.SecondsForTenthMunutCount >= 6) {
            _jaTime.tenthMinutCount = parseInt(_jaTime.tenthMinutCount) + 1;
            _jActs_Animate.SecondsForTenthMunutCount = 0;
        }

    }
};

