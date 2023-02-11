function compareArrays(arr1, arr2) {
    let result1 = arr1.length === arr2.length && arr1.every((compareArrays) =>  [...arr1] === [...arr2]);
    return result1;
 }

function getUsersNamesInAgeRange(users, gender) {
    let result2 = users.filter(user => gender).map(user => people.age).reduce((acc, item) =>  item / acc.length , 0);

    return result2;
}