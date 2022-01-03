let slides = document.querySelectorAll(".inner-slider");
let sliders = document.querySelectorAll(".slider");

let posX1,
    posX2,
    posY1,
    posY2,
    dX,
    dY,
    e,
    current,
    dirDetected = false;
  //feature detection
let passiveIfSupported = false;

try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {passiveIfSupported = {passive: false};}
    }));
} catch(err) {}

  
for (let index = 0; index < slides.length; index++) {
    slides[index].addEventListener("touchstart", (event)=>{
        e = event;
        current = index;
        dragStart(e, current);
    }, passiveIfSupported);
    slides[index].addEventListener("touchmove", (event)=>{
        e = event;
        current = index;
        dragAction(e, current);
    }, passiveIfSupported);
    slides[index].addEventListener("touchend", (event)=>{
        e = event;
        current = index;
        dragEnd(e, current);
    }, false);
}

function dragStart(e) {
  posX1 = e.touches[0].clientX;
  posY1 = e.touches[0].clientY;
  
}

function dragAction(e) {
  posX2 = e.touches[0].clientX;
  posY2 = e.touches[0].clientY;
  dX = posX2 - posX1;
  posX1 = e.touches[0].clientX;
  dY = posY2 - posY1;
  
  if (!dirDetected) {
    if (Math.abs(dY) > Math.abs(dX)) {
        slides[current].removeEventListener("touchmove", dragAction, passiveIfSupported);
      return;
    }
    e.preventDefault();
  }
  
  dirDetected = true;
  slides[current].style.left = (slides[current].offsetLeft + dX) + "px";
  checkBoundary(current);
}

  function dragEnd() {
    if (!dirDetected) {
        slides[current].addEventListener("touchmove", dragAction, passiveIfSupported);
    }
    dirDetected = false;
  }

  function checkBoundary(current) {
    let outer = sliders[current].getBoundingClientRect();
    let inner = slides[current].getBoundingClientRect();

    if (parseInt(slides[current].style.left) > 0) {
      slides[current].style.left = '0px';
    }
    if (inner.right < outer.right) {
      slides[current].style.left = `-${inner.width - outer.width}px`;
    }
}