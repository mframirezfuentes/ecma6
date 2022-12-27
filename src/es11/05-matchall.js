const regex = /\b(Apple)+\b/g

const fruit = 'Aple, Bannana, Kiwi, Apple, Organge'
for (const match of fruit.matchAll(regex)) {
    console.log(match);
}