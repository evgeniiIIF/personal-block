let menuIcon = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav");
let headerLogo = document.querySelector(".header__logo");
let body = document.body;

menuIcon.addEventListener("click", () => {
	let items = [menuIcon, nav, headerLogo, body];

	if (nav.dataset.state === "menu-open") {
		items.forEach((item) => item.removeAttribute("data-state"));
	} else {
		items.forEach((item) => (item.dataset.state = "menu-open"));
	}
});
