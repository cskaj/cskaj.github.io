function bgChange() {
  let el = document.querySelector("body");
  if (el.style.background === "black"){
    el.style.background = "white";
    el.style.color = "black";
    } else {
      el.style.background = "black";
      el.style.color = "white";
    };
}
