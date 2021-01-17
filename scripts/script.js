// slide-out menu

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const slideoutMenuLinks = document.getElementsByClassName("slideout-menu-links");

function toggleSlideMenu() {
	if (slideoutMenu.style.opacity == "1") {
		slideoutMenu.style.top = '-300px';
		setTimeout(function () {
			slideoutMenu.style.opacity = '0';
			slideoutMenu.style.pointerEvents = 'none';
		}, 400);

	} else {
		slideoutMenu.style.opacity = '1';
		slideoutMenu.style.pointerEvents = 'auto';
		slideoutMenu.style.top = '10px';
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

	// autoHeight: true
});

var swiper2 = new Swiper('.swiper2', {
	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},

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