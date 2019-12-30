interface Person {
    firstName: string,
    lastName: string
}

interface Options {
    color?: string;
    volume?: number
}

enum Color {
    Red = 1,
    Green,
    Bule
}

let c: Color = Color.Green
let cc: string = Color[2]
console.log(c, cc, Color[0])

function greeter(person: Person) {
    return `Hello, ${person.firstName} - ${person.lastName}`
}

function foo() {
    console.log(`a -- ${a}`)
}

foo()

let a

function test() {
    console.log(bbb)
}
test()

let bbb

let user = {
    firstName: 'firstName',
    lastName: 'lastName'
}

let options: Options = {}
options.color = 'red'
options.volume = 11

document.body.innerHTML = greeter(user)

export default greeter