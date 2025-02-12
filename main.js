
const frame = document.querySelector("#frame");
const panel = frame.querySelectorAll(".panel li");

const len = panel.length - 1;
const interval = 4000;
let panel_num = 0;
let timer = null;


window.onload = () => {
  starRolling();
};

function activation(index) {
  for (const el of panel) el.classList.remove('on');
  panel[index].classList.add('on');
  panel_num = index;
}

function rolling() {
  panel_num < len ? panel_num++ : (panel_num = 0);
  panel_num < len_m ? panel_num++ : (panel_num = 0);
  activation(panel_num);
}

function starRolling() {
  activation(panel_num);
  timer = setInterval(rolling, interval)
}