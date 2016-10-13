
    var a = 0;
    Array.prototype.sum = function() {
        var result = 0;
        for (var i = 0; i < this.length; i++) {
            result = result + this[i];
        }
        return result;
    };

    Array.prototype.forEach2 = function(f) {
        //this - current Array
        //f - reference function
        for (var i = 0; i < this.length; i++) {
            f(this[i]);
        }
    };

    Array.prototype.map2 = function(f) {
        var result = [];
        for (var i = 0; i < this.length; i++) {
            result.push(f(this[i]));
        }
        return result;
    };

    Array.prototype.some2 = function(f) {
        for (var i = 0; i < this.length; i++) {
            if (f(this[i]) === true) {
                return true;
            }
        }
        return false;
    };

    function add() {
        $("<li>").text(a).appendTo($(".list")).hide().slideDown().click(remove);
        a = a + 1;
    }

    function remove() {
        $(this).slideUp();
    }

    function addClass() {
        $("ul.menu li").removeClass("active");
        $(this).addClass("active");
    }

    function move(e) {
        var dx = e.clientX;
        var dy = e.clientY;
        console.log("hello");
        console.log(e, dx, dy);
        $(".add-button").css("top", dy).css("left", dx);
    }

    function checkAge() {
        var age = $("input[name='age']").val();
        if (age >= 18) {
            $(".message").fadeOut();
        } else {
            $(".message").fadeIn();
        }
        console.log(age);
    }

    function checkAvto() {
        var exp = $("input[name='expirience']").val();
        if (exp <= 3) {
            $(".exp-info").fadeIn();
        } else {
            $(".exp-info").fadeOut();
        }
        console.log(exp);
    }

    function sayHello() {
        var date = new Date();
        var timeString = date.toLocaleTimeString();
        var message = $("<p>").addClass("message").text("Hello");
        var time = $("<p>").addClass("time").text(timeString);
        $("<li>").append(message).append(time).prependTo($(".messages")).hide().slideDown();
    }

    function convert() {
        var number = $("input.dec").val();
        number = parseInt(number, 10);
        var hex = number.toString(16);
        $("input.hex").val(hex);
        var bin = number.toString(2);
        $("input.bin").val(bin);
        var oct = number.toString(8);
        $("input.oct").val(oct);
        console.log("Hello", number, hex);
    }

    function fillRandom() {
        var random = parseInt(Math.random() * 200);
        $("input.dec").val(random);
        convert();
        console.log(random);
    }


    function colorBody() {
        var r = parseInt(Math.random() * 16).toString(16);
        var g = parseInt(Math.random() * 16).toString(16);
        var b = parseInt(Math.random() * 16).toString(16);
        var rgb = ("#" + r + g + b);
        $("body").css("background-color", rgb)
        console.log(r, g, b, rgb);
    }

    $(".add-button").css("color", "green").click(add);

    $("ul.menu li").click(addClass);

    $(".send-info").click(checkAge);

    $(".send-info").click(checkAvto);

    $(".button-hello").click(sayHello);

    $(".button-hi").click(function() {

    });

    $(".dec").keyup(convert);
    $(".rnd").click(fillRandom);
    fillRandom();
    $(".color-page").click(colorBody);

    //
    function print(s) {
        console.log(s);
    }

    function twice(number) {
        return number * 2;
    }

    function isOdd(number) {
        if (number % 2 === 0) {
            return false;
        } else {
            return true;
        }
    }

    function plus(a, b) {
        return a + b;
    }


    var data = [];
    for (var i = 0; i < 7; i++) {
        data.push(Math.random() * 15 | 0);
    }
    console.log(data);

    var last = data.pop();
    console.log(data);
    console.log(last);

    data.sort();
    console.log(data);

    data[0] = -data[0];
    data[data.length - 1] = -data[data.length - 1];
    console.log(data);

    data.reverse();
    console.log(data);

    data.shift();
    console.log(data);

    data.unshift(1);
    console.log('data=', data);

    var part = data.slice(-4);
    console.log('part=', part);

    var newData = data.concat(part);
    console.log('newData', newData);

    var s = data.join(",");
    console.log(s);

    var search = data.indexOf(10);
    if (search > -1) {
        console.log("Yes", search);
    } else {
        console.log("No");
    }

    print("Hello!");
    print("Hello,Sasha!");

    data.forEach(print);

    for (var j = 0; j < data.length; j++) {
        print(data[j]);
    }

    console.log("twice test", twice(10));


    var tdata = data.map(twice);
    console.log('data ', data);
    console.log('tdata ', tdata);

    var mdata = data.map(function(number) {
        return -number;
    });

    console.log('data', data);
    console.log('mdata ', mdata);

    console.log(10, isOdd(10));
    console.log(13, isOdd(13));
    console.log(28, isOdd(28));

    var isAllOdd = data.every(isOdd);
    console.log('isAllOdd ', isAllOdd);

    var isOneOdd = data.some(isOdd);
    console.log('isOneOdd ', isOneOdd);

    var odds = data.filter(isOdd);
    console.log('odds ', odds);

    var positives = data.filter(function(number) {
        return (number > 0);
    });
    console.log('data', data);
    console.log('positives', positives);

    var s = positives.sum();
    console.log(s);

    console.log(plus(15, 2));
    console.log(plus(35, 62));
    console.log(plus(10, -8));

    var s2 = positives.reduce(plus);
    console.log("reduce", s2);

    function showMeFirst(s) {
        console.log(s[0]);
    }

    var fruits = ["Apple", "Banana", "Citrus", "Orange", "Greipfruit"];
    console.log('fruits ', fruits);
    var fruitsLength1 = fruits.map(function(fruit) {
        return fruit.length; });
    console.log('fruitsLength1 ', fruitsLength1);

    var fruitsLength2 = fruits.map2(function(fruit) {
        return fruit.length; });
    console.log('fruitsLength2 ', fruitsLength2);

    var hasBigFruits1 = fruits.some(function(fruit) {
        return fruit.length > 8; });
    console.log('hasBigFruits1 ', hasBigFruits1);

    var hasBigFruits2 = fruits.some2(function(fruit) {
        return fruit.length > 8; });
    console.log('hasBigFruits2 ', hasBigFruits2);

    var hasBigFruits3 = fruits.some2(function(fruit) {
        return fruit.length > 16; });
    console.log('hasBigFruits3 ', hasBigFruits3);

    function max(array){
    console.log('array ' , array);
        var result=-Infinity;
        for(var i=0;i<array.length;i++){
            if(array[i]>result){
                result=array[i];
            }
        }
        return result;
    }

    function max2(array){
    console.log('array ' , array);
        var result=-Infinity;
        for(var i=0;i<array.length;i++){
            if(array[i]>result){
                result=array[i];
            }
        }
        return result;
    }

    console.log(max([-10,-5,-64,-77]));
    console.log(max(-10,-5,-64,-77));

    function min(array){
     console.log('array' ,array);
     var result=Infinity;
     array.prototype.forEach=function(){
        for(i=0;i<array.lendth;i++){
            if(array[i]<result){
                result=array[i];
            }
        }
        return result;
     } 
    }

});
