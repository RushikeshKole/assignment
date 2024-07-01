let user = {
    name: "Amit sarama",
    email: "amit123@gmail.com",
    age: 24
};

function changeName(newName) {
    user.name = newName;
}

function updateEmail(newEmail) {
    user.email = newEmail;
}

function calculateBirthYear(currentYear) {
    return currentYear - user.age;
}

console.log("Original user object:", user);

changeName("Amit Sarama");
console.log("After changing name:", user);

updateEmail("amu123@gamil.com");
console.log("After updating email:", user);

let birthYear = calculateBirthYear(2024);
console.log("User's birth year:", birthYear);
