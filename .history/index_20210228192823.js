


function findMatching (array, name) {
    return array.filter(n => {
        return name == n;
    })
}


console.log(findMatching(drivers, `Bobby`))