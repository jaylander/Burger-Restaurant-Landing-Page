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
