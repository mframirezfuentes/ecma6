const user = {
    username: 'Fernanda',
    age: 33,
    country: 'CL'
}
const { username, ...values } = user;

console.log(username);
console.log(values);