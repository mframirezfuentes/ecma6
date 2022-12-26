async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const another = anotherGenerator();
another.next().then(response=>console.log(response.value))
another.next().then(response=>console.log(response.value))
another.next().then(response=>console.log(response.value))
console.log('Hello');

async function arraysOfNames(array){
 for await (let value of array){
    console.log(value);
 }
}

const names = arraysOfNames(['daniela','fernanda','Rocio']);
console.log('after');