

_jaUpdate(function () {

    document.getElementById("label_secondcount").innerText = _jaTime.SecondCount;
    document.getElementById("label_fps").innerText = _jaFrame.fps;
    document.getElementById("label_deltatime").innerText = _jaTime.DeltaTime;
});


var moveloopvars = {
    speed: 5,
    endPoint: 0,
    position: 0,
    moveLeft: true,
};

_jaUpdate(function () {
    let moveLoopEl = document.getElementById('moveLoop');
    if (!_jaIsNullEmptyOrUndefined(moveLoopEl)) {

        moveloopvars.endPoint = _jaWindow.element.topRight.position.left();
        moveloopvars.position = moveLoopEl.getBoundingClientRect().left;

        if (
            moveloopvars.position >= (parseInt(moveloopvars.endPoint) * 0.95) ||
            moveloopvars.position < (200 + (parseInt(moveloopvars.endPoint) * 0.05))
        )
        {
            moveloopvars.moveLeft = !moveloopvars.moveLeft;
        }

        if (moveloopvars.moveLeft) {
            _jaMoveLeftForward('#moveLoop', (moveloopvars.speed + _jaTime.SecondCount) );
        } else {
            _jaMoveLeftBackward('#moveLoop', (moveloopvars.speed + _jaTime.SecondCount) );
        }
        
    }
});

_jaAfterLoadFuncs(function () {
    let keyboardTestEl = document.getElementById('keyControlled');
    if (!_jaIsNullEmptyOrUndefined(keyboardTestEl)) {
        let speed = 5;
        _jaKeyBind.Down.move.right(function () {
            _jaMoveLeftForward("#keyControlled", speed);
        });
        _jaKeyBind.Down.move.left(function () {
            _jaMoveLeftBackward("#keyControlled", speed);
        });
        _jaKeyBind.Down.move.up(function () {
            _jaMoveTopUpward("#keyControlled", speed);
        });
        _jaKeyBind.Down.move.down(function () {
            _jaMoveTopDownward("#keyControlled", speed);
        });
    }
});