# jActs
jActs extends your javascript with ready to use Actions such as:   
Browser Start, frame Update, Fixed Time Update, ...  
Movements foward, upward, ...  
EasyKeybinds, you can bind multiple events to any mapped key.  
  
(Delimiters are not implemented yet)Delimiters, you can simply add an range of operation such as "-8px" to "8px" from a center point.  
#  
For now you have to download the full Dist folder  
add  
  
<script src='{yourPath}/Dist/jActs.js'></script>  
  
it is required that Dist folter have all its subfolders.  
#
after that you can start using the framework
#
Awake execution  
  
_jaAwake(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    console.log('Loads whatever you have in here before other methods');  
});  
#
Start execution  
  
_jaStart(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    console.log('Loads whatever you have in here just after the awake');   
});  
#
AfterLoad Document execution  
  
_jaAfterLoadFuncs(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    console.log('Loads whatever you have in here after the document ready');  
});  
#
Frame Update execution  
  
_jaUpdate(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    console.log('Loads whatever you have in here on every browser frame');  
});  
#
20ms period execution  
  
_jaFixedUpdate(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    console.log('Loads whatever you have in here on every 20 ms');  
});  
#
Move objects  
  
Forward  
_jaMoveLeftForward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});  
  
Backward  
_jaMoveLeftBackward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});  
  
Upward  
_jaMoveTopUpward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});  
  
Downward  
_jaMoveTopDownward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});  
  
those can be combine with Update, Fixed Update or other ie:  
you can do something like:  
  
_jaUpdate(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        _jaMoveLeftFoward('#myObjectId', 2);  
});  
  
And your object will move 2px to positive left direction every frame refresh.  
  
#
Using Keybinds  
You can bind keys by using the event keyBind on keyDown or KeyUp, the keyDown event also tracks for key being pressed.   
  
_jaKeyBind.Down.a(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	console.log("key <a> has being pressed.");  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	//all your code in here  
});  
Its is important to remember that all jActs framework is binded to moments, it means that you have to be under some of theese
_jaAwake, _jaStart, _jaUpdate, _jaFixedUpdate, _jaAfterLoadFuncs
#
exemple of bindin key Down and key Up with an event  
  
_jaAfterLoadFuncs(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	_jaKeyBind.Down.a(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		console.log("key <a> has being pressed.");  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		//Do your stuff when the key a is pressed  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	});  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	_jaKeyBind.UpRelase.a(function () {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		console.log("Key <a> was released.");  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		//Do your stuff when the key a is released  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	});  
});  
#