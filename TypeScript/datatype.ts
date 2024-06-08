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

var x=10;	//declaration in c
console.log(x);

let a=100;
console.log(a);

//Step -2 Variable declaration in TS

let hiren:number=200	//hiren is a variable which can store only Integer type data.
console.log(hiren)

//Step -3 Data Types of TS

let p:boolean = true	//boolean
console.log(p)

let q:number = 55	//number
console.log(q)

let r:string = "GLS"	//string
console.log(r)

let t:null=null		//null
console.log(t)

let u:undefined=undefined	 //undefined
console.log(u)

let var_any:any=false		//any
console.log(var_any)

var s:number=99
console.log(s)

//Step -4 Array in TS

let array=['GLS','University','Ahmedabad',11,false]
array.push('Hiren')		//insert a new ele. of the array.
array.push(22)
array.push(true)
console.log(array)

let arr=['HIREN','Parmar','GLS','University',10]
arr[1]=105	//array position 1 pe store hoga 
console.log(arr)

//Step -5 DataTypes declaration with array

let ary:string[]=['GLS','University','Ahmedabad']
//ary.push(100)	//not allowed to declare number without number datatypes of an array
//ary.push(true)	//not allowed
ary.push('Low Garden')
ary[1]="Student"	//to update first position of an array index.
console.log(ary)

//Step -6 Create Object in TS

//object declaration
let obj1={
	name:'Hiren',
	surname:'Parmar',
	address:'GLS Univ.',
	age:20
}
console.log(obj1)

//try update name with number
//obj1.name=30	//it will gives the error
obj1.name='Unnatii'		//it will updating a values
console.log(obj1)

//try to add email fields in object
//obj1.email='hienparmar5105@gmail.com'	//not allowed
//console.log(obj1)

//Step -7 Interface in TS

//interface syntax
/*
interface interface_name{
	property_type: data_type,
	property_type: data_type
}
*/

interface interface1{
	name:string,
	age:number,
	address:string,
	surname:string
}

let user:interface1={
	name:'hiren',
	age:20,
	address:'ahmedabad',
	surname:'Parmar'
}
console.log(user)

//using any datatype of an interface
interface interface2{
	firstname:any,
	lastname:any,
	address:any,
	mobile:any,
	email:any
}

let user1:interface2={
	firstname:'HIREN',
	lastname:'PARMAR',
	address:'AHMEDABAD',
	mobile:9313688860,
	email:true
}
console.log(user1)

//Step -8 Tuple in TS

//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.

//1. define tuple
let tuple: [number, boolean, string];

//initialize correctly
tuple= [5, true, 'Hiren']
console.log(tuple)

//initialize incorrectly which throws an error
//tuple= [false, 'hiren']
//console.log(tuple)

//2. Readonly Tuple
let tuple1: [number, boolean, string]
tuple1=[5,false,'GLS']
console.log(tuple1)

tuple1.push('GLS University')
console.log(tuple1)

// defined our readonly tuple
const readonlyTuple: readonly[number, boolean, string] = [10, true, 'Ahmedabad']
console.log(readonlyTuple)

//readonlyTuple.push('Hello TypeScript !!')		//throw an error
//console.log(readonlyTuple)

//3. Named Tuple
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph)

//4. Destructing Tuple
const graph1: [number, number] = [55.5, 41.3];
const[xx, yy] = graph1;
console.log(graph1)
