let modButtons = document.querySelectorAll("[data-modal]");
let body = document.body;
let mobalClose = document.querySelectorAll(".modal__close");
let modalMask = document.querySelectorAll(".modal");
let header = document.querySelector(".header");

modButtons.forEach((item) => {
	item.addEventListener("click", (event) => {
		let eTarget = event.currentTarget;
		let modalId = eTarget.getAttribute("data-modal");
		let modal = document.getElementById(modalId);
		let modal__content = modal.querySelector(".modal__content");

		modal__content.addEventListener("click", (event) => {
			event.stopPropagation();
		});
		modal.classList.add("show");
		body.classList.add("modal-show");
		body.style.paddingRight = getScrollWidth() + "px";
		header.style.paddingRight = getScrollWidth() + "px";
	});
});

mobalClose.forEach((item) => {
	item.addEventListener("click", (event) => {
		let eTarget = event.currentTarget;
		let modal = eTarget.closest(".modal");
		modal.classList.remove("show");
		body.classList.remove("modal-show");
		body.style.paddingRight = "0px";
		header.style.paddingRight = "0px";
	});
});

modalMask.forEach((item) => {
	item.addEventListener("click", (event) => {
		let eTarget = event.currentTarget;

		eTarget.classList.remove("show");
		body.classList.remove("modal-show");
		body.style.paddingRight = "0px";
		header.style.paddingRight = "0px";
	});
});

function getScrollWidth() {
	let div = document.createElement("div");

	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	return scrollWidth;
}
