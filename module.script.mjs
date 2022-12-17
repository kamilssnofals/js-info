// let a;
// console.log(a);
// a = "kamil";
// console.log(a);

// const myName = 'kamil'
// console.log(myName)

// const objA = {
//   a: 10,
//   b: 20
// }

// const objB = objA
// objB.c = true
// objB.a = 15
// console.log(objB)

// function a() {
//   console.log('hello');
// }
// a()
// a = 10
// a() // error

// const a = () => {
//   console.log('hello');
// }
// a()

const myCity = {
  country: "USA",
  city: "New York",
  popular: true,
};

console.log(myCity);

myCity.city = "moscow";
myCity.people = true;
myCity.car = true;

console.log(myCity);

delete myCity.car;
console.log(myCity);

const myCity1 = {
  city: "New York",
  info: {
    isPopular: true,
    coutry: "USA",
  },
};
console.log(myCity1);
myCity1.info.new = true;
console.log(myCity1);
delete myCity1.info.isPopular;
console.log(myCity1);
myCity1.info.coutry1 = "UK";
console.log(myCity1);
delete myCity1.info["coutry1"];
console.log(myCity1);
myCity1.info.isPopular = false;
console.log(myCity1);

const name = "kamil";
const postsQty = 25;

const useProfile = {
  name,
  postsQty,
  agree: false,
};
console.log(useProfile);

const myCity2 = {
  city: "New York",
  cityGreeting() {
    console.log("citygreetigs");
  },
};
myCity2.cityGreeting();

const post = {
  title: "my name",
  age: 15,
};

post.age = 20;
post.color = "red";
post.isAdult = true;

console.log(post);

const person = {
  name: "bob",
  age: 25,
  info: {
    car: "red",
    pen: "blue ",
  },
};

const person2 = Object.assign({}, person);
person2.age = 15;
person2.info.car = "green";
console.log(person2);
console.log(person);

const person3 = JSON.parse(JSON.stringify(person));
person3.info.car = "green";
console.log(person3);
console.log(person);

//function

let a = 4;
let b = 6;

function sum() {
  const c = a + b;
  console.log(c);
}
sum(a, b);

a = 11;
b = 13;
sum(a, b);

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
console.log(myFn(10, 4));

// const personOne = {
//   name: 'ivan',
//   age: 150
// }

// function increasePersonAge(person) {
//   person.age +=1
//   return person
// }

// increasePersonAge(personOne)
// console.log(personOne);

const personeOne = {
  name: "ivan",
  age: 200,
};

function increasePersonAge(person) {
  const updatePersonAge = Object.assign({}, person);
  updatePersonAge.age += 1;
  return updatePersonAge;
}

const updatePersonOne = increasePersonAge(personeOne);
console.log(personeOne.age);
console.log(updatePersonOne.age);

function printMyName() {
  console.log("kamil");
}
setTimeout(printMyName, 3000);

const app = 17;

function globalScope() {
  function localScope() {
    console.log(app);
  }
  localScope();
}
globalScope();

const me = () => {
  a = true;
  return a;
};
console.log(me());

const aa = 5 !== "5";
console.log(aa);

const button = {
  width: 222,
  text: "buy",
  color: "black",
};

const redButton = {
  color: "red",
  ...button,
};

console.table(redButton);

const hello = "hello";
const wo = "world";

// const gg = `${hello} ${wo}`;
console.log(`${hello} ${wo}`);

setTimeout(function () {
  console.log("starttttt");
}, 1000);

const myFun = function (a, b) {
  let c;
  a++;
  c = b + a;
  return c;
};
// но лучше задавать имя функции через переменную
console.log(myFun(5, 6));

// console.log(setTimeout());

const multi = (value, multiplier) => {
  return value * multiplier;
};

console.log(multi(5, 5));
console.log(multi(100));

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });

// const firstPost = {
//   id: 1,
//   name: "kamil",
// };

// console.log(newPost(firstPost));
const date = Date();

const newPost = (post, addedAt) => ({
  ...post,
  addedAt,
  date,
});

const firstPost = {
  id: 1,
  name: "kamil",
};

console.log(newPost(firstPost));

const mmmm = () => {
  throw Error("sone error");
};

try {
  mmmm();
} catch (error) {
  console.log(error);
  console.log(error.message);
}

const myFff = (a) => {
  console.log(a);
};

const bb = true;
let c = 10;

myFff(23 + 3);
myFff(bb);
myFff((c = c + 1));

// const myArr = [1, 2, 3];
// function rr(myArr) {
//   const count = [];
//   for (i = myArr.length - 1; i >= 0; i--) {
//     count.push(myArr[i]);
//   }
//   return count;
// }
// console.log(rr(myArr));

// function r2(myArr) {
//   const counnt = [];
//   myArr.forEach((element) => {
//     counnt.unshift(element);
//   });
//   return counnt;
// }
// console.log(r2(myArr));

const arr2 = [1, 2, 3, 4];
arr2.forEach((el) => console.log(el * 2));
console.log(arr2);

const arr3 = [1, 2, 3, 4];
arr3.map((el) => console.log(el * 3));

const useProfile1 = {
  namee: "kamilll",
  age: 13,
  isPopular: true,
};

// const { namee, age } = useProfile1;
// const { isPopular } = useProfile1;
// console.log(namee);
// console.log(useProfile1.age);

const useProfile2 = ["apple", "cartofel"];
const [apple, cartofel] = useProfile2;
console.log(apple);
console.log(cartofel);

const userInfo = ({ namee, age }) => {
  if (!age) {
    return `User ${namee} has no coments`;
  }
  return `User ${namee} has ${age} coments`;
};

console.log(userInfo(useProfile1));

//инструкции if
let val = 10;

if (val > 11) {
  val += 20;
} else {
  val += 45;
}
console.log(val);

const person1 = {
  age: 27,
};

if (person1.name) {
  console.log("not has a name");
} else {
  console.log("has a name");
}

const k = 20;
const l = 10;

const sumPositivNumbers = (k, l) => {
  if (typeof k !== "number" || l !== "number") {
    return "is not a number";
  } else if (k <= 0 || l <= 0) {
    return "numbers are not positiv";
  } else if (k >= 10 || l >= 10) {
    return "all fine";
  }
  return k + l;
};
console.log(sumPositivNumbers());

//                   switch
const month = 12;
switch (month) {
  case 12:
    console.log("December");
    break;
  case 1:
    console.log("Junuary");
    break;
  case 2:
    console.log("Febriary");
    break;
  default:
    console.log("not winter month");
}

const value = 11;
const value2 = 0;
value && !value2 ? console.log("true") : console.log("false");

let value3 = 15;
console.log(value3 >= 0 ? value3 : -value3);

value3 = -5;
const res = value3 >= 0 ? value3 : -value3;
console.log(res);

const arr4 = ["first", "second", "third"];

// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
// }

arr4.forEach((el, index) => {
  console.log(el, index);
});

let o = 11;
// while (o <= 5) {
//   console.log(o);
//   o++;
// }

// do {
//   console.log(o);
//   o++;
// } while (o < 5);

const myObj = {
  x: 10,
  y: true,
  z: "abc",
};

Object.values(myObj).forEach((values) => {
  console.log(values);
});

const arr5 = [true, "abc", 10, null];
let myObjj = {
  x: 10,
  y: "aaa",
  z: true,
};

// for (const prop of myObjj) {
//   console.log(prop);
// }

// for (const el of arr5) {
//   console.log(el);
// }

// function ccc(arr5) {
//   const sum = [];
//   arr5.forEach((el) => {
//     sum.unshift(el);
//   });
//   return sum;
// }
// console.log(ccc(arr5));

// for (let i = 0; i < arr5.length; i++) {
//   arr5[i] *= 2;
// }

// const maps = arr5.map((el) => el * 5);
// console.log(maps);
// const arrt = [1, 2, 3, 4, 5];
//  console.log(arrt.reverse());

// const kk = (arrt) => {
//   const count = [];
//   arrt.forEach((el) => {
//     count.unshift(el);
//   });
//   return count;
// };
// console.log(kk(arrt));

const dd = (a, b) => a * b;
console.log(dd(6, 71));

const one = 1;
const two = "two";

const mult = (a, b) => a * b;

export { mult as milt };
export { one, two };

class Comment {
  constructor(text) {
    this.text = text;
    this.votes = 0;
  }
  upvote() {
    this.votes += 1;
  }
  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}
Comment.mergeComments("first comment.", "second comment");
const firstComment = new Comment("First comment");
firstComment.upvote();
console.log(firstComment.votes);
firstComment.upvote();
console.log(firstComment.votes);
// firstComment instanceof Comment;
// firstComment instanceof Object;
console.log(firstComment);

class myNumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}
const myArray = new myNumbersArray(2, 5, 7);
console.log(myArray);
myArray.sum();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => console.log(json));
