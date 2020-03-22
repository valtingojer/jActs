
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

    setTimeout(function () {
        _jaDoTheAction('AfterLoad');
    }, 2000);
    
}
var _jaDoTheAutoIni = function(){
    if (_jaAutoIni) {
        _jaIni();
    }
}
window.onload = function () {
    _jaDoTheAutoIni();
};