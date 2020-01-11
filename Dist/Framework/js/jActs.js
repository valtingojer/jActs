
/*~******************************************************~*/
/*~******************************************************~*/
/*init*/
/*~******************************************************~*/
/*~******************************************************~*/
var _jaIni = function () {

    _jActsPrepareAmbient.init();

    _jaDoTheAction('Awake');
    _jaDoTheAction('Start');

    window.requestAnimationFrame(___ANIMATE);

    setInterval(function () { _jaDoTheAction("FixedUpdate"); }, _jActs_Execution.FixedUpdateDelay);

    if (_jaShowAbout) { console.log(_jaAboutVersion); }

    _jaDoTheAction('AfterLoad');
    
}
var _jaDoTheAutoIni = function(){
    if (_jaAutoIni) {
        _jaIni();
    }
}
window.onload = function () {
    _jaDoTheAutoIni();
};