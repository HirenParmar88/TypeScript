//step 1
//let a="hello TypeScript";
//console.warn(a);

//step 2
class App{
	test()
	{
		console.log("This is test function..");
	}
}
function greeter(person){
	return "hello, "+person;
}

let a1=new App();
a1.test()

let user="Hiren";
console.log(greeter(user));