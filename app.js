const container = document.querySelector(".container"),
  rightColumn = document.querySelector(".right-column"),
  leftColumn = document.querySelector(".left-column"),
  upButton = document.querySelector(".up"),
  downButton = document.querySelector(".down"),
  slidesLength = rightColumn.querySelectorAll("div").length;

let active = 0;

leftColumn.style.top = `-${(slidesLength - 1) * 100}vh`;

const slider = (position) => {
  const height = container.clientHeight;
  if (position === "up") {
    active++;
    if (active > slidesLength - 1) {
      active = 0;
    }
  } else if (position === "down") {
    active--;
    if (active < 0) {
      active = slidesLength - 1;
    }
  }
  rightColumn.style.transform = `translateY(-${active * height}px)`;
  leftColumn.style.transform = `translateY(${active * height}px)`;
};

upButton.addEventListener("click", () => slider("up"));
downButton.addEventListener("click", () => slider("down"));
