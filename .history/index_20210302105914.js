let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, name) {
    return array.filter(n => {
        return name.toLowerCase() == n.toLowerCase();
    })
}


console.log(findMatching(drivers, `Bobby`))



function fuzzyMatch (array, name) {
    return array.filter (nameMatch =>
        nameMatch.toLowerCase().indexOf(name.toLowerCase()) == 0
        )
}

console.log(fuzzyMatch(drivers, `Sa`));