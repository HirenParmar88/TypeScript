//examples of function 
function hiren1(person){
	return "Hello,"+person;
}
let user="I am hiren";
console.log(hiren1(user));

//addition of two numbers
function add(a,b){
	console.log(a+b);
}
add(50,50);

//local and global variables
function f()
{
	var x=5;	//available globally inside f()
	if(true)
	{
		var y=10;	//available globally inside f()
		console.log(x);
		console.log(y);
	}
	console.log(x);
	console.log(y);
}
f();