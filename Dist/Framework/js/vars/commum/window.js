
var _jaWindow = {
    scroll: {
        vertical: {
            exist: function () { return _jActsWindowSizeHelper("VerticalScrollExsit"); },
            width: function () { return _jActsWindowSizeHelper("VerticalScroolWidth"); },
        },
        horizontal: {
            exist: function () { return _jActsWindowSizeHelper("HorizontalScrollExists"); },
            height: function () { return _jActsWindowSizeHelper("HorizontalScrollHeight"); },
        },
        y: function () { return _jaMathHelper.MaxDecimalPlaceNotFixed(window.scrollY); },
    },
    element: {
        topLeft: {
            id: "jacts-fixed-top-left",
            position: {
                top: function () { return _jActsWindowSizeHelper('TopLeft_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('BottomLeft_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('TopLeft_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('TopRight_offset_left'); },
            },
        },
        topRight: {
            id: "jacts-fixed-top-right",
            position: {
                top: function () { return _jActsWindowSizeHelper('TopRight_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('BottomRight_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('TopRight_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('TopLeft_offset_left'); },
            },
        },
        bottomLeft: {
            id: "jacts-fixed-bottom-left",
            position: {
                top: function () { return _jActsWindowSizeHelper('BottomLeft_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('TopLeft_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('BottomLeft_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('BottomRight_offset_left'); },
            },
        },
        bottomRight: {
            id: "jacts-fixed-bottom-right",
            position: {
                top: function () { return _jActsWindowSizeHelper('BottomRight_offset_top'); },
                bottom: function () { return _jActsWindowSizeHelper('TopRight_offset_top'); },
                left: function () { return _jActsWindowSizeHelper('BottomRight_offset_left'); },
                right: function () { return _jActsWindowSizeHelper('BottomLeft_offset_left'); },
            },
        },
        screenRect: { id: "jacts-screen-rect" },
    },
    size: {
        x: function () { return _jActsWindowSizeHelper("GetXSize"); },
        y: function () { return _jActsWindowSizeHelper("GetYSize"); },
        xpx: function () { return _jActsWindowSizeHelper("GetXSize").toString() + "px"; },
        ypx: function () { return _jActsWindowSizeHelper("GetYSize").toString() + "px"; },
        v2: function () { return [_jActsWindowSizeHelper("GetXSize"), _jActsWindowSizeHelper("GetYSize")] },
        XbyY: function () { return _jActsWindowSizeHelper("GetXSize").toString() + "x" + _jActsWindowSizeHelper("GetYSize").toString() },
    },
    middle: {
        x: function () { return _jActsWindowSizeHelper("GetMidleX"); },
        y: function () { return _jActsWindowSizeHelper("GetMidleY"); },
    },
    offset: {
        top: {
            toDocumentTop: function () { return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.scroll.y()) },
            toDocumentBottom: function () { return _jaDocument.offset.bottom.toWindowTop(); },
        },
        bottom: {
            toDocumentTop: function () { return _jActsWindowSizeHelper('WindowBottomToDocumentTop'); },
            toDocumentBottom: function () { return _jaDocument.offset.bottom.toWindowBottom(); },
        },
    },
    rect: {
        size: {
            x: function () { return _jActsWindowSizeHelper("rectX"); },
            y: function () { return _jActsWindowSizeHelper("rectY"); },
        },
    },
    screenRect: {
        size: {
            x: function () { return _jActsWindowSizeHelper("screenX"); },
            y: function () { return _jActsWindowSizeHelper("screenY"); },
        },
    },
}