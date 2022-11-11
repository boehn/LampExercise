function lightSwitch() {
  let light = document.getElementById("light-botton");

  let lightSwitch = document.getElementById("switch");
  var switchColor = window
    .getComputedStyle(document.querySelector(".switch"))
    .getPropertyValue("color");

  if (light.style.visibility === "hidden") {
    light.style.visibility = "visible";
    lightSwitch.style.setProperty("--switch-color", "#444");
  } else {
    light.style.visibility = "hidden";
    lightSwitch.style.setProperty("--switch-color", switchColor);
  }
}
