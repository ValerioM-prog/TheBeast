const promoSlides = document.querySelector('.imageHolder').querySelectorAll('.slide');
const promoButtons = document.querySelector('.imageButtons').querySelectorAll('.button');

let x = 1;
let cycle = 1;
let counter = 0;
let lastFade = 0;

const time = 7000;

var timer = setInterval(autoSlideShort, time);


function autoSlideShort() {

    promoSlides.forEach((slide) => {

        slide.classList.remove('active');
        slide.classList.remove('fadeOut');
        promoButtons.forEach((button) => {
            button.classList.remove('active');

        });
    });



    if (counter === 0 && x === 1) {
        
        x++;
        promoSlides[counter].classList.remove('active');
        promoSlides[counter].classList.add('fadeOut');        
        promoButtons[counter].classList.remove('active');        

        counter++;
        lastFade = counter;       

        promoSlides[counter].classList.add('active');
        promoButtons[counter].classList.add('active');

    } 
    
    else if (counter === 0) {

        promoSlides[promoSlides.length-1].classList.remove('fadeOut');
        promoSlides[counter].classList.remove('active');
        promoSlides[counter].classList.add('fadeOut');
        promoButtons[counter].classList.remove('active');

        counter++;
        lastFade = counter;

        promoSlides[counter].classList.add('active');
        promoButtons[counter].classList.add('active');

    }
    
    else if (counter === slides.length-1) {

        promoSlides[counter-1].classList.remove('fadeOut');
        promoSlides[counter].classList.remove('active');
        promoSlides[counter].classList.add('fadeOut');        
        promoButtons[counter].classList.remove('active');

        counter = 0;
        lastFade = counter;

        promoSlides[counter].classList.add('active');
        promoButtons[counter].classList.add('active');
    } 
    
    else {

        promoSlides[counter-1].classList.remove('fadeOut');
        promoSlides[counter].classList.remove('active');
        promoSlides[counter].classList.add('fadeOut');        
        promoButtons[counter].classList.remove('active');

        counter++;
        lastFade = counter;

        promoSlides[counter].classList.add('active');
        promoButtons[counter].classList.add('active');

    }

}



var manualNav = function (manual) {

    promoSlides.forEach((slide) => {

        slide.classList.remove('active');
        slide.classList.remove('fadeOut');
        promoButtons.forEach((button) => {
            button.classList.remove('active');

        });
    });

    if (lastFade === 0) {
        promoSlides[lastFade].classList.remove('active');
        promoSlides[lastFade].classList.add('fadeOut');        
        promoButtons[lastFade].classList.remove('active');
        
    }
    else {
        promoSlides[(lastFade-1)].classList.remove('fadeOut');
        promoSlides[lastFade].classList.remove('active');
        promoSlides[lastFade].classList.add('fadeOut');        
        promoButtons[lastFade].classList.remove('active');
    }
    

    promoSlides[manual].classList.add('active');   
    promoButtons[manual].classList.add('active');

    clearInterval(timer);
    timer = setInterval(autoSlideShort, time);

}

promoButtons.forEach((button, i) => {

    button.addEventListener("click", () => {

        manualNav(i);
        currentSlide = i;
        lastFade = i;
        counter = i;

    });
});
