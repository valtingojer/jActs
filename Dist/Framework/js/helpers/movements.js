
var _jActsMovementsHelper = function (origin, direction, elCode, factor) {
    this.getCalcBasedOnDirection = function (position) {
        switch (direction) {
            case "forward": return position + factor;
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

    var codes = _jActsClassAndIdHelper("TranslateClassAndId", elCode);

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
