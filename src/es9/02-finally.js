const promise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!!');
        }else{
            reject('ooops');
        }
    })
}

promise().
then(response=>console.log(response))
.catch(err=>console.log(err))
.finally(()=>console.log('Finally end'))