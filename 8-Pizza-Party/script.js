const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const in3 = document.querySelector("#in3");
const btn1 = document.querySelector("#btn1");
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");
const out3 = document.querySelector("#out3");

const handleClickEvent = () => {
  const people = Number(in1.value);
  const pizzas = Number(in2.value);
  const slicesPerPizza = Number(in3.value);
  let totalSlices = slicesPerPizza * pizzas;
  const slicePerPerson = Math.floor(totalSlices / people);
  const leftovers = totalSlices % people;

  out1.innerHTML = `${people} people with ${pizzas} pizzas.`;
  out2.innerHTML = `Each person gets ${slicePerPerson} pieces of pizza.`;
  out3.innerHTML = `There are ${leftovers} leftover pieces.`;
};

btn1.addEventListener("click", handleClickEvent);
