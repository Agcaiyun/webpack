function greeter(person: string) {
    return `Hello, ${person}`
}

let user = 'agcaiyun'

document.body.innerHTML = greeter(user)

export default greeter