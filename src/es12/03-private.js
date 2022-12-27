class user {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    //metodos
    speak() {
        return 'Hello'
    }

    greeting() {
        return `${this.speak()} ${this._name} su edad es ${this._age}`
    }

    get uAge() {
        return this._age
    }

    set uAge(age) {
        this._age = age
    }
}

const developer = new user('DAVIS', 15)
console.log(developer._age);
console.log(developer._age = 20);
console.log(developer.speak());