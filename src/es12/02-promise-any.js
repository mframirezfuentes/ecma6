const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve 1'))
const promise3 = new Promise((resolve, reject) => resolve('resolve 2'))

const promises =[promise1, promise2, promise3]
Promise.any(promises)
.then(response=>console.log(response))
