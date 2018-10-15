function greeter(person: string) :string {
    return "hello," + person;
}

let user = "孙悟空"
document.body.innerHTML = greeter(user);
