// learning function
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// Arrow functtion
var addArrow = function (num1, num2) { return num1 + num2; };
// object->function->method
var poorUser = {
    name: "Salim",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is:".concat(this.balance + balance);
    },
};
// map
var arr = [1, 4, 10];
var newArray = arr.map(function (elem) { return elem * elem; });
console.log(newArray);
