const inp1 = document.getElementById("inp1");
const out1 = document.getElementById("out1");
const btn1 = document.getElementById("btn1");

function greetings() {
  const firstname = inp1.value;
  out1.innerHTML = `Hello ${firstname}, nice to meet you!`;
}

inp1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const firstname = inp1.value;
    out1.innerHTML = `Hello ${firstname}, nice to meet you!`;
    // const np = document.createElement("p");
    // const txtnp = document.createTextNode(
    //   `Hello ${firstname}, nice to meet you!`
    // );
    // np.appendChild(txtnp);
  }
});

btn1.addEventListener("click", greetings);
