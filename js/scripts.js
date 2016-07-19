$(function() {
    var a = 0;

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

    $(".dec").keyup(convert);
    $(".rnd").click(fillRandom);
    fillRandom();
    $(".color-page").click(colorBody);
})
