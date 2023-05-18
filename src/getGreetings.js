const date = new Date();

// Greetings for dad
const dadGreetings = [
  "Hi daddy! ❤️",
  "Daddy! Hope work isn't too hard! 🥺",
  "Hey dad! ❤️",
  "Hi daddy! Did you remember to eat today? 🥺",
  "Daddy! teach me to code?? 😁",
];

// Greetings for mom
const momGreetings = [
  "Hi mommy! ❤️",
  "Mommy! ❤️ ilu so much!",
  "Hello mommy! Hope you're doing well ❤️",
  "Hi mommy! Remember to smile today! 😊",
  "Mommy! I hope you're having a wonderful day 🥰",
];

// Add special greeting for daddy and mommy birthdays
if (date.getMonth() + 1 === 5 && date.getDay() === 6) {
  dadGreetings.push("Happy birthday daddy! 🎉🥰");
}
if (date.getMonth() + 1 === 5 && date.getDay() === 18) {
  momGreetings.push("Happy birthday mommy! 🎉🥰");
}

// Returns a random greeting for dad
function getDadGreeting() {
  return dadGreetings[Math.floor(Math.random() * dadGreetings.length)];
}

// Returns a random greeting for mom
function getMomGreeting() {
  return momGreetings[Math.floor(Math.random() * momGreetings.length)];
}

// Export both functions to be used in index.js
module.exports = { getDadGreeting, getMomGreeting };
