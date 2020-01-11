
var _jActsPrepareAmbient = {
    setNumericPosition: function (el, top = 'unset', right = 'unset', bottom = 'unset', left = 'unset') {
        if (!_jaIsNullEmptyOrUndefined(top)) {
            el.style.top = top.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(right)) {
            el.style.right = right.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(bottom)) {
            el.style.bottom = bottom.toString() + "px";
        }
        if (!_jaIsNullEmptyOrUndefined(left)) {
            el.style.left = left.toString() + "px";
        }
        return el;
    },
    setZindex: function (el) {
        el.className = 'jacts-holder-debug-class';
        el.style.zIndex = -9999;
        return el;
    },
    setAbsoluePosition: function (el) {
        el.style.position = "absolute";
        return el;
    },
    setFixedPosition: function (el) {
        el.style.position = "fixed";
        return el;
    },
    setFixedAndZindex: function (el) {
        return this.setFixedPosition(this.setZindex(el));
    },
    setAbsAndZindex: function (el) {
        return this.setAbsoluePosition(this.setZindex(el));
    },
    createMainHolder: function () {
        var mainHolder = document.createElement("div");
        mainHolder.id = 'jacts-main-holder';
        mainHolder = this.setAbsAndZindex(mainHolder);
        mainHolder = this.setNumericPosition(mainHolder, '0', null, null, '0');
        document.body.prepend(mainHolder);
    },
    createFixedReferences: function () {
        var ref1 = document.createElement("div");
        var ref2 = document.createElement("div");
        var ref3 = document.createElement("div");
        var ref4 = document.createElement("div");

        ref1 = this.setFixedAndZindex(ref1);
        ref2 = this.setFixedAndZindex(ref2);
        ref3 = this.setFixedAndZindex(ref3);
        ref4 = this.setFixedAndZindex(ref4);

        var topLeft = this.setNumericPosition(ref1, '0', null, null, '0');
        var topRight = this.setNumericPosition(ref2, '0', '0');
        var bottomLeft = this.setNumericPosition(ref3, null, null, '0', '0');
        var bottomRight = this.setNumericPosition(ref4, null, '0', '0', null);

        topLeft.id = "jacts-fixed-top-left";
        topRight.id = "jacts-fixed-top-right";
        bottomLeft.id = "jacts-fixed-bottom-left";
        bottomRight.id = "jacts-fixed-bottom-right";

        topRight.style.float = "right";
        bottomRight.style.float = "right";

        var holder = document.getElementById('jacts-main-holder');

        holder.appendChild(topLeft);
        holder.appendChild(topRight);
        holder.appendChild(bottomLeft);
        holder.appendChild(bottomRight);
    },
    createAbsoluteReferences: function () {
        var ref1 = document.createElement("div");
        var ref2 = document.createElement("div");

        ref1 = this.setAbsAndZindex(ref1);
        ref2 = this.setZindex(ref2);

        var top = this.setNumericPosition(ref1, '0', '0');
        var bottom = this.setNumericPosition(ref2, null, null, '0', '0');

        top.id = "jacts-absolute-top";
        bottom.id = "jacts-absolute-bottom";

        top.style.float = "right";
        bottom.style.float = "right";

        var holder = document.body;

        holder.appendChild(top);
        holder.appendChild(bottom);
    },

    createHundredPercentElement: function () {
        var el = document.createElement("div");
        el = this.setFixedAndZindex(el);
        el.style.width = "100%";
        el.style.height = "100%";
        el.id = "jacts-hundred-percent-rect";
        var holder = document.getElementById('jacts-main-holder');
        holder.appendChild(el);
    },

    createScreenRectElement: function () {
        var el = document.createElement("div");
        el = this.setFixedAndZindex(el);
        el.style.width = "100vw";
        el.style.height = "100vh";
        el.id = "jacts-screen-rect";
        var holder = document.getElementById('jacts-main-holder');
        holder.appendChild(el);
    },

    init: function () {
        this.createMainHolder();
        this.createFixedReferences();
        this.createAbsoluteReferences();
        this.createHundredPercentElement();
        this.createScreenRectElement();
    },
}
