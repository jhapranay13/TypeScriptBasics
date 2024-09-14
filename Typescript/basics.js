"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
console.log("Welcome to Typescript");
// Basic types of Data. Compile using tsc <filename>
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1 + " " + num2;
    }
}
console.log("Adding number", add(12, 24));
console.log("Adding string", add('Hi', 'Hello'));
console.log("Adding string", add('15', '15'));
const person = {
    name: "andy",
    age: 45,
    hobbies: ['cooking', 'drawing'],
    role: [24, 'Admin'] // tuple type
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log("Hobbies", hobby);
}
for (const rol of person.role) {
    console.log("Role", rol);
}
var EnumExp;
(function (EnumExp) {
    EnumExp[EnumExp["ADMIN"] = 1] = "ADMIN";
    EnumExp[EnumExp["USER"] = 100] = "USER";
    EnumExp[EnumExp["SOME"] = 1000] = "SOME";
})(EnumExp || (EnumExp = {}));
console.log(EnumExp.ADMIN);
const combObj = {
    demoFld: 23,
};
console.log("Type demo", combObj.demoFld);
function greet(combObj2) {
    console.log("Type demo2 ", combObj2.name, combObj2.age);
}
;
greet({ name: 'dan', age: 16 });
const functionPointer = add;
console.log("Function pointer", functionPointer(10, 22));
const functionPointer2 = add;
console.log("Function Pointer 2", functionPointer2('hi', 'hello'));
// the above can also be done in the method arguments
let userInput = 'Max';
let userValue;
if (typeof userInput === 'string') {
    userValue = userInput;
}
console.log("Unknown type", userValue);
// return type never. When you have autility function that always throws error
// that function can have return type never. Another function is a function that contains 
// infinite loop
/*function errorGen(errorCode : number, errorMsg: string) : never {
    throw {errorCode, errorMsg};
}

errorGen(12, 'SomeError');
*/
// tsc <fileName> --watch
// tsc --init
const printConsole = output => console.log("From Arrow Function", output);
printConsole("6");
const add1 = (...num) => {
    return num.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
console.log("Spread operator arrow function", add1(2, 3, 4, 5, 6));
class Department {
    constructor(deptId, deptName) {
        this.deptId = deptId;
        this.deptName = deptName;
    }
    // if you call this method this will refer to Department object
    deptWelcome() {
        console.log(`Welcome to Depatment ${this.deptName}.`);
    }
}
const deptObj = new Department(12, "IT dept");
const deptObjCpy = {
    deptId: 34,
    deptName: 'Mech Dept',
    deptWelcome: deptObj.deptWelcome
};
deptObjCpy.deptWelcome();
class InterfaceExp {
    constructor(deptName, name, address) {
        this.deptName = deptName;
        this.name = name;
        this.address = address;
    }
    greet(name) {
        console.log(`Dept name>> ${this.deptName}`);
    }
}
let addFunc;
addFunc = (a, b) => { return a + b; };
console.log("Function type with interfaces", addFunc(2, 3));
const e1 = {
    name: "Max",
    privalage: ["A1"],
    startDate: new Date()
};
console.log("Intersection types", e1);
const printTypeGuards = (a) => {
    if ('privalage' in a) {
        console.log("privalage");
    }
};
printTypeGuards(e1);
class Vehicle {
    drive() {
        console.log("Driving Vehicle");
    }
}
class Truck {
    drive() {
        console.log("Driving Truck");
    }
}
function callVehicleDrive(a) {
    if (a instanceof Truck) {
        a.drive();
    }
    else {
        console.log("Not calling");
    }
}
;
const v1 = new Vehicle();
const v2 = new Truck();
callVehicleDrive(v1);
callVehicleDrive(v2);
// Typecasting and telling compiler we know that it is not null by using !
//const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!;
// const userInputElement = document.querySelector('#user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi There';
const userInputElement = document.querySelector('#user-input');
if (userInputElement) {
    userInputElement.value = "Hello There";
}
const errorBag = {
    email: "Not a Valid Email",
    userName: '12',
};
console.log("Telling typescript about property type and value type that object should have", errorBag);
function addOverLoad(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1 + " " + num2;
    }
}
const nameOverload = addOverLoad("Max", "Payne");
console.log(nameOverload.split(" "));
// Optional Chaining
let fetchedUser = {
    name: "Max",
    id: "id",
    job: { title: "SomeTimtle" }
};
console.log((_a = fetchedUser === null || fetchedUser === void 0 ? void 0 : fetchedUser.job) === null || _a === void 0 ? void 0 : _a.title);
fetchedUser = undefined;
const storedUserName = fetchedUser !== null && fetchedUser !== void 0 ? fetchedUser : "DEFAULT ADDRESS";
console.log(storedUserName);
function lengthCheck(element) {
    console.log("Will not give Error if length property is there", element.length);
}
console.log(lengthCheck(['Anna', 'Nicole']));
const keyObj = {
    name: "Anna",
    age: 22
};
function objKeyCheck(obj, key) {
    console.log("T is key of U");
}
objKeyCheck(keyObj, 'name');
//objKeyCheck(keyObj, 'address');
// Similar usage in class
// Decorators
function Logger(constructor) {
    console.log("Logging...", constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Manu";
        console.log("Constructor");
    }
};
Person = __decorate([
    Logger,
    __metadata("design:paramtypes", [])
], Person);
const personObj = new Person();
console.log("Person Object", personObj);
function WithTemplate(template, hookId) {
    return function (constructor) {
        const element = document.querySelector(`#${hookId}`);
        if (element) {
            element.innerHTML = template;
        }
    };
}
function PropertDecorator(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
function AccessorDecorator(target, name, descriptor) {
    console.log("AccessorDecorator Decorator");
    console.log(target, name, descriptor);
}
function functionDecorator(target, name, descriptor) {
    console.log("MethodDecorator Decorator");
    console.log(target, name, descriptor);
}
function ParamaeterDecorator(target, name, position) {
    console.log("ParamaeterDecorator Decorator");
    console.log(target, name, position);
}
// Dedorator functions are executed in the reverse order. i.e bottom up
let Person1 = class Person1 {
    constructor() {
        this.name = "Manu";
        console.log("Constructor");
    }
    set nameSetter(val) {
        this.name = val;
    }
    greet(addedString) {
        console.log(`${this.name} || ${addedString}`);
    }
};
__decorate([
    PropertDecorator,
    __metadata("design:type", String)
], Person1.prototype, "name", void 0);
__decorate([
    AccessorDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Person1.prototype, "nameSetter", null);
__decorate([
    functionDecorator,
    __param(0, ParamaeterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person1.prototype, "greet", null);
Person1 = __decorate([
    Logger,
    WithTemplate('<p>It works and Template gets printed</p>', 'outlet'),
    __metadata("design:paramtypes", [])
], Person1);
const person1Obj = new Person1();
function WithTemplateSome(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor() {
                super();
                console.log("Executing after instatntition");
                const element = document.querySelector(`#${hookId}`);
                if (element) {
                    element.innerHTML = template;
                }
            }
        };
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Manu";
        console.log("Constructor");
    }
    set nameSetter(val) {
        this.name = val;
    }
    greet(addedString) {
        console.log(`${this.name} || ${addedString}`);
    }
};
Person2 = __decorate([
    WithTemplateSome('<p>It works and Template when object is intantiated</p>', 'outlet1'),
    __metadata("design:paramtypes", [])
], Person2);
const person2Obj = new Person2();
// Decorators in which you can return something is Method(returns PropertyDescriptor). Class and accessors(PropertyDescriptor)
