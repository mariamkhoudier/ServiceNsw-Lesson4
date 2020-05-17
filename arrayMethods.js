let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];
// 1- Use the Array.filter function to create an array of all the pets owned by Luke.
let result = pets.filter((pet) => {
    if (pet.ownerName == "Luke") {
        return true;
    } else
        return false;
});

console.log(result);

//2- Use the Array.map function to create an array of all the names of the owners.

result = pets.map((pet) => {
    return pet.ownerName;
});

console.log(result);

//3- Use the Array.find function to retrieve the pet owned by Shaggy

result = pets.find((pet) => {
    if (pet.ownerName == "Shaggy") {
        return true;
    } else {
        return false;
    }
});

console.log(result);

// 5- Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"
result = pets.filter((pet) => {
    if (pet.age < 5 && (pet.name[0] == "S" || pet.ownerName[0] == "S"))

        return true;


});

console.log(result);
