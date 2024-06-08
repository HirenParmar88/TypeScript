class Parent{
	name;
	setName(name)
	{
		this.name=name
	}
}
class Child extends Parent{
	getName()
	{
		return this.name
	}
}
let a = new Child()
a.setName("hiren parmar")
console.log(a.getName())