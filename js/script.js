let screenWidth = window.screen.width;
let test = document.querySelectorAll('.card__price');

if (screenWidth <= 576){
    for(i = 0; i < test.length; i++) {
        test[i].classList.toggle("button");
    }
}