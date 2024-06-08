/*	how to run TypeScript code in terminal.

C:\>d:

d:\>cd MCA SEM-2\Full Stack Development\TypeScript

d:\MCA SEM-2\Full Stack Development\TypeScript>node -v
v20.11.1

d:\MCA SEM-2\Full Stack Development\TypeScript>tsc -v
Version 5.3.3

d:\MCA SEM-2\Full Stack Development\TypeScript>tsc datatype.ts

d:\MCA SEM-2\Full Stack Development\TypeScript>node datatype.js
10

*/
//Step -1 
//variable declaration
var x = 10; //declaration in c
console.log(x);
var a = 100;
console.log(a);
//Step -2 Variable declaration in TS
var hiren = 200; //hiren is a variable which can store only Integer type data.
console.log(hiren);
//Step -3 Data Types of TS
var p = true; //boolean
console.log(p);
var q = 55; //number
console.log(q);
var r = "GLS"; //string
console.log(r);
var t = null; //null
console.log(t);
var u = undefined; //undefined
console.log(u);
var var_any = false; //any
console.log(var_any);
var s = 99;
console.log(s);
//Step -4 Array in TS
var array = ['GLS', 'University', 'Ahmedabad', 11, false];
array.push('Hiren'); //insert a new ele. of the array.
array.push(22);
array.push(true);
console.log(array);
var arr = ['HIREN', 'Parmar', 'GLS', 'University', 10];
arr[1] = 105; //array position 1 pe store hoga 
console.log(arr);
//Step -5 DataTypes declaration with array
var ary = ['GLS', 'University', 'Ahmedabad'];
//ary.push(100)	//not allowed to declare number without number datatypes of an array
//ary.push(true)	//not allowed
ary.push('Low Garden');
ary[1] = "Student"; //to update first position of an array index.
console.log(ary);
//Step -6 Create Object in TS
//object declaration
var obj1 = {
    name: 'Hiren',
    surname: 'Parmar',
    address: 'GLS Univ.',
    age: 20
};
console.log(obj1);
//try update name with number
//obj1.name=30	//it will gives the error
obj1.name = 'Unnatii'; //it will updating a values
console.log(obj1);
var user = {
    name: 'hiren',
    age: 20,
    address: 'ahmedabad',
    surname: 'Parmar'
};
console.log(user);
var user1 = {
    firstname: 'HIREN',
    lastname: 'PARMAR',
    address: 'AHMEDABAD',
    mobile: 9313688860,
    email: true
};
console.log(user1);
//Step -8 Tuple in TS
//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.
//1. define tuple
var tuple;
//initialize correctly
tuple = [5, true, 'Hiren'];
console.log(tuple);
//initialize incorrectly which throws an error
//tuple= [false, 'hiren']
//console.log(tuple)
//2. Readonly Tuple
var tuple1;
tuple1 = [5, false, 'GLS'];
console.log(tuple1);
tuple1.push('GLS University');
console.log(tuple1);
// defined our readonly tuple
var readonlyTuple = [10, true, 'Ahmedabad'];
console.log(readonlyTuple);
//readonlyTuple.push('Hello TypeScript !!')		//throw an error
//console.log(readonlyTuple)
//3. Named Tuple
var graph = [55.2, 41.3];
console.log(graph);
//4. Destructing Tuple
var graph1 = [55.5, 41.3];
var xx = graph1[0], yy = graph1[1];
console.log(graph1);
