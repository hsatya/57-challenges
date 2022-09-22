const in1 = document.querySelector(".in1");
const in2 = document.querySelector(".in2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const out1 = document.querySelector(".out1");
const out2 = document.querySelector(".out2");
const out3 = document.querySelector(".out3");
const out4 = document.querySelector(".out4");

const option = document.querySelector("#ft-mt");

const CNF = 0.09290304;

const calculateArea = (length, width) => length * width;

const convertToMeter = (areaInSqFeet) => areaInSqFeet * CNF;

const convertToFeet = (areaInSqMeter) => areaInSqMeter / CNF;

const clearOutput = () => {
  out1.innerHTML = "";
  out2.innerHTML = "";
  out3.innerHTML = "";
  out4.innerHTML = "";
};

const clearInput = () => {
  in1.value = "";
  in2.value = "";
  clearOutput();
};

const getInputValues = () => {
  clearOutput();

  if (
    isNaN(in1.value) ||
    isNaN(in2.value) ||
    in1.value.length < 1 ||
    in2.value.length < 1
  ) {
    out1.innerHTML = "Please enter a number";
    return;
  }

  const length = Number(in1.value);
  const width = Number(in2.value);
  const fm = option.value;

  if (length <= 0 || width <= 0) {
    out1.innerHTML = "Please enter a number greater than zero.";
    return;
  }

  const message = `You entered dimensions of ${length} ${fm} by ${width} ${fm}.`;

  const area = calculateArea(length, width);

  if (fm === "feet") {
    const areaInSqMtr = convertToMeter(area);
    out1.innerHTML = message;
    out2.innerHTML = "The area is";
    out3.innerHTML = `${area} square feet`;
    out4.innerHTML = `${areaInSqMtr} square meters`;
  } else {
    const areaInSqFeet = convertToFeet(area);
    out1.innerHTML = message;
    out2.innerHTML = "The area is";
    out4.innerHTML = `${area} square meters`;
    out3.innerHTML = `${areaInSqFeet} square feet`;
  }
};

btn1.addEventListener("click", getInputValues);
btn2.addEventListener("click", clearInput);
