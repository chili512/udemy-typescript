/**
 * Created by jonathan on 24/1/17.
 */
class Person {
    name: string; // public default
    private type: string;
    protected age: number = 27;

    // Auto creates a property
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Jon", "chili512");
console.log(person);
console.log(person.printAge());
console.log(person.setType("cool guy"));

// Inheritance
class Jon extends Person {
    //name = "Jon"; // overrides super

    constructor(username: string) {
        super("Max", username);
        this.age = 31;
    }

    setAge(age: number) {
        this.age = age;
    }
}
const jon = new Jon("Test");
console.log("I am $jon");
jon.setAge(55)
console.log(jon.printAge());
console.log("Hello World");

// set get
class Plant {
    private _species: string = "default";

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }

    get species() {
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// static
class Helpers {
    static PI: number = 22 / 7;

    static CalcCir(dia: number): number {
        return this.PI * dia;
    }
}
console.log(Helpers.PI);
console.log(Helpers.CalcCir(8));

// abstract
abstract class Project {
    projectName: string = "Defaly";
    budget: number = 1000;

    calcBudget() {
        return this.budget * 2;
    }

    abstract changeName(name: string): void;
}


class ItProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProj = new ItProject();
newProj.changeName("Hello");
console.log(newProj);

// private constructor
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) {
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The only one');
let right = OnlyOne.getInstance();
console.log(right.name);

function editable(value: boolean): any {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean): any {
    return function (target: any, propName: string) {
        const nd: PropertyDescriptor = {
            writable: value
    }
        return nd;
    }
}

class Aproject {

    // Setting this to false will turn the class into
    // a readonly class that does nothing useful
    @overwritable(true)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}


const pr = new Aproject("G");
pr.calcBudget();
// pr.calcBudget() = function () {
//     console.log(2000);
// }
pr.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Method: ", methodName);
    console.log("Index: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(200);
        }
    }
}

const course = new Course("My Course");
course.printStudentNumbers("aaa", true);
course.printStudentNumbers("aaa", false);