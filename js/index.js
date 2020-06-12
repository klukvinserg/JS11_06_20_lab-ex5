let tmp = false;

function myOver() {
  let target = event.target;
  target.style.background = "#373d57";
  if (
    (tmp === true && event.path[0].id === "dresses") ||
    (tmp === true && event.path[0].id === "shirts") ||
    (tmp === true && event.path[0].id === "jeans") ||
    (tmp === true && event.path[0].id === "shoes") ||
    (tmp === true && event.path[1].id === "about")
  ) {
    subMenuBlock.style.display = "block";
    about.style.background = "#373d57";
  } else {
    subMenuBlock.style.display = "none";
    about.style.background = "#6671a0";
    tmp = false;
  }
}

function myOut() {
  let target = event.target;
  target.style.background = "";
  subMenuBlock.style.display = "none";
  about.style.background = "#6671a0";
}

function myClick() {
  if (tmp === false) {
    subMenuBlock.style.display = "block";
    about.style.background = "#373d57";
    tmp = true;
  } else {
    subMenuBlock.style.display = "none";
    about.style.background = "#6671a0";
    tmp = false;
  }
}
