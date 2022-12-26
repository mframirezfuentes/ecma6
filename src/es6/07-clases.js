//Declarando la Clase
class User {
}

//Instancia de una clase
const newUser = new User()

class user {
    //metodos
    greeting() {
        return "Hola!"
    }
}

const gndx = new user()
console.log(gndx.greeting());

class user {
    //constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return "Hola!"
    }

}

const usuario = new user()


//this --> hace referencia al elemento padre de las clases

class user {
    constructor(name) {
        this.name = name
    }

    //metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const fernanda = new user('Fernanda')
console.log(fernanda.greeting())


//getters and setters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    speak(){
        return 'Hello'
    }

    greeting(){
        return `${this.speak()} ${this.name} su edad es ${this.age}`
    }

    get uAge(){
       return this.age
    }

    set uAge(age){
        this.age =age
    }
}

const developer = new user('DAVIS', 15)
console.log(developer.uAge);
console.log(developer.uAge =20);