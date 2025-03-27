const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const nameAndIsJedi = starWarsHeroes.map(el => ({name:el.name, isJedi: el.isJedi}))
console.log(nameAndIsJedi)

const ages = starWarsHeroes.filter(el => (el.age <40))
console.log(ages)

const allJediAges = starWarsHeroes.map(el => el.age)
const sumOfAges = allJediAges.reduce((acc, current) =>acc + current, 0)
console.log(sumOfAges)

const sumOfAgesPlusTen = allJediAges.reduce((acc, current) =>acc + current, 10)
console.log(sumOfAgesPlusTen)

const starWarsHeroesWithoutAnakin = starWarsHeroes.slice(1)
console.log (starWarsHeroesWithoutAnakin)

const starWarsHeroesWithVader = [...starWarsHeroesWithoutAnakin]
starWarsHeroesWithVader.unshift ({name: "Darth Vader", isJedi: false, age: 50 })
console.log(starWarsHeroesWithVader)














