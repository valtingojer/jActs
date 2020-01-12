/*~******************************************************~*/
/*~******************************************************~*/
/*Move Functions*/
/*~******************************************************~*/
/*~******************************************************~*/
/**
 * Description. 
   Move element forward on left css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) left based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- set of classes . if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- set of classes . if does not work properly try previous

    Exemple of call based on id
    (ie.1) _jaMoveLeftForward('#elementId');
    (ie.2) _jaMoveLeftForward('#elementId', 10); 
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveLeftForward = function (elCode, factor = 1) {
    _jActsMovementsHelper("left", "forward", elCode, factor);
}
/**
 * Description. 
   Move element backward on left css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) left based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveLeftBackward('#elementId');
    (ie.2) _jaMoveLeftBackward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveLeftBackward = function (elCode, factor = 1) {
    _jActsMovementsHelper("left", "backward", elCode, factor);
}
