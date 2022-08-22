const inp1 = document.getElementById("inp1");
const out1 = document.getElementById("out1");
const btn1 = document.getElementById("btn1");

const greets = [
  "nice to meet you.",
  "how are you?",
  "it's a pleasure to meet you.",
  "what's up!",
];

function greetings() {
  const index = Math.floor(Math.random() * greets.length);
  const firstname = inp1.value;
  out1.innerHTML = `Hello ${firstname}, ${greets[index]}`;
  inp1.value = "";
}

inp1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const index = Math.floor(Math.random() * greets.length);
    const firstname = inp1.value;
    out1.innerHTML = `Hello ${firstname}, ${greets[index]}`;
    inp1.value = "";
  }
});

btn1.addEventListener("click", greetings);
