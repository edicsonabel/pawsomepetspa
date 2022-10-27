import './style.css'
import './assets/icons/style.css'

/* UTILS */
import { $, $$, random } from './utils'

/* Paws animations */
const pawsToAnimated = $$('#icons>.animate-moving-background')
const maxWidth = window.innerWidth
const maxHeight = window.innerHeight
pawsToAnimated.forEach($el => {
  $el.style.setProperty('left', `${random({ min: 0, max: maxWidth - 96 })}px`)
  $el.style.setProperty('bottom', `${random({ min: 0, max: maxHeight / 1.5 })}px`)
  $el.style.setProperty('--delay', `${random({ min: 0, max: 6, float: true })}s`)
})

/* Scroll to click navbar */
const itemsMenu = $$('.scroll-to')
itemsMenu.forEach($link => {
  const itemToGo = $(`${$link.getAttribute('href')}`)
  $link.addEventListener('click', event => {
    event.preventDefault()
    itemToGo.scrollIntoView({
      behavior: 'smooth'
    })
  })
})

/* Accordions */
const accordions = $$('.accordion')
accordions.forEach(accordion => {
  accordion.classList.toggle('accordion-active')
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('accordion-active')
    let yOffset = -60
    yOffset = window.innerWidth >= 768 ? yOffset : -10
    const y = accordion.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  })
})
