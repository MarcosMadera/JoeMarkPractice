// let btn = document.querySelector("#clickBtn");
// btn.addEventListener("click",listen)

import { addFive } from "./utils.js";

// function listen() {
//     console.log("clicked");
// }
class User {
  name;
  hobbies;
  constructor(name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
  }
  bio() {
    this.hobbies.forEach((hobby) => {
      const bio = `${this.name} likes ${hobby}`;
      console.log(bio);
    });
  }
}
const travis = new User("Travis", ["skiing", "hiking", "biking"]);
const mark = new User("Mark", ["coding", "reading", "swimming"]);
travis.bio();
mark.bio();
// const user = {
//     name: "Travis",
//     hobbies: ['skiing', 'hiking', 'biking'],
//     bio: function() {
//         this.hobbies.forEach((hobby) => {
//     const bio = `${this.name} likes ${hobby}`
//             console.log(bio)
//         });
//     }

// }
// user.bio()

// console.log(user.name)
// console.log(user.hobbies)

// function userInfo(user) {
//     user.hobbies.forEach((hobby) => {
// const phrase = `${user.name} likes ${hobby}`
// console.log(phrase);
//     })
// }
// userInfo(user)

// function calculateFunction(num1) {
//     return addFive(num1)
// }
// let total = calculateFunction(200)
// console.log(total)

// calculateFunction(200)

class Car {
  brand;

  constructor(brand) {
    this.brand = brand;
  }
  present() {
    return `This car is a ${this.brand}`;
  }
}
class Model extends Car {
  name;
  constructor(brand, name) {
    super(brand);
    this.name = name;
  }
  show() {
    return `${this.present()} and the model is: ${this.name}`;
  }
}
const myCar = new Model("Toyota", "Corolla");
console.log(myCar.show());
