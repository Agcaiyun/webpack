interface Person {
    firstName: string,
    lastName: string
}

interface Options {
    color?: string;
    volume?: number
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} - ${person.lastName}`
}

let user = {
    firstName: 'firstName',
    lastName: 'lastName'
}

let options: Options = {}
options.color = 'red'
options.volume = 11

document.body.innerHTML = greeter(user)

export default greeter