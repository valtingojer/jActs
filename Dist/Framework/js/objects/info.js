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