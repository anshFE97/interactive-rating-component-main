const mainCont = document.querySelector('.main-container')
const thankYou = document.querySelector('.thank-you')
const btnSubmit = document.querySelector('.btn-submit')
const rating = document.querySelector('.star')
const values = document.querySelectorAll('.btn')



function submit() {
    mainCont.classList.add('hide')
    thankYou.classList.remove('hide')
    
}

btnSubmit.addEventListener('click', submit)


values.forEach((value) => {
value.addEventListener('click',() => {
       rating.innerHTML = value.innerHTML
    })
})












