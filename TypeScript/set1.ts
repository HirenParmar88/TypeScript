class Student {
    roll_number: number;
    name: string;
    ml_marks: number;
    bct_marks: number;
    dp_marks: number;

    constructor(roll_number: number, name: string, ml_marks: number = 0, bct_marks: number = 0, dp_marks: number = 0) {
        this.roll_number = roll_number;
        this.name = name;
        this.ml_marks = ml_marks;
        this.bct_marks = bct_marks;
        this.dp_marks = dp_marks;
    }

    calculatePercentage(): number {
        const total_marks = this.ml_marks + this.bct_marks + this.dp_marks;
        const percentage = (total_marks / 300) * 100; // Assuming total marks for all subjects is 300
        return percentage;
    }

    printResult(): string {
        const percentage = this.calculatePercentage();
        const result = percentage >= 40 ? "Pass" : "Fail";
        return `Roll Number: ${this.roll_number}\nName: ${this.name}\nML Marks: ${this.ml_marks}\nBCT Marks: ${this.bct_marks}\nDP Marks: ${this.dp_marks}\nPercentage: ${percentage.toFixed(2)}%\nResult: ${result}`;
    }
}

// Creating an instance of Student class
const student1 = new Student(101, "John", 80, 75, 85);
console.log(student1.printResult()); // Output student's information and result

const student2 = new Student(102, "Alice", 60, 55); // Assuming zero marks for DP
console.log(student2.printResult()); // Output student's information and result
