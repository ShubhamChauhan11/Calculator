import "./styles.css";
let screen = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let screenvalue = "";
for (let items of buttons) {
  items.addEventListener("click", (e) => {
    let buttontext = e.target.innerText;
    if (buttontext === "C") {
      screen.value = "";
      screenvalue = "";
    } else if (buttontext === "=") {
      screen.value = eval(screenvalue);
    } else {
      screenvalue += buttontext;

      screen.value = screenvalue;
    }
  });
}
