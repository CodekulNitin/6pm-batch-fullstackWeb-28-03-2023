// const price =[1800,2000,3000,5000,500,8000]
// // Map.sqrt
// let newPrice  = price.map(Math.sqrt)
// console.log("newPrice",newPrice);

// custom arrow function

// const string = "javascript"
// const stringArr = string.split("")  // array with individual string character

// let asciiArr = stringArr.map(x=>x.charCodeAt(0))

// console.log("stringArr",stringArr);
// console.log("asciiArr",asciiArr);

const employeesList = [
  {
    id: 1,
    name: "Adam",
    salary: 10000,
    bonus: 500,
    tax: 1000,
  },
  {
    id: 2,
    name: "ayush",
    salary: 25000,
    bonus: 500,
    tax: 1000,
  },
  {
    id: 3,
    name: "rina",
    salary: 15000,
    bonus: 500,
    tax: 1000,
  },
  {
    id: 4,
    name: "john",
    salary: 18000,
    bonus: 1000,
    tax: 1000,
  },
];

// calculate the net amt to be give to the employees

// https://www.freecodecamp.org/news/reduce-f47a7da511a9/
// https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/

const calculateAmt = (obj) => {
  newObj = {};
  newObj.name = obj.name;
  newObj.netEarning = obj.salary;
  return newObj;
};

let newArr = employeesList.map(calculateAmt);

console.log(newArr[1]);
console.log("3");
