var myArr = [];
for (var i = 0; i <= 10; i += 2) {
    myArr.push(i);
}
var myNewArr = myArr.map(function(item) {
    return item + 5;
});

var sum = 0;
for (i = 0; i < myNewArr.length; i++) {
    sum += myNewArr[i];
}
console.log(sum);
