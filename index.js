const buttons = document.getElementsByClassName("button");
for(var i = buttons.length; i--;) {
  buttons[i].style.animationDelay = (i * 400) + "ms";
  buttons[i].addEventListener("animationend", () => {
    buttons[i].style.animation = "shine 1s infinite";
  });
}