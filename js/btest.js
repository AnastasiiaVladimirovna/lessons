var s = "John Lennon";
var ns = s.length;
console.log(ns);
var doubles = s.repeat(2);
console.log(doubles);

function checkMail(email){
    if(email.indexOf("@")>=0){
        return true;
    }else{
        return false;
    };
};

var desh = "-";
for (var i=-10; i<=10;i++){
    console.log(desh.repeat(10 - Math.abs(i)));
}

var phone = "095-494-47-14";
var newphone=phone.split("-");
console.log(newphone);

var numbers=newphone.map(function(item){
   return parseInt(item,10);
})
console.log(numbers);

var sphone=newphone.join("");
console.log(sphone);
var digits=sphone.split("");
console.log(digits);


function getPhoneSum(phoneNumber){
    return phoneNumber.split("-").join("").split("").map(function(item){
        return parseInt(item);
    }).reduce(function(current,item){
        return item + current;
    },0);
}


console.log('test1', 16, getPhoneSum('050-123-12-11'));
console.log('test2', 10, getPhoneSum('010-101-11-50'));
console.log('test3', 45, getPhoneSum('099-115-55-55'));
console.log('test4', 89, getPhoneSum('999-999-99-98'));





