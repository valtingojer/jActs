

var _jaDocument = {
    element: {
        top: { id: "jacts-absolute-top" },
        bottom: { id: "jacts-absolute-bottom" },
        rect: { id: "jacts-hundred-percent-rect" },
    },
    size: {
        x: function () { return _jActsWindowSizeHelper("DocumentXSize"); },
        y: function () { return _jActsWindowSizeHelper("DocumentYSize"); },
    },
    position: {
        top: function () { return _jActsWindowSizeHelper("DocumentTopPos"); },
        bottom: function () { return _jActsWindowSizeHelper("DocumentYSize"); },
    },
    offset: {
        top: {
            toWindowTop: function () { return _jActsWindowSizeHelper("DocumentTopWindowTop"); },
            toWindowBottom: function () { return _jActsWindowSizeHelper('WindowBottomToDocumentTop'); },
        },
        bottom: {
            toWindowTop: function () { return _jActsWindowSizeHelper("DocumentToWindowTop"); },
            toWindowBottom: function () { return _jActsWindowSizeHelper("DocumentToWindowBottom"); },
        },
    },
}