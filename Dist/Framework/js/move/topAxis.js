
/**
 * Description. 
   Move element upward on top css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) top based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveTopUpward('#elementId');
    (ie.2) _jaMoveTopUpward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveTopUpward = function (elCode, factor = 1) {
    _jActsMovementsHelper("top", "upward", elCode, factor);
}
/**
 * Description. 
   Move element downward on top css position

   REQUIRIMENTS: 
   (1) any css position explicity applyed on it
   (2) top based position
   
   elCode recives id, class or set of classes 
   factor is the speed in pixels, default 1px.

    exeples of elCode:
    (ie.1)'#elementID' <- id based string
    (ie.2)'.elementClass' <- class based string
    (ie.3)'.elementClass1 Class2 Class3' <- if does not work properly try next
    (ie.4)'.elementClass1 .Class2 .Class3' <- if does not work properly try previus

    Exemple of call based on id
    (ie.1) _jaMoveTopDownward('#elementId');
    (ie.2) _jaMoveTopDownward('#elementId', 10);
 * 
 * @param {elCode} string
 * @param {factor} int
 * 
 */
var _jaMoveTopDownward = function (elCode, factor = 1) {
    _jActsMovementsHelper("top", "downward", elCode, factor);
}
