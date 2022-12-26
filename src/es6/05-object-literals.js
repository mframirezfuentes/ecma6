//enached object Literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id:uId
    }
}

console.log(newUser('Gernanda',17,'CL',1));