// step-1 create a class in TS

class App{
	name="Hiren Parmar"
	getName()
	{
		console.log(this.name)
	}
}
let a2=new App();
a2.getName();

//step-2 create class with constructor

class app{
	name="Hiren Parmar"
	constructor()
	{
		console.log("constructor call GLS University.");
	}
	getName()
	{
		console.log(this.name)
	}
}
let a3=new app()
a3.getName()

// step-3 define the datatype

class hiren{
	name: string;
	constructor(name:string)
	{
		this.name=name
	}
	getName(): string
	{
		return this.name
	}
}
let a4=new hiren("Ahmedabad")
console.log(a4.getName());