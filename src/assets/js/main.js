// Add your javascript here
import AOS from 'aos';

/**
 * @typedef {Object} WindowExtensions
 * @property {boolean} darkMode
 * @property {() => void} openMobileMenu
 * @property {() => void} closeMobileMenu
 */

/** @type {Window & WindowExtensions} */
const w = window;

const stickyClasses = [];
const unstickyClasses = [];
const stickyClassesContainer = [
	"shadow-[0px_1px_4px_0_rgba(25,33,61,0.06)]",
	"rounded-[20px]",
	"bg-[#ffffff]/65",
	"border-[#ffffff]/65",
	"backdrop-blur-2xl",
	"backdrop-brightness-120",
];
const unstickyClassesContainer = [
	"shadow-none",
	"border-transparent",
	"rounded-none",
	"bg-transparent",
];
let headerElement = null;

document.addEventListener("DOMContentLoaded", () => {
	headerElement = document.getElementById("header");

	stickyHeaderFuncionality();
	applyMenuItemClasses();
	evaluateHeaderPosition();
	mobileMenuFunctionality();

	// Initialize AOS (Animate on Scroll)
	AOS.init({
		duration: 400,
		easing: 'ease-out-cubic',
		once: true,
		offset: 20,
		delay: 0,
	});
});

// window.toggleDarkMode = function(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.setItem('dark_mode', true);
//         window.darkMode = true;
//     } else {
//         window.darkMode = false;
//         localStorage.setItem('dark_mode', false);
//     }
// }

window.stickyHeaderFuncionality = () => {
	window.addEventListener("scroll", () => {
		evaluateHeaderPosition();
	});
};

window.evaluateHeaderPosition = () => {
	if (window.scrollY > 48) {
		headerElement.firstElementChild.classList.add(...stickyClassesContainer);
		headerElement.firstElementChild.classList.remove(
			...unstickyClassesContainer,
		);
		headerElement.classList.add(...stickyClasses);
		headerElement.classList.remove(...unstickyClasses);
		// document.getElementById("menu").classList.add("top-[75px]");
		// document.getElementById("menu").classList.remove("top-[75px]");
	} else {
		headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
		headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
		headerElement.classList.add(...unstickyClasses);
		headerElement.classList.remove(...stickyClasses);
		// document.getElementById("menu").classList.remove("top-[56px]");
		// document.getElementById("menu").classList.add("top-[75px]");
	}
};

window.applyMenuItemClasses = () => {
	const menuItems = document.querySelectorAll("#menu a");
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].pathname === window.location.pathname) {
			menuItems[i].classList.add("text-neutral-900");
		}
	}
};

function mobileMenuFunctionality() {
	document.getElementById("openMenu").addEventListener("click", () => {
		openMobileMenu();
	});

	document.getElementById("closeMenu").addEventListener("click", () => {
		closeMobileMenu();
	});
}

w.openMobileMenu = () => {
	document.getElementById("openMenu").classList.add("hidden");
	document.getElementById("closeMenu").classList.remove("hidden");
	document.getElementById("menu").classList.remove("hidden");
	document.getElementById("mobileMenuBackground").classList.add("opacity-0");
	document.getElementById("mobileMenuBackground").classList.remove("hidden");

	setTimeout(() => {
		document
			.getElementById("mobileMenuBackground")
			.classList.remove("opacity-0");
	}, 1);
};

w.closeMobileMenu = () => {
	document.getElementById("closeMenu").classList.add("hidden");
	document.getElementById("openMenu").classList.remove("hidden");
	document.getElementById("menu").classList.add("hidden");
	document.getElementById("mobileMenuBackground").classList.add("hidden");
};
