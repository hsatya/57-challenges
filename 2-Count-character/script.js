// const sentense = prompt("Enter the senetence!");
// alert(`The word count is: ${sentense.length}`);

const input = document.getElementById("in1");
const button = document.getElementById("btn1");
const output = document.getElementById("out1");
const out = document.getElementById("out2");

function totalCount() {
  const count = input.value;
  if (count.length === 0) {
    output.innerHTML = "You must enter something.";
  } else {
    output.innerHTML = `${count} has ${count.length} characters.`;
    input.value = "";
  }
}

let st = "";
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const count = input.value;
    output.innerHTML = `The length of the senetence is ${count.length}`;
    input.value = "";
    st = "";
  } else {
    st += e.key;
    out.innerHTML = `Number of characters count: ${st.length}`;
  }
});

button.addEventListener("click", totalCount);
