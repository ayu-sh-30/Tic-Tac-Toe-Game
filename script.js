let rstbtn = document.querySelector(".rstbtn");
let box = document.querySelectorAll(".boxes");
let newbtn = document.querySelector(".newbtn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turno = true;

const winPosb = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

// functioning of the buttons
box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turno) {
      boxes.innerText = "O";
      turno = false;
    } else {
      boxes.innerText = "X";
      turno = true;
    }
    boxes.disabled = true;
    checkWinner();
  });
});
const reset = () => {
  turno = true;
  enableBoxes();
  msgCont.classList.add("hide");
};
const disableBoxes = () => {
  for (let boxs of box) {
    boxs.disabled = true;
  }
};
const enableBoxes = () => {
  for (let boxs of box) {
    boxs.disabled = false;
    boxs.innerText = "";
  }
};
// function showing winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgCont.classList.remove("hide");
  disableBoxes();
};
// function showing draw
const showdraw = () => {
  msg.innerText = `OOPs Its a Draw`;
  msgCont.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  let winnerFound = false;
  for (let patterns of winPosb) {
    let pos1val = box[patterns[0]].innerText;
    let pos2val = box[patterns[1]].innerText;
    let pos3val = box[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val);
        winnerFound = true;
      }
    }
  }
  //   check draw condition
  let allFilled = true;
  for (let i of box) {
    if (i.innerText === "") {
      allFilled = false;
      break;
    }
  }
//   for (let i = 0; i < box.length; i++) {
//     if (box[i].innerText === "") {
//       allFilled = false;
//       break;
//     }
//   }
  if(!winnerFound && allFilled)
  {
    showdraw();
  }
};
newbtn.addEventListener("click", reset);
rstbtn.addEventListener("click", reset);
