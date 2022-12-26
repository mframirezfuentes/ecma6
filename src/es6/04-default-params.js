function newUser(name, age, country) {

    var name = name || 'Fernanda';
    var age = age || 33;
    var country = country || 'Chile'

    console.log(name, age, country);
}

newUser()
newUser('Lorena', 27, 'Colombia')

function newAdmin(name = 'Natalia', age = 17, country = 'CO') {

    console.log(name, age,country );
}
newAdmin()
newAdmin('daniela', 18,'AR')