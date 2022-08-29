// const noun = prompt("Enter a noun: ");
// const verb = prompt("Enter a verb: ");
// const adjective = prompt("Enter a adjective: ");
// const adverb = prompt("Enter a adverb: ");
// const senetence = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
// alert(senetence);

const noun = document.getElementById("in1");
const verb = document.getElementById("in2");
const adjective = document.getElementById("in3");
const adverb = document.getElementById("in4");
const btn1 = document.getElementById("btn1");
const output = document.getElementById("out1");

const display = () => {
  const senetence = `Do you ${verb.value} your ${adjective.value} ${noun.value} ${adverb.value}? That's hilarious!`;
  output.innerHTML = senetence;
};

btn1.addEventListener("click", display);
