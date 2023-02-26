const button = document.querySelector('.header__burger_button');
const navbar = document.querySelector('.header__navbar');
const navbarItem = document.querySelectorAll('.navbar__item')
const itemList = document.querySelectorAll('.item__list')

navbarItem.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        itemList[index].classList.toggle('item__list--inactive')
    })
})

function showMenu(){
    itemList.forEach(element => element.classList.toggle('item__list--inactive', true))
    navbar.classList.toggle('header__navbar--inactive')
    
    button.classList.toggle('header__burger_button--active')
}

button.addEventListener('click', showMenu)