
var limit = 50, index = 0;

_jaUpdate(function () {

    document.getElementById("label_secondcount").innerText = _jaTime.SecondCount;
    document.getElementById("label_fps").innerText = _jaFrame.fps;
    document.getElementById("label_deltatime").innerText = _jaTime.DeltaTime;

    document.getElementById("scrollbarVer").innerText = _jaWindow.scroll.vertical.exist() + " " + _jaWindow.scroll.vertical.width();
    document.getElementById("scrollbarHor").innerText = _jaWindow.scroll.horizontal.exist() + " " + _jaWindow.scroll.horizontal.height();



    document.getElementById("winbottodoctop").innerText = _jaWindow.offset.bottom.toDocumentTop();
    document.getElementById("rectX").innerText = _jaWindow.rect.size.x();
    document.getElementById("rectY").innerText = _jaWindow.rect.size.y();

    document.getElementById("winX").innerText = _jaWindow.size.x();
    document.getElementById("winY").innerText = _jaWindow.size.y();

    document.getElementById("screenX").innerText = _jaWindow.screenRect.size.x();
    document.getElementById("screenY").innerText = _jaWindow.screenRect.size.y();


    //document.getElementById("toptotop").innerText = _jaWindow.offset.top.toDocumentTop();
    //document.getElementById("toptobot").innerText = _jaWindow.offset.top.toDocumentBottom();

    //document.getElementById("docsizeY").innerText = _jaDocument.size.y();

    //document.getElementById("doctowtop").innerText = _jaDocument.offset.bottom.toWindowTop();
    //document.getElementById("doctowbot").innerText = _jaDocument.offset.bottom.toWindowBottom();


    //document.getElementById("doctoptowtop").innerText = _jaDocument.offset.top.toWindowTop();
    //document.getElementById("doctoptotop").innerText = _jaDocument.position.top();

    // document.getElementById("wx").innerText = _jaWindow.size.xpx();
    // document.getElementById("wy").innerText = _jaWindow.size.ypx();

    // document.getElementById("midx").innerText = _jaWindow.middle.x();
    // document.getElementById("midy").innerText = _jaWindow.middle.y();

    //document.getElementById("label_ftlt").innerText = _jaWindow.element.topLeft.position.top();
    //document.getElementById("label_ftlb").innerText = _jaWindow.element.topLeft.position.bottom();
    //document.getElementById("label_ftll").innerText = _jaWindow.element.topLeft.position.left();
    //document.getElementById("label_ftlr").innerText = _jaWindow.element.topLeft.position.right();

    //document.getElementById("label_ftrt").innerText = _jaWindow.element.topRight.position.top();
    //document.getElementById("label_ftrb").innerText = _jaWindow.element.topRight.position.bottom();
    //document.getElementById("label_ftrl").innerText = _jaWindow.element.topRight.position.left();
    //document.getElementById("label_ftrr").innerText = _jaWindow.element.topRight.position.right();

    //document.getElementById("label_bllt").innerText = _jaWindow.element.bottomLeft.position.top();
    //document.getElementById("label_bllb").innerText = _jaWindow.element.bottomLeft.position.bottom();
    //document.getElementById("label_blll").innerText = _jaWindow.element.bottomLeft.position.left();
    //document.getElementById("label_bllr").innerText = _jaWindow.element.bottomLeft.position.right();

    //document.getElementById("label_brlt").innerText = _jaWindow.element.bottomRight.position.top();
    //document.getElementById("label_brlb").innerText = _jaWindow.element.bottomRight.position.bottom();
    //document.getElementById("label_brll").innerText = _jaWindow.element.bottomRight.position.left();
    //document.getElementById("label_brlr").innerText = _jaWindow.element.bottomRight.position.right();

    //document.getElementById("teste17").style.position = "absolute";
    //document.getElementById("teste17").style.top = _jaWindow.element.bottomRight.position.top() + "px";


});

_jaUpdate(function () {
    if (index < limit) {
        _jaMoveLeftFoward(".el_30x30 um", 4);
        _jaMoveLeftFoward(".el_30x30 dois", 2);
        _jaMoveLeftFoward(".el_30x30 tres", 1);
        _jaMoveLeftFoward("#teste0", 8);

        _jaMoveTopUpward("#teste4", 5); _jaMoveLeftBackward("#teste4", 8);
        _jaMoveTopUpward("#teste5", 4); _jaMoveLeftBackward("#teste5", 4);
        _jaMoveTopUpward("#teste6", 3); _jaMoveLeftBackward("#teste6", 2);
        _jaMoveTopUpward("#teste7", 2); _jaMoveLeftBackward("#teste7", 1);


        _jaMoveTopDownward("#teste8", 2); _jaMoveLeftFoward("#teste8", 8);
        _jaMoveTopDownward("#teste9", 3); _jaMoveLeftFoward("#teste9", 7);
        _jaMoveTopDownward("#teste10", 4); _jaMoveLeftFoward("#teste10", 5);
        _jaMoveTopDownward("#teste11", 5); _jaMoveLeftFoward("#teste11", 3);


        _jaMoveLeftBackward("#teste12", 1);
        _jaMoveLeftBackward("#teste13", 2);
        _jaMoveLeftBackward("#teste14", 4);
        _jaMoveLeftBackward("#teste15", 8);


        index++;
    } else {
        _jaMoveLeftBackward(".el_30x30 um", 4);
        _jaMoveLeftBackward(".el_30x30 dois", 2);
        _jaMoveLeftBackward(".el_30x30 tres", 1);
        _jaMoveLeftBackward("#teste0", 8);

        _jaMoveTopDownward("#teste4", 5); _jaMoveLeftFoward("#teste4", 8);
        _jaMoveTopDownward("#teste5", 4); _jaMoveLeftFoward("#teste5", 4);
        _jaMoveTopDownward("#teste6", 3); _jaMoveLeftFoward("#teste6", 2);
        _jaMoveTopDownward("#teste7", 2); _jaMoveLeftFoward("#teste7", 1);


        _jaMoveTopUpward("#teste8", 2); _jaMoveLeftBackward("#teste8", 8);
        _jaMoveTopUpward("#teste9", 3); _jaMoveLeftBackward("#teste9", 7);
        _jaMoveTopUpward("#teste10", 4); _jaMoveLeftBackward("#teste10", 5);
        _jaMoveTopUpward("#teste11", 5); _jaMoveLeftBackward("#teste11", 3);


        _jaMoveLeftFoward("#teste12", 1);
        _jaMoveLeftFoward("#teste13", 2);
        _jaMoveLeftFoward("#teste14", 4);
        _jaMoveLeftFoward("#teste15", 8);

        index++;
    }

})
_jaUpdate(function () { if (index >= 100) { index = 0; } });
