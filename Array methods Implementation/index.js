let myArray = [2, 3, 10, 4];

// filter

Array.prototype.myFilter = function (callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

// console.log(myArray.myFilter((item) => item > 2));

// map

Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }
    return arr;
}

// console.log(myArray.myMap((item) => item + 2));

// forEach

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


// myArray.myForEach((item) => {
//     item += 2;
//     console.log(item);
// });

// 

// includes

Array.prototype.myIncludes = function (item, fromIndex) {
    if (arguments.length === 1) {
        fromIndex = 0;
    }
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === item) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(myArray.myIncludes(2));

// bind 

let bind = (fn, context) => {
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        let funcArgs = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(fnArgs));
    }
}