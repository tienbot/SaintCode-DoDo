(function(){
    "use strict"

    const html = document.getElementsByTagName('html')
    const price = document.querySelectorAll('.card__price')
    const pizza = document.querySelector('#pizza')
    const buy = document.querySelectorAll('.buy')
    const modal = document.querySelector('.modal__back')
    const close = document.querySelector('.modal__close')
    const dop = document.querySelectorAll('.dop__input')
    const dop_border = document.querySelectorAll('.form__dop')
    const dop_icon = document.querySelectorAll('.dop__check__icon')


    // адаптив стилей
    addEventListener("resize", (event) => {
        let screenWidth = window.screen.width
        if (screenWidth <= 576){
            for(let i = 0; i < price.length; i++) {
                price[i].classList.add("button")
            }
            pizza.querySelector('.card__price').classList.add("button--orange")
        } else {
            for(let i = 0; i < price.length; i++) {
                price[i].classList.remove("button")
            }
            pizza.querySelector('.card__price').classList.remove("button--orange")
        }
    });

    // вызов модалки
    for(let i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", (event) => {
            modal.classList.remove("d-none")
        })
    }

    // закрыть модалку
    close.addEventListener("click", (event) => {
        modal.classList.add("d-none")
    })

    // модалка, выбрать/убрать доп
    for(let i = 0; i < dop.length; i++) {
        const check =  dop[i]
        const border = dop_border[i]
        const icon = dop_icon[i]
        check.addEventListener("click", (event) => {
            border.classList.toggle("dop__check")
            icon.classList.toggle("d-none")
        })
    }
}())