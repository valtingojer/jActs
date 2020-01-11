var _jActsWindowSizeHelper = function (action) {
    var totalTop = function (id) { return _jaMathHelper.MaxDecimalPlaceNotFixed(document.getElementById(id).offsetTop + _jaWindow.scroll.y()); };
    var offsetLeft = function (id) { return _jaMathHelper.MaxDecimalPlaceNotFixed(document.getElementById(id).offsetLeft); };

    switch (action) {
        //absolute positions
        //topleft
        case "TopLeft_offset_top": return totalTop(_jaWindow.element.topLeft.id);
        case "TopLeft_offset_left": return offsetLeft(_jaWindow.element.topLeft.id);
        //topRight
        case "TopRight_offset_top": return totalTop(_jaWindow.element.topRight.id);
        case "TopRight_offset_left": return offsetLeft(_jaWindow.element.topRight.id);
        //bottomLeft
        case "BottomLeft_offset_top": return totalTop(_jaWindow.element.bottomLeft.id);
        case "BottomLeft_offset_left": return offsetLeft(_jaWindow.element.bottomLeft.id);
        //bottomRight
        case "BottomRight_offset_top": return totalTop(_jaWindow.element.bottomRight.id);
        case "BottomRight_offset_left": return offsetLeft(_jaWindow.element.bottomRight.id);

        case "GetXSize": return _jaWindow.element.topLeft.position.right() - _jaWindow.element.topLeft.position.left();
        case "GetYSize": return _jaWindow.element.topLeft.position.bottom() - _jaWindow.element.topLeft.position.top();

        case "GetMidleX": return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.topLeft.position.right() / 2);
        case "GetMidleY": return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.topLeft.position.bottom() / 2);

        case "WindowBottomToDocumentTop":
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.element.bottomLeft.position.top() - _jaDocument.position.top());


        case "DocumentTopWindowTop":
            var el = document.getElementById(_jaDocument.element.top.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaDocument.position.top() + _jaWindow.scroll.y());
        case "DocumentToWindowTop":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top);
        case "DocumentToWindowBottom":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top - _jaWindow.size.y());
        case "DocumentTopPos":
            var el = document.getElementById(_jaDocument.element.top.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top + _jaWindow.scroll.y());


        case "DocumentYSize":
            var el = document.getElementById(_jaDocument.element.bottom.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.getBoundingClientRect().top + _jaWindow.scroll.y());
        case "DocumentXSize":
            var el = document.getElementById(_jaDocument.element.rect.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.offsetWidth);
            break;

        case "rectX":
            var el = document.getElementById(_jaDocument.element.rect.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.offsetWidth);
        case "rectY":
            var el = document.getElementById(_jaDocument.element.rect.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.offsetHeight);
        case "screenX":
            var el = document.getElementById(_jaWindow.element.screenRect.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.offsetWidth);
        case "screenY":
            var el = document.getElementById(_jaWindow.element.screenRect.id);
            return _jaMathHelper.MaxDecimalPlaceNotFixed(el.offsetHeight);
        case "VerticalScroolWidth":
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.screenRect.size.x() - _jaWindow.rect.size.x());
        case "HorizontalScrollHeight":
            return _jaMathHelper.MaxDecimalPlaceNotFixed(_jaWindow.screenRect.size.y() - _jaWindow.rect.size.y());
        case "VerticalScrollExsit": return (_jaWindow.screenRect.size.x() != _jaWindow.rect.size.x());
        case "HorizontalScrollExists": return (_jaWindow.screenRect.size.y() != _jaWindow.rect.size.y());

        default: break;
    }
};