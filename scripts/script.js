// change navbar color on scroll
var myNav = document.getElementById("nav");

window.onscroll = function () {
	"use strict";
	if (document.body.scrollTop >= 72 || document.documentElement.scrollTop >= 72) {
		myNav.classList.add("scroll");
	} else {
		myNav.classList.remove("scroll");
	}
};

// scroll nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .container ul li a");

window.addEventListener("scroll", () => {

	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((navLink) => {
		navLink.classList.remove("active");
		if (navLink.classList.contains(current)) {
			navLink.classList.add("active");
		}
	});
});


// slide-out menu

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const slideoutMenuLinks = document.getElementsByClassName("slideout-menu-links");

function toggleSlideMenu() {
	if (slideoutMenu.style.opacity == "1") {
		slideoutMenu.style.top = '-330px';
		setTimeout(function () {
			slideoutMenu.style.opacity = '0';
			slideoutMenu.style.pointerEvents = 'none';
		}, 400);

	} else {
		slideoutMenu.style.opacity = '1';
		slideoutMenu.style.pointerEvents = 'auto';
		slideoutMenu.style.top = '0px';
	}
}
menuIcon.addEventListener('click', function () { toggleSlideMenu() });
for (const link of slideoutMenuLinks) {
	link.addEventListener('click', function () { toggleSlideMenu() });
}

// Swiper API for carousel
var swiper = new Swiper('.swiper1', {
	navigation: {
		nextEl: '.next-slide',
		prevEl: '.prev-slide',
	},
	slidesPerView: 1
	// autoHeight: true
});

var swiper2 = new Swiper('.swiper2', {
	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},
	slidesPerView: 'auto',

	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	}

	// autoHeight: true
});
