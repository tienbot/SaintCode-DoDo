let test = document.querySelectorAll('.card__price');
let pizza = document.querySelector('#pizza');



addEventListener("resize", (event) => {
    let screenWidth = window.screen.width;
    if (screenWidth <= 576){
        for(i = 0; i < test.length; i++) {
            test[i].classList.add("button");
        }
        pizza.querySelector('.card__price').classList.add("button--orange");
    } else {
        for(i = 0; i < test.length; i++) {
            test[i].classList.remove("button");
        }
        pizza.querySelector('.card__price').classList.remove("button--orange");
    }
});