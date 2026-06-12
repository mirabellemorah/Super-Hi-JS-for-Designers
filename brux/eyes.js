const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");
const face = document.querySelector(".face");

let interval = null;

const startInterval = () => {
  clearInterval(interval);

  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    moveEye(irisLeft, x, y);
    moveEye(irisRight, x, y);
  }, 3000);
};

const moveEye = function (tag, mouseX, mouseY) {
  const midEyeX = tag.getBoundingClientRect().left;
  const midEyeY = tag.getBoundingClientRect().top;

  const diffX = mouseX - midEyeX;
  const diffY = mouseY - midEyeY - window.pageYOffset;

  const diff = Math.sqrt(diffX * diffX + diffY * diffY);

  const angle = Math.atan2(diffY, diffX);

  const radius = Math.min(3, diff);

  const cappedX = radius * Math.cos(angle);
  const cappedY = radius * Math.sin(angle);

  const eyeTag = tag.querySelector("div");

  eyeTag.style.left = cappedX + "px";
  eyeTag.style.top = cappedY + "px";
};

startInterval();
document.addEventListener("mousemove", function (event) {
  startInterval();
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});
