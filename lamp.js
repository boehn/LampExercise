function lightSwitch() {
  // light
  let light = document.querySelectorAll(".light");
  let lightElements = Array.from(light);

  // switch light
  let lightSwitch = document.querySelector(".switch");
  let switchColor = window
    .getComputedStyle(lightSwitch)
    .getPropertyValue("color");

  lightElements.forEach((element) => {
    if (element.style.visibility === "hidden") {
      element.style.visibility = "visible";
      lightSwitch.style.setProperty("--switch-color", "#444");
    } else {
      element.style.visibility = "hidden";
      lightSwitch.style.setProperty("--switch-color", switchColor);
    }
  });
}
