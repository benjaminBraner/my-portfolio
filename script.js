// Theme-----------------------------------------------------------
const themeToggle = document.getElementById('themeToggle')

themeToggle.addEventListener('click', toggleTheme)

function toggleTheme() {
	const body = document.body
	if (body.classList.contains('dark-theme')) {
		body.classList.remove('dark-theme')
		body.classList.add('light-theme')
	} else {
		body.classList.remove('light-theme')
		body.classList.add('dark-theme')
	}
}


// Navbar bottom shadow-----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar')

	window.addEventListener('scroll', function () {
		if (window.scrollY === 0) {
			navbar.classList.remove('navbar--shadow')
			navbar.classList.add('navbar-on-top')

		} else {
			navbar.classList.add('navbar--shadow')
			navbar.classList.remove('navbar-on-top')

		}
	})
})






let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navbar.classList.add('navbar--hidden');
  } 
  else {
    navbar.classList.remove('navbar--hidden');
  }
  
  lastScrollY = currentScrollY;
});





const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
})

const contactBtn = document.querySelector('.button')
contactBtn.addEventListener('click', () => {
	menuLinks.classList.toggle('active')
})

const navbarLinks = document.querySelectorAll('.navbar__links')
navbarLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuLinks.classList.toggle('active')
	})
})

const projectContainers = document.querySelectorAll('.project-container')

projectContainers.forEach((container) => {
	const url = container.dataset.url

	container.addEventListener('click', () => {
		window.open(url, '_blank')
	})
})

// Seleccionamos todos los elementos con la clase 'item'
const items = document.querySelectorAll('.item')

// Añadimos un evento de clic a cada 'item'
items.forEach((item) => {
	item.addEventListener('click', () => {
		// Obtenemos el valor del atributo 'data-url'
		const url = item.getAttribute('data-url')

		// Si existe una URL, abrimos en una nueva pestaña
		if (url) {
			window.open(url, '_blank')
		}
	})
})
