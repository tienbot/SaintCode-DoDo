(function(){
    "use strict"

    const html = document.querySelector('html')
    const price = document.querySelectorAll('.card__price')
    const pizza = document.querySelector('#pizza')
    const buy = document.querySelectorAll('.buy')
    const modal = document.querySelectorAll('.modal__back')
    const close = document.querySelectorAll('.modal__close')
    const dop = document.querySelectorAll('.dop__input')
    const dop_border = document.querySelectorAll('.form__dop')
    const dop_icon = document.querySelectorAll('.dop__check__icon')
    const tag = document.querySelectorAll('.form__tag')
// 

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
            html.style.overflow = "hidden"
            if (buy[i].classList.contains("pizza")){
                modal[0].classList.remove("d-none")
            } else {
                modal[1].classList.remove("d-none")
            }
        })
    }

    // закрыть модалку
    for(let i = 0; i < close.length; i++) {
        function closeModal() {
            modal[i].classList.add("d-none")
            html.style.overflow = "auto"
        }

        close[i].addEventListener("click", (event) => {
            closeModal()
        })

        modal[i].querySelector('.modal__buy').addEventListener("click", (event) => {
            closeModal()
        })

        modal[i].addEventListener("click", (event) => {
            const isOutside = !event.target.closest('.modal');
            if (isOutside) {
                closeModal()
            }
        })
    }

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

    // модалка, стилизация тегов при вкл/откл чекбокса
    addEventListener("click", (event) => {
        for(let i = 0; i < tag.length; i++) {
            const checkbox = tag[i].querySelector('input')
            const label = tag[i].querySelector('label')
            
            if(checkbox.checked){
                label.style.borderBottom = '1px dashed #72788B'
                label.style.textDecoration= 'unset'
            } else {
                label.style.borderBottom= 'unset'
                label.style.textDecoration= 'line-through'
            }
        }
    })

}())