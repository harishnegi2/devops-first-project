/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/


/*=============== HOME TYPED JS ===============*/
const typedRole = document.getElementById('typed-role')
if (typedRole) {
   const roles = ['Freelancer', 'Developer', 'Visual Artist']
   let roleIndex = 0
   let characterIndex = typedRole.textContent.length
   let deleting = false

   const typeRole = () => {
      const role = roles[roleIndex]
      typedRole.textContent = role.slice(0, characterIndex)
      if (!deleting && characterIndex < role.length) {
         characterIndex++
      } else if (deleting && characterIndex > 0) {
         characterIndex--
      } else if (!deleting) {
         deleting = true
         return setTimeout(typeRole, 1600)
      } else {
         deleting = false
         roleIndex = (roleIndex + 1) % roles.length
      }
      setTimeout(typeRole, deleting ? 55 : 90)
   }

   setTimeout(typeRole, 90)
}


/*=============== CHANGE HEADER STYLES ===============*/
const header = document.getElementById('header')
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24)
window.addEventListener('scroll', updateHeader)
updateHeader()


/*=============== SWIPER WORK ===============*/ 
if (window.Swiper && document.querySelector('.work__slider')) {
   const workSwiper = new Swiper('.work__slider', {
      slidesPerView: 3,
      spaceBetween: 16,
      grabCursor: true,
      keyboard: { enabled: true },
      pagination: {
         el: '.work__pagination',
         clickable: true
      },
      navigation: {
         nextEl: '.work__button--next',
         prevEl: '.work__button--prev'
      },
      breakpoints: {
         0: { slidesPerView: 1 },
         700: { slidesPerView: 2 },
         1000: { slidesPerView: 3 }
      }
   })
   window.addEventListener('resize', () => workSwiper.update())
}


/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.querySelector('.contact__form')
if (contactForm) {
   contactForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const button = contactForm.querySelector('button')
      button.innerHTML = 'Message ready <i class="ri-check-line"></i>'
      button.disabled = true
   })
}


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const setActiveLink = () => {
   const scrollY = window.scrollY
   sections.forEach(section => {
      const link = document.querySelector(`.nav__link[href="#${section.id}"]`)
      if (link) link.classList.toggle('active-link', scrollY >= section.offsetTop - 180 && scrollY < section.offsetTop + section.offsetHeight - 180)
   })
}
window.addEventListener('scroll', setActiveLink)
setActiveLink()


/*=============== CUSTOM CURSOR ===============*/
const cursorDot = document.querySelector('.cursor-dot')
if (cursorDot && window.matchMedia('(pointer: fine)').matches) {
   window.addEventListener('mousemove', (event) => {
      cursorDot.style.left = `${event.clientX}px`
      cursorDot.style.top = `${event.clientY}px`
   })

   document.querySelectorAll('a, button, input, textarea, summary, .home__title').forEach((element) => {
      element.addEventListener('mouseenter', () => cursorDot.classList.add('is-hovering'))
      element.addEventListener('mouseleave', () => cursorDot.classList.remove('is-hovering'))
   })
}


/*=============== SCROLLREVEAL ANIMATION ===============*/
if (window.ScrollReveal) {
   ScrollReveal().reveal('.about__copy, .work__card, .services__list, .skills__grid, .testimonials blockquote, .contact__form', { distance: '30px', origin: 'bottom', interval: 80, duration: 900, reset: false })
}