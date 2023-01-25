function compareArrays(arr1, arr2) {
    for (let i = 0; i<arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            console.log(compareArray.every(compareArray => arr1[i] === arr2[j]));
        }
    }
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(people => gender === "женский").reduce((acc, item)=> (acc + item) / people.age.length , 0);
}