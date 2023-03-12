const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  title.style.color = "green";
  // console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);

// function clickbox(){
//   box.style.borderBlockColor = "green";
// }

// const box = document.querySelector(".box");
// console.dir(box);

// box.addEventListener("input", clickbox);

