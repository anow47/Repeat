
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


//Animation on scroll element fade-in
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
  
  // Remove the scroll event listener if all elements have been displayed
  if (document.querySelectorAll(".js-scroll.scrolled").length === scrollElements.length) {
    window.removeEventListener("scroll", handleScrollAnimation);
  }
};

window.addEventListener("scroll", handleScrollAnimation);