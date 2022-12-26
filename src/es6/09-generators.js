function* iterate(arry){
    for (let value of arry){
        yield value
    }
}
const it = iterate(['Oscar', 'Davi','Ana', 'Fernanda', 'Jenny'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
