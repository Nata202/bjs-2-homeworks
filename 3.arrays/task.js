function compareArrays(arr1, arr2) {
    arr1.every((arr) => arr1.length === arr2.length && arr1[0, 1, 2] === arr2[0, 1, 2])
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(people => people.gender === "женский").map(people => people.age).reduce((acc, item) =>  item / users.length , 0);

    return result;
}