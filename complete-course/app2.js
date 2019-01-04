var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by jonathan on 24/1/17.
 */
class Person {
    // Auto creates a property
    constructor(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type) {
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
    constructor(username) {
        super("Max", username);
        this.age = 31;
    }
    setAge(age) {
        this.age = age;
    }
}
const jon = new Jon("Test");
console.log("I am $jon");
jon.setAge(55);
console.log(jon.printAge());
console.log("Hello World");
// set get
class Plant {
    constructor() {
        this._species = "default";
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
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
    static CalcCir(dia) {
        return this.PI * dia;
    }
}
Helpers.PI = 22 / 7;
console.log(Helpers.PI);
console.log(Helpers.CalcCir(8));
// abstract
class Project {
    constructor() {
        this.projectName = "Defaly";
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ItProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let newProj = new ItProject();
newProj.changeName("Hello");
console.log(newProj);
// private constructor
class OnlyOne {
    constructor(name) {
        this.name = name;
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
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        const nd = {
            writable: value
        };
        return nd;
    };
}
class Aproject {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwritable(true)
], Aproject.prototype, "projectName", void 0);
__decorate([
    editable(false)
], Aproject.prototype, "calcBudget", null);
const pr = new Aproject("G");
pr.calcBudget();
// pr.calcBudget() = function () {
//     console.log(2000);
// }
pr.calcBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("Method: ", methodName);
    console.log("Index: ", paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(200);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course("My Course");
course.printStudentNumbers("aaa", true);
course.printStudentNumbers("aaa", false);
