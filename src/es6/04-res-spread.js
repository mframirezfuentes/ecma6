//arrays destructurings

let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = { username: 'Fernanda', age: 33 };
let { username, age } = user;
console.log(username, age);


//spread operator

let person = { name: 'Fernanda', age: 17 }
let country = 'CL '

let data = { ...person, country }
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return + values[0]
}

sum(1, 1, 2, 3)

function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}, json2 = {
    age: 12,
    color: "Blanco"
}) {
    let data = { ...json1, ...json2 }
    console.log()
    return data



}
solution()