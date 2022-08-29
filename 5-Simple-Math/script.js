const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const btn1 = document.getElementById("btn1");
const err = document.getElementById("err");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
const out4 = document.getElementById("out4");

const errorMessage = (ele, message) => {
  ele = message;
};

const calNDisplay = () => {
  if (in1.value.length === 0 || in2.value.length === 0) {
    errorMessage(err.innerHTML, "Please insert a value");
  } else {
    const val1 = Number(in1.value);
    const val2 = Number(in2.value);
    if (isNaN(val1) || isNaN(val2) || val1 < 0 || val2 < 0) {
      errorMessage(
        err.innerHTML,
        "Please insert a number and number should be greater than 0"
      );
    } else {
      const add = val1 + val2;
      const sub = val1 - val2;
      const mul = val1 * val2;
      const div = val1 / val2;

      out1.innerHTML = `${val1} + ${val2} = ${add}`;
      out2.innerHTML = `${val1} - ${val2} = ${sub}`;
      out3.innerHTML = `${val1} * ${val2} = ${mul}`;
      out4.innerHTML = `${val1} / ${val2} = ${div}`;
    }
  }
};

btn1.addEventListener("click", calNDisplay);
