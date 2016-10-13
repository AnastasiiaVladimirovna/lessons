var e= new RegExp("\\s","ig");
var s1="HeLlo mello";
var s2="W";
var s3="SUNLLY@gmail.com";
var s4="<b>Helo,my dear friend</b>";
var s5="0638742919@mail.ru";
var code = ".a{border-radius: 5px;}      .b {color: red;}    .c {border-radius: 10px;}  .d {color:blue;}  .e {border-radius:25%}";
var e2=new RegExp("border-radius:\\s*([0-9]+[a-z%]+);*","ig");
// console.log(code);

console.log(e.test(s1),s1);
console.log(e.test(s2),s2);
console.log(e.test(s3),s3);
console.log(e.test(s4),s4);
console.log(e.test(s5),s5);

var min=code.replace(e2,"-webkit-border-radius:$1;-ms-border-radius:$1;border-radius:$1;");

console.log(min);

var phone = "(050)401-28-11";
var e3 = new RegExp('^\\(([0-9]+)\\)\\s*([0-9\\-]+)$')

console.log('testphone', e3.test(phone));
var newformat = phone.replace(e3, 'Operator: $1, Number: $2');
console.log(newformat);

// var s6=s4.replace(e,"");

// console.log(s6);