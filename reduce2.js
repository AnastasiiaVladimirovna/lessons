Array.prototype.reduce2 = function(callback, initialValue) {

    var result;
    var i = 0;
    if (typeof initialValue === "undefined") {
        result = this[0];
        i++;
    } else {
        result = initialValue;
    }
    while (i < this.length) {
        result = callback(result, this[i]);
        i++;
    }
    return result;

};

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function foo(a, b) {
    return a.concat(b);
}

var a = [1, 2, 3, 4];
console.log(a.reduce(add), a.reduce2(add)); // 10 10
console.log(a.reduce(add, 10), a.reduce2(add, 10)); // 20 20
console.log(a.reduce(mul), a.reduce2(mul)); // 24 24
console.log(a.reduce(foo, ''), a.reduce2(foo, '')); // 1234 1234
