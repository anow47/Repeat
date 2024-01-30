
const expandMore = document.querySelector('.expand-more')
const dropdown = document.querySelector('.dropdown')
document.querySelector('.expand-icon-container').addEventListener('click',  () => {
    toggleMenu(expandMore)
})
dropdown.addEventListener('click',  () => {
    const subMenuNav = document.querySelector('.sub-menu')
    toggleMenu(subMenuNav)
})

const navBar = document.querySelector('.nav-bar')
const closeIcon = document.querySelector('.close-icon')
document.querySelector('.burger').addEventListener('click', () => {
    toggleMenu(navBar)
    toggleMenu(closeIcon)
})

closeIcon.addEventListener('click', () => {
    navBar.style.display = 'none'
    closeIcon.style.display = 'none'
})
function toggleMenu(element){
    element.style.display = element.style.display === 'none'? 'block' : 'none'
}

const expandIconContainer = document.querySelectorAll('.expand-icon-container')
const expandIcon = document.querySelectorAll('.expand-icon')
expandIconContainer[0].addEventListener('click', () => {
    expandIcon[0].style.rotate === '0deg'? 
    expandIcon[0].style.rotate = '180deg' :
    expandIcon[0].style.rotate = '0deg' 
})
expandIconContainer[1].addEventListener('click', () => {
    expandIcon[1].style.rotate === '-90deg'? 
    expandIcon[1].style.rotate = '90deg' : 
    expandIcon[1].style.rotate = '-90deg' 
})

// card = [
//     {}
// ]