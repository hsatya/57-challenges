// const quote = prompt("What is the quote? ");
// const quoter = prompt("Who said it? ");
// alert(`${quoter} says: "${quote}."`);
// alert(quoter + " says, " + '"' + quote + '."');

const quotes = new Map();

quotes.set("Tony Stark", "No amount of money ever bought a second of time");
quotes.set("Thanos", "The hardest choices require the strongest wills");

const quotesArray = [
  ["Tony Stark", "No amount of money ever bought a second of time"],
  ["Thanos", "The hardest choices require the strongest wills"],
  [
    "Black Panthe",
    "Today we don’t fight for one life, we fight for all of them",
  ],
];

const quote = document.getElementById("in1");
const quoter = document.getElementById("in2");

const button = document.getElementById("btn1");
const output = document.getElementById("out1");

function printQuote() {
  output.innerHTML = quoter.value + " says, " + '"' + quote.value + '."';
}

button.addEventListener("click", printQuote);

// console.log(quotes);
// for (let [key, value] of quotes) {
//   const message = key + " says, " + '"' + value + '."';
//   const ele = document.createElement("p");
//   ele.innerText = message;
//   document.body.appendChild(ele);
// }

for (let i = 0; i < quotesArray.length; ++i) {
  const message =
    quotesArray[i][0] + " says, " + '"' + quotesArray[i][1] + '."';
  const ele = document.createElement("p");
  ele.innerText = message;
  document.body.appendChild(ele);
}
