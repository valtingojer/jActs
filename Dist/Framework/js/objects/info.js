Object.prototype.info = function () {
    if (_jaIsNullEmptyOrUndefined(this)) {
        return false;
    } else {
        console.log(this);
        return true;
    }
};

Object.prototype._jaPosition = function (vetor) {
    this.x = function () { return this.offsetLeft; };
    this.y = function () { return this.offsetTop; };

    this.worldVector = function () {
        return [this.offsetLeft, this.offsetLeft + this.offsetWidth, this.offsetTop, this.offsetTop + this.offsetHeight];
    };

    this.center = function () {
        return [_jaMathHelper.MaxDecimalPlaceNotFixed((this.offsetLeft + (this.offsetWidth / 2))), _jaMathHelper.MaxDecimalPlaceNotFixed((this.offsetTop + (this.offsetHeight / 2)))];
    };

    switch (vetor) {
        case 0:
        case 'x':
            return this.x();
        case 1:
        case 'y':
            return this.y();
        case 'vector': return this.worldVector();
        case 'x1': return this.worldVector()[0];
        case 'x2': return this.worldVector()[1];
        case 'y1': return this.worldVector()[2];
        case 'y2': return this.worldVector()[3];
        case 'center': return this.center();
        case 'centerx': return this.center()[0];
        case 'centery': return this.center()[1];
        case 'icenter': return [-(this.center()[0]), -(this.center()[1])]
        default:
            return [this.x(), this.y()];
    }

};
Object.prototype._jaRotation = function (vetor) {
    this.x = function () { return this.offsetLeft; };
    this.y = function () { return this.offsetTop; };
    this.z = function () { return this.offsetTop; };
    this.w = function () { return this.offsetTop; };

    m = getComputedStyle(this).getPropertyValue('transform')
    var values = m.slice(7, -1).split(',');
    // angle is in range -180 > 180
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));

    console.log(angle);

    switch (vetor) {
        case 0:
        case 'x':
            return this.x();
        case 1:
        case 'y':
            return this.y();
        case 2:
        case 'z':
            return this.y();
        case 3:
        case 'w':
        case 'deg':
            return this.y();
        default:
            return [this.x(), this.y(), this.z(), this.w()];
    }

};