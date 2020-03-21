

_jaUpdate(function () {

    document.getElementById("label_secondcount").innerText = _jaTime.secondCount;
    document.getElementById("label_fps").innerText = _jaFrame.fps;
    document.getElementById("label_deltatime").innerText = _jaTime.DeltaTime;
});


var moveloopvars = {
    speed: 1,
    endPoint: 0,
    position: 0,
    moveLeft: true,
};

_jaUpdate(function () {
    let moveLoopEl = _ja('#moveLoop');
    if (!_jaIsNullEmptyOrUndefined(moveLoopEl)) {
		
		let currentSpeed = moveloopvars.speed;
		currentSpeed += _jaTime.secondCount;
        currentSpeed *= 0.01;
        currentSpeed = currentSpeed._jaClamp(1, 10);
		
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
            _jaMoveLeftForward(moveLoopEl, currentSpeed );
        } else {
            _jaMoveLeftBackward(moveLoopEl, currentSpeed );
        }
        
    }
});

_jaAfterLoad(function () {
    let keyboardTestEl = document.getElementById('player');
    if (!_jaIsNullEmptyOrUndefined(keyboardTestEl)) {
        let speed = 5;

        let el = _ja('#player');

        var moveLeft = function () {
            _jaMoveLeftBackward(el, speed);
            el.style.transform = 'rotate3d(0, 0, 1, -5deg)';
        };
        var moveRigth = function () {
            _jaMoveLeftForward(el, speed);
            el.style.transform = 'rotate3d(0, 0, 1, 5deg)';
        }
        var moveUp = function () { _jaMoveTopUpward(el, speed);      }
        var moveDown = function () { _jaMoveTopDownward(el, speed);    }

        _jaKeyBind.Down.q(function(){   moveLeft(); moveUp(); });
        _jaKeyBind.Down.e(function(){   moveRigth(); moveUp(); });
        _jaKeyBind.Down.move.right(moveRigth);
        _jaKeyBind.Down.move.left(moveLeft);
        _jaKeyBind.Down.move.up(moveUp);
        _jaKeyBind.Down.move.down(moveDown);

        _jaKeyBind.UpRelase.move.left(function () { el.style.transform = 'rotate3d(0, 0, 1, 0deg)'; });
        _jaKeyBind.UpRelase.move.right(function () { el.style.transform = 'rotate3d(0, 0, 1, 0deg)'; });

        //_jaKeyBind.Down.space(function () {
        //    _ja('#keydown').innerText = "Space Pressed";
        //});
        //_jaKeyBind.UpRelase.space(function () {
        //    _ja('#keydown').innerText = "";
        //});



        var myShootsCoolDown = 0;
        _jaKeyBind.Down.space(function () {

            //_ja('#player')._jaRotation();

            if (myShootsCoolDown < _jaTime.quartSecondCount) {
                myShootsCoolDown = _jaTime.quartSecondCount;
                let vaiQueGo = function (el) { _jaUpdate(function () { _jaMoveTopUpward(el, 8); }); };

                //_jaInstantiate(
                //    _ja('#bullet'),
                //    [_ja('#player')._jaPosition('centerx') -6, _ja('#player')._jaPosition('y') ],
                //    [0,0,30,30],
                //    null,
                //    null,
                //    vaiQueGo);
                _jaInstantiate(
                    _ja('#bullet'),
                    [30,-15],
                    null,
                    _ja('#player'),
                    null,
                    vaiQueGo
                    );
            }
        });










    }
});