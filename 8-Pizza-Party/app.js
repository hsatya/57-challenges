const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const btn1 = document.querySelector("#btn1");
const out1 = document.querySelector("#out1");

const slicePerPizza = 8;

const clearOutput = () => {
  out1.innerHTML = "";
};

const handleClickEvent = () => {
  clearOutput();
  const people = Number(in1.value);
  const pizzaSlices = Number(in2.value);
  const pizzas = Math.ceil((people / slicePerPizza) * pizzaSlices);
  out1.innerHTML = `Total pizzas need to be ordered are ${pizzas}.`;
};

btn1.addEventListener("click", handleClickEvent);
