var Student = /** @class */ (function () {
    function Student(roll_number, name, ml_marks, bct_marks, dp_marks) {
        if (ml_marks === void 0) { ml_marks = 0; }
        if (bct_marks === void 0) { bct_marks = 0; }
        if (dp_marks === void 0) { dp_marks = 0; }
        this.roll_number = roll_number;
        this.name = name;
        this.ml_marks = ml_marks;
        this.bct_marks = bct_marks;
        this.dp_marks = dp_marks;
    }
    Student.prototype.calculatePercentage = function () {
        var total_marks = this.ml_marks + this.bct_marks + this.dp_marks;
        var percentage = (total_marks / 300) * 100; // Assuming total marks for all subjects is 300
        return percentage;
    };
    Student.prototype.printResult = function () {
        var percentage = this.calculatePercentage();
        var result = percentage >= 40 ? "Pass" : "Fail";
        return "Roll Number: ".concat(this.roll_number, "\nName: ").concat(this.name, "\nML Marks: ").concat(this.ml_marks, "\nBCT Marks: ").concat(this.bct_marks, "\nDP Marks: ").concat(this.dp_marks, "\nPercentage: ").concat(percentage.toFixed(2), "%\nResult: ").concat(result);
    };
    return Student;
}());
// Creating an instance of Student class
var student1 = new Student(101, "John", 80, 75, 85);
console.log(student1.printResult()); // Output student's information and result
var student2 = new Student(102, "Alice", 60, 55); // Assuming zero marks for DP
console.log(student2.printResult()); // Output student's information and result
