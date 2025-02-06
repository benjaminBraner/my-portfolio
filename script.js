

//Navbar hidden---------------------------------------------------------------------------------
let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar')

	const currentScrollY = window.scrollY

	if (currentScrollY > lastScrollY && currentScrollY > 50) {
		navbar.classList.add('navbar--hidden')
	} else {
		navbar.classList.remove('navbar--hidden')
	}

	lastScrollY = currentScrollY
})


//Navbar link active---------------------------------------------------------------------------------

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
})

const navbarLinks = document.querySelectorAll('.navbar__links')
navbarLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuLinks.classList.toggle('active')
	})
})



//Text reveal---------------------------------------------------------------------------------

function revealTextOnScroll() {
	const textSpan = document.querySelector(".about__details span");
	if (!textSpan) return;
 
	const rect = textSpan.getBoundingClientRect();
	const windowHeight = window.innerHeight;
 
	let progress = (windowHeight - rect.top) / (windowHeight * 0.8); 
	
	progress = Math.min(1, Math.max(0, progress));
 
	textSpan.style.backgroundSize = `${progress * 100}% 100%`;
 }
 
 window.addEventListener("scroll", revealTextOnScroll);
 window.addEventListener("load", revealTextOnScroll);
 

//Relocate main image---------------------------------------------------------------------------------

function relocateImage() {
	const profileHeader = document.querySelector(".profile-header");
	const mainContent = document.querySelector(".main__content");
	const img = document.querySelector(".profile-header img") || document.querySelector(".main__content > img");
 
	if (!img) return; 
 
	if (!img.dataset.originalIndex) {
	    img.dataset.originalIndex = [...profileHeader.children].indexOf(img);
	}
 
	if (window.innerWidth <= 768) {
	    if (profileHeader.contains(img)) {
		   mainContent.insertBefore(img, profileHeader); 
	    }
	} else {
	    if (!profileHeader.contains(img)) {
		   const originalIndex = parseInt(img.dataset.originalIndex, 10);
		   profileHeader.insertBefore(img, profileHeader.children[originalIndex] || null);
	    }
	}
 }
 
 window.addEventListener("resize", relocateImage);
 window.addEventListener("load", relocateImage);
 

//Current year--------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	const elements = document.querySelectorAll('.tech-date')

	elements.forEach((element) => {
		const text = element.textContent.trim()
		const parts = text.split('-')

		if (parts.length > 1) {
			element.textContent = `${parts[0]} - ${new Date().getFullYear()}`
		}
	})
})

//Change background color on scroll--------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
	const titleContainer = document.querySelector(".projects__title-container");
 
	function updateBackgroundColor() {
	    const rect = titleContainer.getBoundingClientRect();
	    const screenHeight = window.innerHeight;
 
	    if (rect.top < screenHeight / 2) {
		   document.body.style.backgroundColor = "black"; 
	    } else {
		   document.body.style.backgroundColor = "white"; 
	    }
	}
 
	window.addEventListener("scroll", updateBackgroundColor);
	window.addEventListener("resize", updateBackgroundColor);
	updateBackgroundColor(); 
 });
 
 
 
 
 //Project image link--------------------------------------------------------------------------------
 
 
 document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".item-image").forEach(img => {
	    img.addEventListener("click", () => {
		   const url = img.getAttribute("url");
		   if (url) {
			  window.open(url, "_blank");
		   }
	    });
	});
 });
 