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

    switch (vetor) {
        case 0:
        case 'x':
            return this.x();
        case 1:
        case 'y':
            return this.y();
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