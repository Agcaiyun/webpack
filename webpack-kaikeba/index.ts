import { string } from "prop-types"
import { ContextReplacementPlugin } from "webpack"

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

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { return `function -- ${start}` }
    counter.interval = 123;
    counter.reset = function () { }

    return counter
}

let test = getCounter()
console.log(test(10), test.reset(), test.interval)