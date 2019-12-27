interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} - ${person.lastName}`
}

let user = {
    firstName: 'firstName',
    lastName: 'lastName'
}

document.body.innerHTML = greeter(user)

export default greeter