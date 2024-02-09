const yes_button = document.getElementById("yes_button");
yes_button.addEventListener("click", () => {
  document.getElementById("first").style.display  = 'none';
  document.getElementById("second").style.display  = 'flex';
});

const yes_button2 = document.getElementById("yes_button2");
yes_button2.addEventListener("click", () => {
  document.getElementById("second").style.display = 'none';
  document.getElementById("third").style.display = 'flex';
})

const no_button = document.getElementById("no_button");
const ask = document.getElementById("ask");
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
no_button.addEventListener("click", () => {
  if (ask.innerText == "Would you be my Beeb-len-tines?") {
    ask.innerText = "Please";
    ask.style.fontSize = "16px";
  } else {
    let added = parseInt(ask.style.fontSize.slice(0,-2)) + 1;
    console.log(added.toString() + 'px');
    ask.style.fontSize = added.toString() + 'px';
    ask.style.color = colors[Math.floor(Math.random() * 7)]
  }
})