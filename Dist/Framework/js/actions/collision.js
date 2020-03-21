var _jaCollisionDetector = function (shape, firstLayer, secondLayer, onCollisionEnter, onCollisionExit) {
    //console.log('try to detect collisions');
    shape = _jaIsNullEmptyOrUndefined(shape) ? "square" : shape;

    if (_jaIsFunction(onCollisionExit)) { console.log('OnCollisionExit Is not implemented yet'); }

    let object_list_a = [];
    let object_list_b = [];

    //Go throught objectList to compare one to one square collision
    //shold it be implemented equal to square and change only one to one comparation?
    let sphereCollisionDetector = function () { //needs to be implemented
        console.log('Sphere collider is not implemented yet');
    };
    //execute one collision detection
    let executeOneSquare = function (obja, objb) {
        let firstPos = obja._jaPosition('vector');
        let secoPos = objb._jaPosition('vector');

        //console.log('detecting colision');

        /*detectar colisão em x*/
        if (firstPos[1] >= secoPos[0] && firstPos[0] <= secoPos[1]) {
            //console.log('colision x');
            /*detectar colisão em y*/
            if (firstPos[3] >= secoPos[2] && firstPos[2] <= secoPos[3]) {
                //console.log('colision also y');
                //console.log('colidindo', obja.id, objb.id);
                //secondLayerArray[j].remove();
                if (_jaIsFunction(onCollisionEnter)) { onCollisionEnter(obja, objb); }
            }
        }
    };
    //Go throught objectList to compare one to one square collision
    let squareCollisionDetector = function () {
        //console.log('abriu detector');
        for (var a = 0; a < object_list_a.length; a++) {
            //console.log('loop a');
            for (var b = 0; b < object_list_b.length; b++) {
                //console.log('loop b');
                let obj_a = object_list_a[a];
                let obj_b = object_list_b[b];
                //console.log('object a and b are well defined');
                if (!_jaIsNullEmptyOrUndefined(obj_a.length) && obj_a.length > 0) {
                    //faz loop
                    //console.log('a tem many');
                    for (var i = 0; i < obj_a.length; i++) {
                        if (!_jaIsNullEmptyOrUndefined(obj_b.length) && obj_b.length > 0) {
                            //console.log('b tem many', obj_b.length);
                            for (var j = 0; j < obj_b.length; j++) {
                                //console.log('executa a many b many');
                                executeOneSquare(obj_a[i], obj_b[j]);
                            }
                        } else {
                            //tem apenas um obj b
                            //console.log('b tem 1');
                            //console.log('executa a many b 1');
                            executeOneSquare(obj_a[i], obj_b);
                        }
                    }
                } else {
                    //ha apenas 1 obja
                    //console.log('a tem 1');
                    if (!_jaIsNullEmptyOrUndefined(obj_b.length) && obj_b.length > 0) {
                        //console.log('b tem many');
                        for (var j = 0; j < obj_b.length; j++) {
                            //console.log('executa a 1 b many');
                            executeOneSquare(obj_a, obj_b[j]);
                        }
                    } else {
                        //tem apenas um obj b
                        //console.log('b tem 1');
                        //console.log('executa a 1 b 1');
                        executeOneSquare(obj_a, obj_b);
                    }
                }
            }
        }


    };

    //console.log('variables and functions defined');

    //convert parameter items to array of items
    if (Array.isArray(firstLayer)) {
        //console.log('converting first layer to array');
        for (var i = 0; i < firstLayer.length; i++) {
            let o = _jaIsObject(firstLayer[i]) ? firstLayer[i] : _ja(firstLayer[i]);
            object_list_a.push(o);
        }
    } else {
        //console.log('converting first object to array');
        let o = _jaIsObject(firstLayer) ? firstLayer : _ja(firstLayer);
        object_list_a.push(o);
    }
    if (Array.isArray(secondLayer)) {
        //console.log('converting second layer to array');
        for (var i = 0; i < secondLayer.length; i++) {
            let o = _jaIsObject(secondLayer[i]) ? secondLayer[i] : _ja(secondLayer[i]);
            object_list_b.push(o);
        }
    } else {
        //console.log('converting second object to array');
        let o = _jaIsObject(secondLayer) ? secondLayer : _ja(secondLayer);
        object_list_b.push(o);
    }

    switch (shape) {
        case "square": squareCollisionDetector(); break;
        case "sphere": sphereCollisionDetector(); break;
        default: squareCollisionDetector();
    }
};
