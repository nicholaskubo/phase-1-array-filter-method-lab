let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, name) {
    return array.filter(n => {
        return name.toLowerCase() == n.toLowerCase();
    })
}


console.log(findMatching(drivers, `Bobby`))



const fuzzyMatch = (array, name) => {
    let newArr = []
    console.log(array.filter(firstTwo(word))) {
        return word[0] == `Sa`
    }
}

console.log(fuzzyMatch(drivers, `Sa`));