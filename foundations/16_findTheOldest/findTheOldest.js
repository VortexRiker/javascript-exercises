function getAge(person)
{
    let lastYear = person.yearOfDeath;
    if(!lastYear)
    {
        lastYear = (new Date()).getFullYear();
    }

    return lastYear - person.yearOfBirth;
}

const findTheOldest = function(people) 
{
    people.sort((lhs, rhs) => getAge(lhs) - getAge(rhs));

    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
