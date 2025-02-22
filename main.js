// let btn = document.querySelector("#clickBtn");
// btn.addEventListener("click",listen)

// function listen() {
//     console.log("clicked");
    
// }//    `${user.name} likes ${user.hobbies[0]}, ${user.hobbies[1]}, ${user.hobbies[2]}`; 

const user = {
    name: "Travis",
    hobbies: ['skiing', 'hiking', 'biking'],
    bio: function() {
        this.hobbies.forEach((hobby) => {
    const bio = `${this.name} likes ${hobby}`
            console.log(bio)
        });
    }
    
}
user.bio()

// console.log(user.name)
// console.log(user.hobbies)

// function userInfo(user) {
//     user.hobbies.forEach((hobby) => {
// const phrase = `${user.name} likes ${hobby}`
// console.log(phrase);  
//     })
// }
// userInfo(user)   

