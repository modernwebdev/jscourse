var num = 33721;
var res = 1;

var numLength = String(num).length;
num = +num;

for (i = 0; i < numLength; i++) {
	var oneNum = num%10;
	res *= oneNum;
	num = parseInt(num/10);
}

console.log('результат умножения чисел ' + res);
console.log('результат возведения в степень ' + res**3);