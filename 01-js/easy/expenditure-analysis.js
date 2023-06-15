/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const TX = [
  { item: "apples", category: "eatables", price: 5 },
  { item: "tshirt", category: "clothing", price: 10 },
  { item: "earphones", category: "electronic", price: 25 },
  { item: "PS5", category: "electronic", price: 400 },
  { item: "eggs", category: "eatables", price: 10 },
  { item: "towels", category: "clothing", price: 15 },
];
function calculateTotalSpentByCategory(transactions) {
  let allCategories = [];
  let expenditureReport = [];

  transactions.forEach((element) => {
    if (!allCategories.includes(element.category)) {
      allCategories.push(element.category);
      expenditureReport.push({
        category: element.category,
        total: element.price,
      });
    } else {
      expenditureReport = expenditureReport.map((elm) => {
        if (elm.category === element.category) {
          return { category: elm.category, total: elm.total + element.price };
        } else return elm;
      });
    }
  });

  return expenditureReport;
}

module.exports = { calculateTotalSpentByCategory, TX };
