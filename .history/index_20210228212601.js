const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, name) {
    return array.filter(n => {
        return name.toLowerCase() == n.toLowerCase();
    })
}


console.log(findMatching(drivers, `Bobby`))

const fuzzyMatch = (array, name) => {
    return name.firstWord == name
}

console.log(fuzzyMatch(drivers, `Bobby`));