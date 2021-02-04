const person ={name:"Emma Watson", age : 20, living : "USA", fbId : "Angel Emma", job : "Acting", phone: "2552525",friends:["Tom cruise","Harry Porter", "Joker", "Jack Sparrow"]};
console.log(person.job);
console.log(person.name);
console.log(person.living);
console.log(person.phone);

const{name,phone,living,job,age,friends,fbId} = person;
console.log(living,phone,age,friends);