// Given the two arrays below, write a function that takes the two arrays as parameters and outputs an array of pets with ownerName as a property instead of the ownerId property.

let pets = [
    {
      name: "Rex",
      age: 4,
      ownerId: 42
    },{
      name: "Spot",
      age: 7,
      ownerId: 132
    },{
      name: "Scooby",
      age: 3,
      ownerId: 546
    },{
      name: "Lucky",
      age: 1,
      ownerId: 42
    }
  ];
  let people = [
    {
      name: "Luke",
      id: 42
    },{
      name: "Shaggy",
      id: 546
    },{
      name: "Jade",
      id: 132
    }
  ];

 

  function peopleFinder(pets,people){
      var petsWithOwnerNames= pets.map((pet)=>{
        function findPersonById(person){
            if( person.id==pet.ownerId) {
                return true
            }else {
                return false;
            }
         };
        let ownerName=people.find(findPersonById).name;
          return {
              name:pet.name,
              age:pet.age,
              ownerName:ownerName
          }
      });
      return petsWithOwnerNames;

  } 

  let result=peopleFinder(pets,people);
  console.log(result
    );
  