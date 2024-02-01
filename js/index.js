
const expandMore = document.querySelector('.expand-more')
const dropdown = document.querySelector('.dropdown')
const closeIcon = document.querySelector('.close-icon')
const navBar = document.querySelector('.nav-bar')


document.querySelector('.burger').addEventListener('click', () => {
    toggleMenu(navBar)
    toggleMenu(closeIcon)
})
document.querySelector('.expand-icon-container').addEventListener('click',  () => {
    toggleMenu(expandMore)
})
dropdown.addEventListener('click',  () => {
    const subMenuNav = document.querySelector('.sub-menu')
    toggleMenu(subMenuNav)
})

closeIcon.addEventListener('click', () => {
    navBar.style.visibility = 'hidden'
    closeIcon.style.visibility = 'hidden'
})
function toggleMenu(element){
    element.style.visibility = (element.style.visibility === 'hidden')? 'visible' : 'hidden'
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

// Add active class to active link and visited
const currentLink = document.querySelectorAll('.nav-bar .main-link')
currentLink.forEach(link => {
    link.addEventListener('click', () => {
        currentLink.forEach(el => {
            el.classList.remove('active')
        })
        link.classList.add('active')
    })
}) 

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

// Counter on Stats
let winHeight = window.innerHeight;
    let ele = document.querySelector(".card");
    let eleOffsetTop = ele.offsetTop;
    let eleTop = eleOffsetTop - winHeight;
    let current = 0;

    function updateCounter($this, countTo) {
      $this.innerText = Math.floor(countTo);
    }

    function handleScroll() {
      let scrollTop = window.scrollY;

      if (current === 0 && scrollTop >= eleTop) {
        let counters = document.querySelectorAll('.card .count');
        
        counters.forEach(function (counter) {
          let countTo = counter.getAttribute('data-count');
          let currentCount = 0;

          function animateCounter() {
            currentCount++;
            updateCounter(counter, currentCount);

            if (currentCount < countTo) {
              requestAnimationFrame(animateCounter);
            } else {
              updateCounter(counter, countTo);
            }
          }
          animateCounter();
        });
        current = 1;
      }
    }
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
