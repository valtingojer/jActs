//Object.prototype._jaForEach = (array, callback) => {
//    // Before iterating through the array forEach checks the value of array and sets a len variable
//    let k = 0;
//    // If the argument passed doesn't have a property len then forEach returns
//    if (!array.length)
//        return;
//    //  checking if callback is callable
//    if (typeof callback != 'function')
//        return;
//    // The user can set a custom this context
//    let len = array.length;

//    // iterating until k reaches the length of the array - 1
//    while (k < len) {
//        // if the array doesn't have a k element at index k then we return
//        if (!array[k]) {
//            return;
//        }
//        let element = array[k];

//        // notice the three elements used in the callback
//        callback(element, k, array);

//        // Increase k to reach the next item in the array
//        k += 1;
//    }
//    // forEach never returns anything (return undefined is the same as return)
//    return undefined;
//};