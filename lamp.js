function lightSwitch() {
  var change = document.getElementById("light");

  if (change.style.visibility === "hidden") {
    change.style.visibility = "visible";
  } else {
    change.style.visibility = "hidden";
  }
}
