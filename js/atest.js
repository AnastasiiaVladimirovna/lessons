var data = [1, 1, 2, 3, 5, 8, 134, 32];
var data2 = [1, 1, 1, 1, 1, 1, 1];

data.forEach(function(item) {
    console.log(item);
});

var numbers = [];
for (var i = 0; i < 9; i++) {
    var number = parseInt(Math.random() * 100) - 50;
    numbers.push(number);
}
console.log(numbers);
var min = Infinity;
numbers.forEach(function(number) {
    if (number < min) {
        min = number;
    }
});
console.log(min);


//-5, 6, -8, 9, 12, -1
var rmin = numbers.reduce(function(number, currentMin){
	if (number < currentMin){
		return number;
	} else {
		return currentMin;
	}
}, Infinity);

console.log('rmin', rmin);


var rmax=numbers.reduce(function(number,currentMax){
	if(number>currentMax){
		return number;
	} else{
		return currentMax;
	}
},-Infinity);
console.log('rmax', rmax);


console.log('------');
var min0 = Infinity;
var result;
numbers.forEach(function(number) {
    var d = number * number;
    if (d < min0) {
        min0 = d;
        result = number;
    }
});
console.log(result);

var data3 = data.map(function(item) {
    return item * 2;
});

console.log(data);
console.log(data3);

var database = [
    { name: "Petrova", surname: "Rimma", salary: 5000 },
    { name: "Ivanova", surname: "Irina", salary: 10 },
    { name: "Trunova", surname: "Alisa", salary: 2000 }
];
// console.table(database);

var newDatabase = database.map(function(item) {
    console.log('item', item);
    console.log(typeof item);
    return {
    	name: item.surname,
    	surname: item.name,
    	salary: item.salary
    };
});
// console.table(newDatabase);

var testArray = [1,32,4];

var newDatabase2=newDatabase.filter(function(item){
    if(item.salary>0){
        return true;
    }else{
        return false;
    }
});
// console.table(newDatabase2);

var isFired=newDatabase.some(function(item){
    return item.salary === 0;
});
console.log(isFired);

var isFullName=newDatabase.every(function(item){
    return item.name.length>1;
});
console.log('isFullName', isFullName);

var isAllSalary=newDatabase.reduce(function(current, item, itemIndex){
    if (itemIndex%2===0){
        return item.salary+current;
    }else{
        return current;
    }   
},0)
console.log(isAllSalary);