class testObject {
	constructor(msg) {
		this.message = msg;
		console.log(this.message);
	}
}

const myObjekt = new testObject("world");
const myObjekt2 = new testObject("big world");

myObjekt2.message = "Hej!";
myObjekt.message = "juletræ";

console.log(myObjekt.message);
console.log(myObjekt.message);

class car {
	constructor(make, model, year, condition) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.condition = condition;
	}
	getInfo() {
		return `jeg er en ${this.make}, model: ${this.model} fra ${this.year} jeg er ${this.condition} stand `;
	}
	getSummary() {
		return `jeg er en ${this.make}, model: ${this.model}`;
	}
}

const myCar = new car("volvo", "v40", 2001, "god");
const myCar1 = new car("BMW", "i5", 2011, "super");

console.log(myCar.getSummary());
console.log(myCar.getInfo());
console.log(myCar1.getInfo());

class carInfo {
	constructor(make, model, year, condition) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.condition = condition;
	}
	getInfo() {
		return `jeg er en ${this.make}, model: ${this.model} fra ${this.year} jeg er ${this.condition} stand `;
	}
	getSummary() {
		return `jeg er en ${this.make}, model: ${this.model}`;
	}
}

const myCarInfo = [];

myCarInfo.push(new carInfo("volvo", "v40", 2001, "god"));
myCarInfo.push(new carInfo("BMW", "i5", 2011, "super"));

console.log(myCarInfo);
