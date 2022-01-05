let buttonLeft = document.querySelectorAll('.button-left');
let buttonRight = document.querySelectorAll('.button-right');
let sliders = document.querySelectorAll('.products');


for (let i = 0; i < sliders.length; i++) {
  buttonLeft[i].onclick = function () {
    sliders[i].scrollLeft -= 1260;
    console.log(sliders[i]);
  } 
}

for (let i = 0; i < sliders.length; i++) {
  buttonRight[i].onclick = function () {
    sliders[i].scrollLeft += 1260;
  } 
}




// for (i = 0; i < buttonLeft.length; i++) {
//   buttonLeft[i].onclick = function () {
//     sliders[i].scrollLeft += 20;
//   }
// }

// for (i = 0; i < buttonRight.length; i++) {
//   buttonRight[i].onclick = function () {
//     sliders[i].scrollLeft += 20;
//   }
// }