// 1- Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false

function measurs(floor, ceiling, num) {
    if (num > floor && num < ceiling) {
        return true;
    } else {
        return false;
    }

}

let result = measurs(3, 10, 20);
console.log("Num is:" + result);
let result1 = measurs(3, 20, 10);
console.log("Num is: " + result1);

// 2- Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false.

let person = {
    name: "xman",
    age: 29
};
let person2 = {
    name: "malcolmx",
    age: 35
}



function thePersonAge(person) {
    if (person.age > 30) {
        return true;
    } else {
        for (let i = 0; i < person.name.length; i++) {
            if (person.name[i].toLowerCase() == "x") {
                return true;
            } else {
                return false;
            }
        }
    }
}

let x = thePersonAge(person);
console.log("OR Example person1 is " + x)
let x1 = thePersonAge(person2);
console.log("Or Example person2 is  " + x1)

// 3- Create a function that takes 3 parameters. The first should be an object with two properties name and age. The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter and the name is not equal to the third parameter. Otherwise return false.
person = {
    name: "mariam",
    age: 28
}
function myFunction(person, num, string) {
    if (person.age == num && person.name != string) {
        return true;
    } else {
        return false;
    }
}



result = myFunction(person, 10, "phone");
console.log(result);

