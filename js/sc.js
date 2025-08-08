const inputLeft = document.getElementById("input-left1");
const inputRight = document.getElementById("input-right1");

const thumbLeft = document.querySelector(".thumb.left1");
const thumbRight = document.querySelector(".thumb.right1");

const range = document.querySelector(".range1");

const setLeftValue = e => {
  const _this = e.target;
  const { value, min, max } = _this;

  if (+inputRight.value - +value < 10) {
    _this.value = +inputRight.value - 10;
  }

  const percent = ((+_this.value - +min) / (+max - +min)) * 100;

  thumbLeft.style.left = `${percent}%`;
  range.style.left = `${percent}%`;
};

const setRightValue = e => {
  const _this = e.target;
  const { value, min, max } = _this;

  if (+value - +inputLeft.value < 10) {
    _this.value = +inputLeft.value + 10;
  }

  const percent = ((+_this.value - +min) / (+max - +min)) * 100;

  thumbRight.style.right = `${100 - percent}%`;
  range.style.right = `${100 - percent}%`;
};

if (inputLeft && inputRight) {
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
}

