Array.prototype.reduce2 = function(callback, initialValue) {
    if (typeof initialValue !== "undefined") {
        return this.concat([initialValue]).reduce2(callback);
    }

    if (this.length === 1) {
        return this[0];
    } else {
        var left = this.slice(0, this.length / 2).reduce2(callback);
        var right = this.slice(this.length / 2).reduce2(callback);
        return callback(left, right);
    }
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

//автоприведение типов не применимо для рекурсивного решения
//console.log(a.reduce(foo, ''), a.reduce2(foo, '')); // 1234 1234
