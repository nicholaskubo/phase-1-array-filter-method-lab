let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, name) {
    return array.filter(n => {
        return name.toLowerCase() == n.toLowerCase();
    })
}


console.log(findMatching(drivers, `Bobby`))



const fuzzyMatch = (array, name) => {
    const firstTwo = drivers.split()
    const newResult = array.filter(word => {
        word = name
    })
    console.log(fuzzyMatch);
}

console.log(fuzzyMatch(drivers, `Sa`));