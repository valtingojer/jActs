var fireSpots = 0;
var myShootsCoolDown = 0;

var addFireSpot = function (num) {
    myShootsCoolDown = 0;
    fireSpots += num;
}
var subFireSpot = function (num) {
    myShootsCoolDown = 0;
    fireSpots -= num;
}
var getFireSpots = function () {
    fireSpots = fireSpots._jaClamp(-1, 10);
    return fireSpots;
}
var fireCooldown = function () {
    switch (getFireSpots()) {
        case 0:
        case 1:
        case 2:
            return _jaTime.secondCount;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            return _jaTime.halfSecondCount;
        case 9:
        case 10:
            return _jaTime.quartSecondCount;
        default: return _jaTime.secondCount;
    }
};


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
        
        

        _jaKeyBind.Down.space(function () {

            if (myShootsCoolDown < fireCooldown()) {
                myShootsCoolDown = fireCooldown();
                let vaiQueGo = function (el) { _jaUpdate(function () { _jaMoveTopUpward(el, 8); }); };

                //_jaInstantiate(
                //    _ja('#bullet'),
                //    [_ja('#player')._jaPosition('centerx') -6, _ja('#player')._jaPosition('y') ],
                //    [0,0,30,30],
                //    null,
                //    null,
                //    vaiQueGo);

                this.mainFire = function () {
                    _jaInstantiate(
                        _ja('#bullet'),
                        [38, -25],
                        null,
                        _ja('#player'),
                        null,
                        vaiQueGo
                    );
                };

                this.doubleFire = function () {
                    _jaInstantiate(
                        _ja('#bullet'),
                        [52, -15],
                        null,
                        _ja('#player'),
                        null,
                        vaiQueGo
                    );

                    _jaInstantiate(
                        _ja('#bullet'),
                        [24, -15],
                        null,
                        _ja('#player'),
                        null,
                        vaiQueGo
                    );
                };

                this.extraFire = function () {
                    _jaInstantiate(
                        _ja('#bullet-secondary'),
                        [16, 15],
                        null,
                        _ja('#player'),
                        null,
                        vaiQueGo
                    );

                    _jaInstantiate(
                        _ja('#bullet-secondary'),
                        [60, 15],
                        null,
                        _ja('#player'),
                        null,
                        vaiQueGo
                    );
                };

                if (getFireSpots() >= 9 && getFireSpots() <= 10) {
                    mainFire(); doubleFire(); extraFire();
                } else if (getFireSpots() >= 7 && getFireSpots() <= 8) {
                    doubleFire();
                    extraFire();
                } else if (getFireSpots() >= 5 && getFireSpots() <= 6) {
                    mainFire(); extraFire();
                } else if (getFireSpots() >= 3 && getFireSpots() <= 4) {
                    mainFire(); doubleFire();
                } else if (getFireSpots() >= 1 && getFireSpots() <= 2) {
                    doubleFire();
                } else {
                    mainFire();
                }
                
                _ja('#sfxShoot').play();

                
            }
        });










    }
});