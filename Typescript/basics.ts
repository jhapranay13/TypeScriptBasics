console.log("Welcome to Typescript");

// Basic types of Data. Compile using tsc <filename>

function add(num1: number | string, num2: number | string) {  // union type

    if (typeof num1 === 'number' && typeof num2 === 'number' ) {
        return num1 + num2
    } else {
        return num1 + " " + num2;
    }
}

console.log("Adding number", add(12, 24));
console.log("Adding string", add('Hi', 'Hello'));
console.log("Adding string", add('15', '15'));

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role:[number, string];
} = {
    name: "andy",
    age: 45,
    hobbies: ['cooking', 'drawing'],
    role:[24, 'Admin'] // tuple type
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log("Hobbies", hobby);
}

for (const rol of person.role) {
    console.log("Role", rol);
}

enum EnumExp {ADMIN = 1, USER = 100, SOME = 1000}
console.log(EnumExp.ADMIN);

// any type is used like var in javascript. should be avoided

type comb = string | number;

const combObj: {
    demoFld: comb;
} = {
    demoFld: 23,
}

console.log("Type demo", combObj.demoFld);

type combObj2= {
    name: string;
    age: number;
};

function greet(combObj2 : combObj2): void {
    console.log("Type demo2 ",combObj2.name, combObj2.age);
};
greet({name: 'dan', age: 16});

const functionPointer : Function = add;
console.log("Function pointer",functionPointer(10, 22));

const functionPointer2 : (a: number | string, b: number | string) => number | string = add;
console.log("Function Pointer 2", functionPointer2('hi', 'hello'));

// the above can also be done in the method arguments

let userInput: unknown = 'Max';
let userValue: string;

if (typeof userInput === 'string') {
    userValue = userInput;
}
console.log("Unknown type",userValue);

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


const printConsole : (a: string | number) => void = output => console.log("From Arrow Function", output);
printConsole("6");

const add1 = (...num : number[]) => {
    return num.reduce((currResult : number, currValue : number) => {
        return currResult + currValue
    }, 0);
}

console.log("Spread operator arrow function", add1(2, 3, 4, 5, 6));

class Department {

    constructor(public readonly deptId: number, public deptName : string) {

    }
    // if you call this method this will refer to Department object
    deptWelcome(this : Department) {
        console.log(`Welcome to Depatment ${this.deptName}.`);
   }

}

const deptObj = new Department(12, "IT dept");
const deptObjCpy = {
    deptId: 34,
    deptName : 'Mech Dept', 
    deptWelcome: deptObj.deptWelcome
};
deptObjCpy.deptWelcome();

interface Interface1 {
    readonly name: string;
    greet(name: string) : void;
}

interface Interface2 extends Interface1 {
    deptName: string;
    address?: string;   // ? is optional so it can have
}

class InterfaceExp implements Interface2 {
 

    constructor(public deptName: string,  public name: string, public address?: string) {

    }
    greet(name: string): void {
        console.log(`Dept name>> ${this.deptName}`);
    }
    
}

//type addFn = (a: number, b: number) => number
interface addFn {
    (a: number, b: number): number;
}

let addFunc: addFn;

addFunc = (a: number, b: number) : number =>{ return a + b };
console.log("Function type with interfaces", addFunc(2, 3));

// Intersection types

type Admin = {
    name: string;
    privalage: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
    name: "Max",
    privalage: ["A1"],
    startDate: new Date()
};

console.log("Intersection types", e1);

const printTypeGuards = (a: Employee | Admin) => {

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
type truckOrVehicle = Truck | Vehicle;

function callVehicleDrive(a : Vehicle | Truck) {

    if (a instanceof Truck) {
        a.drive();
    } else {
        console.log("Not calling");
    }
};

const v1 = new Vehicle();
const v2 = new  Truck();

callVehicleDrive(v1);
callVehicleDrive(v2);

// Typecasting and telling compiler we know that it is not null by using !
//const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!;
// const userInputElement = document.querySelector('#user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi There';
const userInputElement = document.querySelector('#user-input')!;

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hello There";
}

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag : ErrorContainer = {
    email: "Not a Valid Email",
    userName: '12',
};
console.log("Telling typescript about property type and value type that object should have", errorBag);

// Overloaded
function addOverLoad(num1: string, num2: string) : string;
function addOverLoad(num1: number, num2: number) : number;
function addOverLoad(num1: number | string, num2: number | string) {  // union type

    if (typeof num1 === 'number' && typeof num2 === 'number' ) {
        return num1 + num2
    } else {
        return num1 + " " + num2;
    }
}

const nameOverload = addOverLoad("Max", "Payne");
console.log(nameOverload.split(" "));

// Optional Chaining
let fetchedUser = {
    name: "Max",
    id: "id",
    job: {title: "SomeTimtle"}
};

console.log(fetchedUser?.job?.title);
fetchedUser = undefined;
const storedUserName = fetchedUser ?? "DEFAULT ADDRESS";

console.log(storedUserName);

// Generics

/*function merge<T extends object, U extends object>(objA: T, objB : U) : T & U{
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Manu'}, {age: 29});
console.log("Generic Function 1", mergedObj);*/

interface lengthy {
    length: number;
}

function lengthCheck<T extends lengthy>(element: T) : void {
    console.log("Will not give Error if length property is there", element.length);
} 
console.log(lengthCheck<string[]>(['Anna', 'Nicole']));

const keyObj = {
    name: "Anna",
    age: 22
}

function objKeyCheck<U extends object, T extends keyof U>(obj : U, key : T) {
    console.log("T is key of U");
}

objKeyCheck(keyObj, 'name');

//objKeyCheck(keyObj, 'address');
// Similar usage in class

// Decorators

function Logger(constructor : Function) {
    console.log("Logging...", constructor);
}

@Logger
class Person {
    name: string = "Manu";

    constructor() {
        console.log("Constructor");
    }
}   

const personObj = new Person();
console.log("Person Object", personObj);

function WithTemplate(template: string, hookId : string) {
    return function(constructor: Function) {
        const element = document.querySelector(`#${hookId}`);

        if (element) {
            element.innerHTML = template;
        }
    };
}

function PropertDecorator(target: any, propertyName : string | Symbol) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}

function AccessorDecorator(target: any, name : string, descriptor: PropertyDescriptor) {
    console.log("AccessorDecorator Decorator");
    console.log(target, name, descriptor);
}

function functionDecorator(target: any, name : string, descriptor: PropertyDescriptor) {
    console.log("MethodDecorator Decorator");
    console.log(target, name, descriptor);
}

function ParamaeterDecorator(target: any, name : string | Symbol, position: number) {
    console.log("ParamaeterDecorator Decorator");
    console.log(target, name, position);
}
// Dedorator functions are executed in the reverse order. i.e bottom up
@Logger
@WithTemplate('<p>It works and Template gets printed</p>', 'outlet')
class Person1 {
    @PropertDecorator
    name: string = "Manu";

    constructor() {
        console.log("Constructor");
    }

    @AccessorDecorator
    set nameSetter(val : string) {
        this.name = val;
    }

    @functionDecorator
    greet(@ParamaeterDecorator addedString : string) {
        console.log(`${this.name} || ${addedString}`);
    }
} 

const person1Obj = new Person1();

function WithTemplateSome(template: string, hookId : string) {
    return function<T extends {new(...args : any[]) : {}}>(originalConstructor: T) {
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

@WithTemplateSome('<p>It works and Template when object is intantiated</p>', 'outlet1')
class Person2 {
    name: string = "Manu";

    constructor() {
        console.log("Constructor");
    }

    set nameSetter(val : string) {
        this.name = val;
    }

    greet(addedString : string) {
        console.log(`${this.name} || ${addedString}`);
    }
} 

const person2Obj = new Person2();
// Decorators in which you can return something is Method(returns PropertyDescriptor). Class and accessors(PropertyDescriptor)
