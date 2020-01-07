// import { string } from "prop-types"
// import { ContextReplacementPlugin } from "webpack"

// interface Person {
//     firstName: string,
//     lastName: string
// }

// interface Options {
//     color?: string;
//     volume?: number
// }

// enum Color {
//     Red = 1,
//     Green,
//     Bule
// }

// let c: Color = Color.Green
// let cc: string = Color[2]
// console.log(c, cc, Color[0])

// function greeter(person: Person) {
//     return `Hello, ${person.firstName} - ${person.lastName}`
// }

// function foo() {
//     console.log(`a -- ${a}`)
// }

// foo()

// let a

// function test() {
//     console.log(bbb)
// }
// test()

// let bbb

// let user = {
//     firstName: 'firstName',
//     lastName: 'lastName'
// }

// let options: Options = {}
// options.color = 'red'
// options.volume = 11

// document.body.innerHTML = greeter(user)

// export default greeter


// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };

// let { a: newName1, b: newName2 }: { a: string, b: number } = o

// interface LabelledValue {
//     label: string;
//     size?: number;
//   }

//   function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label, labelledObj.size);
//   }

//   let myObj = {size: 10, label: "Size 10 Object"};
//   printLabel(myObj);

// interface ReadonlyStringArray {
//      [index: number]: string;
// }

// let myArray: ReadonlyStringArray = ['a', 'b']
// myArray[2] = 'test'

// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { return `function -- ${start}` }
//     counter.interval = 123;
//     counter.reset = function () { }

//     return counter
// }

// let test = getCounter()
// console.log(test(10), test.reset(), test.interval)

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message
//     }
//     greet() {
//         return `Hello, ${this.greeting}`
//     }
// }

// let greeter = new Greeter('test')

// console.log(greeter.greeting, greeter.greet(), greeter)


// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(props: string) { super(props); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(props: string) { super(props); }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());

// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) { }
// }
// let dad = new Octopus("Man with the 8 strong legs");

// console.log('dad', dad.name)

// const fullNameMaxLength = 10;

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (newName && newName.length > fullNameMaxLength) {
//             throw new Error("fullName has a max length of " + fullNameMaxLength);
//         }

//         this._fullName = newName;
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smithrgffgfgfgg";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// abstract class Department {

//     constructor(public name: string) {
//     }

//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }

//     abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }

//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }

//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }

// // let department: Department;
// let department: AccountingDepartment
// department = new AccountingDepartment()
// department.printName();
// department.printMeeting();
// department.generateReports()
