// step-1 create a class in TS
var App = /** @class */ (function () {
    function App() {
        this.name = "Hiren Parmar";
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a2 = new App();
a2.getName();
//step-2 create class with constructor
var app = /** @class */ (function () {
    function app() {
        this.name = "Hiren Parmar";
        console.log("constructor call GLS University.");
    }
    app.prototype.getName = function () {
        console.log(this.name);
    };
    return app;
}());
var a3 = new app();
a3.getName();
//step-3 define the datatype
var hiren = /** @class */ (function () {
    function hiren(name) {
        this.name = name;
    }
    hiren.prototype.getName = function () {
        return this.name;
    };
    return hiren;
}());
var a4 = new hiren("Ahmedabad");
console.log(a4.getName());
