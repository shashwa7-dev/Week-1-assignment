const { isAnagram } = require("./01-js/easy/anagram");
const {
  calculateTotalSpentByCategory,
  TX,
} = require("./01-js/easy/expenditure-analysis");
const { calculateTime } = require("./01-js/medium/times");
const { isPalindrome } = require("./01-js/medium/palindrome");
const { Calculator } = require("./01-js/hard/calculator");
const { Todo } = require("./01-js/hard/todo-list");
//01-js

//EASY
//1 -- ANAGRAMA
console.log("is Anangram", isAnagram("neat", "a et"));
//2 - expenditure-analysis
console.log("expenditute analysis:", calculateTotalSpentByCategory(TX));

//Medium
//1 -- Palindrome
console.log("Is Palindrome", isPalindrome("Shashwat"));
console.log("Is Palindrome", isPalindrome("taco CAt"));
//2 -- times
console.log("Time take Sum(1-100)", calculateTime(100));
console.log("Time take Sum(1-100)", calculateTime(100000));
console.log("Time take Sum(1-100)", calculateTime(1000000000));

//HARD
//1 - Calculator
const calculator = new Calculator(1);
calculator.add(5);
console.log(calculator.getResult()); // Output: 6
calculator.calculate("10 + 2 *      (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24+6
calculator.clear();
// console.log(calculator.calculate("5 + abc"));
// console.log(calculator.getResult()); // Output: 24

//2- Todos
const todo = new Todo();
console.log(todo.getAll());
todo.add({ id: todo.getAll().length + 1, task: "do brush", time: "morning" });
todo.add({ id: todo.getAll().length + 1, task: "do workout", time: "morning" });
console.log(todo.getAll());
todo.remove(1);
console.log(todo.getAll());
todo.update(2, {
  id: 2,
  task: "drink coffee",
  time: "morning",
});
console.log(todo.getAll());
console.log(todo.getTodo(2));
console.log(todo.getTodo(1));
todo.clear();
console.log(todo.getAll());
