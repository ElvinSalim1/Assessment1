//Task 1.1
let a = 30; //number
let b = "my"; //string
let c = true; //boolean
let d = undefined; // undefined
let e = null; //null

//Task 1.2
//truthy  och falsy är värden som en boolean kan ha, boolean kan vara antingen truthy eller falsy värden.
//om värden är true, då värderas till det booleska värdet av sant,
// och falska värden värderas till det booleska värdet av falskt
//falsy values är false, NaN, undefined, null och tom sträng "" 

//Task 1.3
//För att return words[2] returnerar tredje värden i string, javascript börjar räkna från 0,
//för att hämta ut andra värden byter vi [2] med [1]
function getSecondWord(stringOfWords) {
    var words = stringOfWords.split(' ');
return words[2];
}
getSecondWord('hello my good friend');


//Task 1.4
//prompt har string value och i resultatet returnerar den summan som string, för att den
//returnerar som number sätter vi number på a och b i resultatet.
function addNumbers() {
  var a = prompt("First number");
  var b = prompt("Second number");
  var result = Number(a) + Number(b);
  console.log(result);
}

//Task 1.5
function favoriteWord() {
  let word = prompt("What is your favorite word?");
  let repeat = prompt("How many times do you want me to repeat it?");
  let result = "";
  for (let i = 0; i < repeat; i++) {
    result += word;
    if (i != repeat - 1) {
      result += ", ";
    }
  }
  result += "!";
  alert(result);
}
favoriteWord();

//Task 1.6
function printRange(n, m) {
    for (let i = 0; i < m - n + 1; i++) {
        for (let j = n; j <= m; j++) {
        console.log(j);
        }
    }
}

printRange(1,3)

//Task 1.7
function extendString(str) {
  let length = str.length;
  if (length < 5) return str;
  else if (length >= 5 && length < 10) return str + "!!!!";
  else return str + "????";
}
console.log(extendString('hi'))

//Task 1.8
//Create a function padString(str, pad, len) that returns the input string 
//str padded len times with the padding pad.
function padString(str, pad, len) {
  for (let i = 0; i < len; i++) {
    str = pad + str;
  }
  return str;
}
console.log(padString('Pants are overrated', '', 100))



//Task 1.9
// == accepterar båda värden som true värden, även om dem inte har samma typ.
// === är strikt likamed tecken, den acceptaras värden som true om bägge värden har samma typ och värden.



const families = [
  {
    father: "John",
    mother: "Mary",
    children: ["Frank"],
  },
  {
    father: "Mark",
    mother: "Linda",
    children: ["Billy", "Nina"],
  },
  {
    father: "Chris",
    mother: "Lisa",
    children: ["Dolly", "Richard", "Eva"],
  },
];


let children_array = families.map((f) => f.children);
let result = [];
children_array.forEach((c) => (result = [...result, ...c]));
console.log(result);

let has2morefamly = families.filter((f) => f.children.length > 2);
has2morefamly.forEach((f) => {
  let names = f.children.map((c) => c.toUpperCase());
  console.log(names);
});

//Task 2.2
const Counter = (min, max) => {
  return {
    value: min,
    getValue() {
      return this.value;
    },
    increment() {
      if (this.value + 1 > max) return;
      this.value++;
    },
    decrement() {
      if (this.value - 1 < min) return;
      this.value--;
    },
  };
};


//Task 2.3
var house = {
  address: "7 Mulholland Dr.",
  zipCode: "90210 Beverly Hills",
  size: "23945 sqft.",
  price: "23 million $",
};

function getProperties(o) {
  let result = [];
  for (const [key] of Object.entries(o)) result.push(key);
  return result;
}

console.log(getProperties(house));
//Task 2.4
function getPropertyPairs(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
var obj = {
    a: 10,
    b: 20,
    c: 30
  }
console.log(getPropertyPairs(obj));

//Task 2.5
//för att hämta key värden som person innehåller, behöver returnera this i varje key värden.
var person = {
    name: "Rick",
    occupation: "crazy scientist",
    hobby: "make a mess",
    getLifeStory: function () {
      return this.name + " is a " + this.occupation + " and likes to " + this.hobby;
    }
  };
  
  let story = person.getLifeStory();
  console.log(story);