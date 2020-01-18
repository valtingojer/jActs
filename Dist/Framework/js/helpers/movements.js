
var _jActsMovementsHelper = function (origin, direction, ele, factor) {
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

    let gottenElement = _jActs_GetElement(ele);
    if (!gottenElement) {
        return false;
    } else {
        if (gottenElement.length > 0) {
            for (var i = 0; i < gottenElement.length; i++) {
                makeMove(gottenElement[i]);
            }
        } else {
            makeMove(gottenElement);
        }
        
    }
    
};
