const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const in3 = document.querySelector("#in3");
const btn1 = document.querySelector("#btn1");
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");
const out3 = document.querySelector("#out3");

const clearOutput = () => {
  out1.innerHTML = "";
  out2.innerHTML = "";
  out3.innerHTML = "";
};

const handleClickEvent = () => {
  clearOutput();

  if (
    in1.value.length === 0 ||
    in2.value.length === 0 ||
    in3.value.length === 0
  ) {
    out1.innerHTML = "The Fields cannot be empty.";
    return;
  } else if (isNaN(in1.value) || isNaN(in2.value) || isNaN(in3.value)) {
    out1.innerHTML = "You should eneter a number.";
    return;
  }

  const people = Number(in1.value);
  const pizzas = Number(in2.value);
  const slicesPerPizza = Number(in3.value);
  let totalSlices = slicesPerPizza * pizzas;
  const slicePerPerson = Math.floor(totalSlices / people);

  const leftovers = totalSlices % people;

  out1.innerHTML = `${people} people with ${pizzas} pizzas.`;
  if (slicePerPerson === 1)
    out2.innerHTML = `Each person gets ${slicePerPerson} piece of pizza.`;
  else out2.innerHTML = `Each person gets ${slicePerPerson} pieces of pizza.`;

  if (leftovers === 1)
    out3.innerHTML = `There is only ${leftovers} leftover piece.`;
  else out3.innerHTML = `There are ${leftovers} leftover pieces.`;
};

btn1.addEventListener("click", handleClickEvent);
