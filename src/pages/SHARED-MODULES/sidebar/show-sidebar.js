let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let body = document.body;
let main = document.querySelector(".main");

burger.addEventListener("click", () => {
	if (body.classList.contains("show-sidebar")) {
		closeSidebar();
	} else {
		showSidebar();
	}
});

function showSidebar() {
	body.classList.add("show-sidebar");
	setTimeout(() => {
		let mask = document.createElement("div");
		mask.classList.add("mask-sidebar");
		mask.addEventListener("click", closeSidebar);
		main.appendChild(mask);
	}, 100);
}

function closeSidebar() {
	body.classList.remove("show-sidebar");
	document.querySelector(".mask-sidebar").remove();
}
