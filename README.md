# jActs
jActs extends your javascript with ready to use Actions such as: 
Browser Start, frame Update, Fixed Time Update, ...
Movements foward, upward, ...
EasyKeybinds, you can bind multiple events to any mapped key, or add a new map.
Delimiters, you can simply add an range of operation such as "-8px" to "8px" from a center point.

For now you have to download the full Dist folder
add
#
<script src='{yourPath}/Dist/jActs.js'></script>
#
it is required that Dist folter have all its subfolders.

after that you can start using the framework

#
Awake execution
#
_jaAwake(function () { 
    console.log('Loads whatever you have in here before other methods'); 
});
#
Start execution
#
_jaStart(function () { 
    console.log('Loads whatever you have in here just after the awake'); 
});
#
AfterLoad Document execution
#
_jaAfterLoadFuncs(function () { 
    console.log('Loads whatever you have in here after the document ready'); 
});
#
Frame Update execution
#
_jaUpdate(function () { 
    console.log('Loads whatever you have in here on every browser frame'); 
});
#
20ms period execution
#
_jaFixedUpdate(function () { 
    console.log('Loads whatever you have in here on every 20 ms'); 
});
#
Move objects
#
_jaMoveLeftFoward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});
#
_jaMoveLeftBackward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});
#
_jaMoveTopUpward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});
#
_jaMoveTopDownward({Class or ID: ie '.myClass' or '#myID'}, {amounth to move, default 1px});
#

those can be combine with Update, Fixed Update or other ie:
you can do something like:
#
Mix function exemple
#
_jaUpdate(function () { 
        _jaMoveLeftFoward('#myObjectId', 2);
});
#
#
And your object will move 2px to positive left direction every frame refresh.
  
We are now working on keybinds... soon we have news in here

