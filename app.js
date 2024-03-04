




var firstNumber = prompt("Enter First Number");
firstNumber = parseInt(firstNumber);
var secondNumber = prompt("Enter Second Number");
secondNumber= parseInt(secondNumber);

var value = prompt("CHOOSE OPERATOR?");

var add = firstNumber + secondNumber;
var sub = firstNumber - secondNumber;
var mul = firstNumber * secondNumber;
var div = firstNumber / secondNumber;

if (value === "+") {
    alert(add);
}
else if (value === "-") {
    alert(sub);
}
else if (value === "*") {
    alert(mul);
}
else if (value === "/") {
    alert(div);
}
else {
    alert("WRONG NUMBER");
}