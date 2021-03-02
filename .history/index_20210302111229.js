let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, name) {
    return array.filter(n => {
        return name.toLowerCase() == n.toLowerCase();
    })
}


console.log(findMatching(drivers, `Bobby`))



function fuzzyMatch (array, name) {
    return array.filter (nameMatch => {
        return nameMatch.toLowerCase().indexOf(name.toLowerCase()) == 0
        })
}

console.log(fuzzyMatch(drivers, `Sa`));



const driversArray = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, name) {
    return array.filter (nameMatch => nameMatch.name === name)
}

console.log(matchName(driversArray, `Bobby`))