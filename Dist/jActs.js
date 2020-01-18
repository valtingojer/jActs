/*~******************************************************~*/
/*~******************************************************~*/
/*jActs version 1.0*/
/*~******************************************************~*/
/*~******************************************************~*/
/*+++++++++++++++++++++++++++++++++++++++*/
/*Inject Dependencies*/
/*+++++++++++++++++++++++++++++++++++++++*/

var _jActs_Start_Count = {
    try: 0,
    delay: 100,
    max: 1000,
    canTryAgain: true,
};
var _jActs_src = {
    fileName: 'jActs',
    Framework: {
        url: './Dist/Framework/',
        folderName: 'Framework',
        jsFolder: 'js/',
        cssFolder: 'css/',
    },
    jsFiles: [
        "ambient/prepare",

        "constants/about", 
        "constants/generic",

        "helpers/math",
        "helpers/movements",
        "helpers/window",

        "keys/bind",

        "move/leftAxis",
        "move/topAxis",

        "vars/commum/document",
        "vars/commum/frame",
        "vars/commum/time",
        "vars/commum/window",
        "vars/generic",

        "objects/create",
        "objects/info",

        "animate/event",

        "jActs",

        "beta/tests",
    ],
    cssFiles: [
        "beta/tests",
    ],
};
var _jActs_ErrorLoad = {
    headTimeout: function () { return console.log("Could not load jActs Framework, tag Head not found."); },
    sourceError: function () { return console.log("Could not load jActs Framework, script tag src with file jActs.js not found"); },
    scriptsError: function (script) { return console.log("Could not load jActs Framework, script " + ((_jaIsNullEmptyOrUndefined(script)) ? '' : script) + " error "); },
    cssError: function (css) { return console.log("Could not load jActs Framework, css " + ((_jaIsNullEmptyOrUndefined(css)) ? '' : css) + " error "); },
}
var _jActs_InitHelper = {
    setAsStarting: function () {    _jActs_Start_Count.canTryAgain = false; },
    setFrameworkSource: function () {
        var scripts = document.getElementsByTagName("script");

        for (var i = 0; i < scripts.length; i++) {
            var scriptName = scripts[i].getAttribute('src');
            var scriptNameLower = scriptName.toString().toLowerCase();
            var isItMyScript = (scriptNameLower.includes(_jActs_src.fileName.toString().toLowerCase()));
            
            if (isItMyScript) {
                var myUrl = function () {
                    var splitUrl = scriptName.split('/');
                    var url = "";
                    for (var i = 0; i < (splitUrl.length - 1); i++) {
                        url += splitUrl[i].toString();
                        url += '/';
                    }
                    return url;
                };
                _jActs_src.Framework.url = myUrl() + _jActs_src.Framework.folderName + '/';
                return true;
            }
        }
        return false;
    },
    loadScripts: function () {
        try {
            for (var i = 0; i < _jActs_src.jsFiles.length; i++) {
                var script = document.createElement('script');
                var scriptSrc = _jActs_src.Framework.url.toString() + _jActs_src.Framework.jsFolder + _jActs_src.jsFiles[i].toString() + '.js';
                //console.log(scriptSrc);
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', scriptSrc);
                document.head.append(script);
            }
            return true;
        } catch (e) {
            return _jActs_ErrorLoad.scriptsError(e);
            return false;
        }
    },
    loadCss: function () {
        try {
            for (var i = 0; i < _jActs_src.cssFiles.length; i++) {
                var link = document.createElement('link');
                var linkSrc = _jActs_src.Framework.url.toString() + _jActs_src.Framework.cssFolder + _jActs_src.cssFiles[i].toString() + '.css';
                //console.log(linkSrc);
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.setAttribute('href', linkSrc);
                link.media = 'all';
                document.head.append(link);
            }
            return true;
        } catch (e) {
            return _jActs_ErrorLoad.scriptsError(e);
            return false;
        }
    },
};

var _jActs_startjActsFrameworkModules = function () {
    _jActs_InitHelper.setAsStarting();
    if (!_jActs_InitHelper.setFrameworkSource()) { return _jActs_ErrorLoad.sourceError(); }
    if (!_jActs_InitHelper.loadScripts()) { return _jActs_ErrorLoad.scriptsError(); }
    if (!_jActs_InitHelper.loadCss()) { return _jActs_ErrorLoad.cssError(); }
};

var _jActs_tryToStart = function () {
    if (!_jActs_Start_Count.canTryAgain) { return; }
    try {
        var hasHead = document.head;

        if (_jActs_Start_Count.try >= _jActs_Start_Count.max) {
            return _jActs_ErrorLoad.headTimeout();
        }

        if (hasHead != null && hasHead != "" && hasHead != 'undefined') {
            _jActs_startjActsFrameworkModules();
        } else {
            setTimeout(_jActs_tryToStart, _jActs_Start_Count.delay);
            _jActs_Start_Count.try = parseInt(_jActs_Start_Count.try) + 1;
        }
    } catch (e) {
        if (_jActs_Start_Count.try >= _jActs_Start_Count.max) {
            return _jActs_ErrorLoad.headTimeout();
        }
        setTimeout(_jActs_tryToStart, _jActs_Start_Count.delay);
        _jActs_Start_Count.try = parseInt(_jActs_Start_Count.try) + 1;
    }
};

/*+++++++++++++++++++++++++++++++++++++++*/
/*Finish inject Dependencies*/
/*+++++++++++++++++++++++++++++++++++++++*/



/*+++++++++++++++++++++++++++++++++++++++*/
/*Variable needed to start*/
/*+++++++++++++++++++++++++++++++++++++++*/

const _jaStartTime = new Date();



/*+++++++++++++++++++++++++++++++++++++++*/
/*True / False Verifications check*/
/*+++++++++++++++++++++++++++++++++++++++*/
var _jaIsNullEmptyOrUndefined = function (somethingToCheck) {
    return (somethingToCheck == null || somethingToCheck == "" || somethingToCheck == "undefined");
};
var _jaIsFunction = function (functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

var _jaIsObject = function (objectToCheck) {
    if (_jaIsNullEmptyOrUndefined(objectToCheck)) {
        console.log('! _jaAlert: ' + objectToCheck + ' Not Found');
        return false;
    } else if (typeof objectToCheck === 'object') {
        return true;
    } else {
        return false;
    }
};

var _jActs_GetElement = function (el) {
    if (_jaIsObject(el)) {
        return el;
    } else {
        obj = document.querySelectorAll(el);
        switch (obj.length) {
            case 0:
                console.log('! _jaAlert: ' + el + ' Not Found');
                return false;
            case 1: return obj[0];
            default: return obj;
        }
    }
};
/*+++++++++++++++++++++++++++++++++++++++*/
/*Configure Events*/
/*+++++++++++++++++++++++++++++++++++++++*/
var _jActs_Execution = {
    FixedUpdateDelay: 20,
    _AwakeFuncs: [],
    _StartFuncs: [],
    _UpdateFuncs: [],
    _FixedUpdateFuncs: [],
    _AfterLoadFuncs: [],
};

/*+++++++++++++++++++++++++++++++++++++++*/
/*Execute Event Actions*/
/*+++++++++++++++++++++++++++++++++++++++*/

var _jaDoTheAction = function (action) {
    switch (action) {
        case "Awake":
            //_jActs_Execution._AwakeFuncs.forEach(chieldFunc => chieldFunc());
            _jActs_Execution._AwakeFuncs.forEach(function(chieldFunc){ return chieldFunc(); });
            break;
        case "Start":
            //_jActs_Execution._StartFuncs.forEach(chieldFunc => chieldFunc());
            _jActs_Execution._StartFuncs.forEach(function(chieldFunc){ return chieldFunc(); });
            break;
        case "Update":
            //_jActs_Execution._UpdateFuncs.forEach(chieldFunc => chieldFunc());
            _jActs_Execution._UpdateFuncs.forEach(function(chieldFunc){ return chieldFunc(); });
            break;
        case "FixedUpdate":
            //_jActs_Execution._FixedUpdateFuncs.forEach(chieldFunc => chieldFunc());
            _jActs_Execution._FixedUpdateFuncs.forEach(function(chieldFunc){ return chieldFunc(); });
            break;
        case "AfterLoad":
            //_jActs_Execution._AfterLoadFuncs.forEach(chieldFunc => chieldFunc());
            _jActs_Execution._AfterLoadFuncs.forEach(function(chieldFunc){ return chieldFunc(); });
            break;
        default:
            //default action
            break;
    }
}



/**
 * Description. 
   Send a function inside this, like that:
   
   _jaAwake( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaAwake = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Awake must have an function as parameter";
    } else {
        _jActs_Execution._AwakeFuncs.push(func);
    }
};

/**
 * Description. 
   Send a function inside this, like that:
   
   _jaStart( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaStart = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Start must have an function as parameter";
    } else {
        _jActs_Execution._StartFuncs.push(func);
    }
};
/**
 * Description. 
   Send a function inside this, like that:
   
   _jaUpdate( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaUpdate = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Update must have an function as parameter";
    } else {
        _jActs_Execution._UpdateFuncs.push(func);
    }
    //console.log("fps", _jaFrame.fps, "DeltaTime", _jaFrame.DeltaTime, "TempSeconds", INTERNAL_JA_VARIABLES.MillisecondsCount, "Second Count",_jaFrame.SecondCount); //Debug Update
};
/**
 * Description. 
   Send a function inside this, like that:
   
   _jaFixedUpdate( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaFixedUpdate = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "FixedUpdate must have an function as parameter";
    } else {
        _jActs_Execution._FixedUpdateFuncs.push(func);
    }
    //console.log("FixedUpdate"); //Debug FixedUpdate
};
/**
 * Description. 
   Send a function inside this, like that:
   
   _jaAfterLoad( function(){
        //your code in here
   } );
  
 * 
 * @param {function} func
 * 
 */
var _jaAfterLoad = function (func) {
    if (_jaIsNullEmptyOrUndefined(func) || !_jaIsFunction(func)) {
        throw "Start must have an function as parameter";
    } else {
        _jActs_Execution._AfterLoadFuncs.push(func);
    }
};
/**
 * Description. 
   Select Element(s) by tag, id, class:
   
   _ja('your element definition');
   class ie: _ja('.myClass') _ja('.myParentClass .myClass') _('.myFirstClass.mySecondClass')
   id ie: _ja('#myId')
   tag ie: _ja('a') _ja('div') _ja('body')
   You can also mix them all
   mix ie: _ja('body a#myLinkParentId span.myClass')
  
 * 
 * @param {function} func
 * 
 */
var _ja = function (el) { return _jActs_GetElement(el); };

/*Add modules at runtime, but not load them*/
_jActs_tryToStart();
