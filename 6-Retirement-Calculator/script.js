// Inputs and Outputs
const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const btn1 = document.getElementById("btn1");
const err = document.getElementById("err");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");

// Present Year
const today = new Date();
const currentYear = today.getFullYear();

// Error Message
// const errorMessage = (ele, message) => {
//   ele = message;
// };

const calulateRetirementYear = () => {
  err.innerHTML = "";
  out1.innerHTML = "";
  out2.innerHTML = "";
  if (in1.value.length === 0 || in2.value.length === 0) {
    err.innerHTML = "Please insert a value";
  } else {
    const currentAge = Number(in1.value);
    const retirementAge = Number(in2.value);
    if (
      isNaN(currentAge) ||
      isNaN(retirementAge) ||
      currentAge < 0 ||
      retirementAge < 0
    ) {
      err.innerHTML =
        "Please insert a number and number should be greater than 0";
    } else {
      const yearLeftForRetirement = retirementAge - currentAge;
      if (yearLeftForRetirement < 0) {
        // errorMessage(err.innerHTML, "You can already retire");
        out1.innerHTML = "You can already retire";
      } else {
        out1.innerHTML = `You have ${yearLeftForRetirement} years left until you can retire.`;
        out2.innerHTML = `It's ${currentYear}, so you can retire in ${
          currentYear + yearLeftForRetirement
        }.`;
      }
    }
  }
};

btn1.addEventListener("click", calulateRetirementYear);
