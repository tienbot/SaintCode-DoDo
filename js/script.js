let html = document.getElementsByTagName('html');
let price = document.querySelectorAll('.card__price');
let pizza = document.querySelector('#pizza');
let buy = document.querySelectorAll('.buy');
let modal = document.querySelector('.modal__back');
let close = document.querySelector('.modal__close');
let dop = document.querySelectorAll('.dop__input');
let dop_wrapper = document.querySelectorAll('.form__dop');
let check_icon = document.querySelectorAll('.dop__check__icon');


// адаптив стилей
addEventListener("resize", (event) => {
    let screenWidth = window.screen.width;
    if (screenWidth <= 576){
        for(i = 0; i < price.length; i++) {
            price[i].classList.add("button");
        }
        pizza.querySelector('.card__price').classList.add("button--orange");
    } else {
        for(i = 0; i < price.length; i++) {
            price[i].classList.remove("button");
        }
        pizza.querySelector('.card__price').classList.remove("button--orange");
    }
});

// вызов модалки
for(i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", (event) => {
        modal.classList.remove("d-none");
    });
}

// закрыть модалку
close.addEventListener("click", (event) => {
    modal.classList.add("d-none");
});

// модалка, выбрать/убрать доп
for(i = 0; i < dop.length; i++) {
    let check =  dop[i];
    let border = dop_wrapper[i]
    let icon = check_icon[i]
    check.addEventListener("click", (event) => {
        border.classList.toggle("dop__check");
        icon.classList.toggle("d-none");
    });
}