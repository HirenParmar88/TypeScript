//step 1
//let a="hello TypeScript";
//console.warn(a);
//step 2
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("This is test function..");
    };
    return App;
}());
function greeter(person) {
    return "hello, " + person;
}
var a1 = new App();
a1.test();
var user = "Hiren";
console.log(greeter(user));
