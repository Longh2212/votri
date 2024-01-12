const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
  question.innerHTML = "ehehe t biết mà =)))";
  gif.src ="https://github.com/Longh2212/votri/blob/main/lacduyt.gif?raw=true";
    noBtn.style.left = -50 + "px";
    noBtn.style.top = -50+ "px";
    yesBtn.style.left = -50 + "px";
    yesBtn.style.top = -50+ "px";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
