// Object Destructuring

// const personData = {

//     id: 1,
//     userFirstName: "Naveed",
//     userLastName: "Ahmed",
//     userContact: "03052065129",
//     userEmail: "naveedpstc@gmail.com",
//     userAge: 24,

// };

// console.log(personData)

// Before Object Destructuring

// console.log("The Student Name is " + personData.userFirstName + ` ` + personData.userLastName + " Having Email " + personData.userEmail)

// After Object Destructuring

// const { id, userFirstName, userLastName, userContact, userEmail, userAge } = personData;

// console.log("The Student Name is " + userFirstName + ` ` + userLastName + " Having Email " + userEmail)

// Destructuring Nested Objects

// const studentsData = {

//     std1: {

//         id: 1,
//         userFirstName: "Naveed",
//         userLastName: "Ahmed",
//         userContact: "03052065129",
//         userEmail: "naveedpstc@gmail.com",
//         userAge: 24,
//     },

//     std2: {

//         id: 2,
//         userFirstName: "Saad",
//         userLastName: "Mujahid",
//         userContact: "03112969169",
//         userEmail: "saad@gmail.com",
//         userAge: 25,
//     },

// };

// console.log(studentsData)

// const { std1, std2 } = studentsData;

// const { userFirstName, userLastName } = std1;

// console.log(userFirstName);