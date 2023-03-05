function compareArrays(arr1, arr2) {
    let result1 = arr1.length === arr2.length && arr1.every((item, index) =>  item === arr2[index]);
    return result1;
 }

function getUsersNamesInAgeRange(users, gender) {
    let result2 = users.filter(user => user.gender === gender).map(user => user.age).reduce((average, userAge, index, array) =>  average + userAge / array.length, 0);

    return result2;
}