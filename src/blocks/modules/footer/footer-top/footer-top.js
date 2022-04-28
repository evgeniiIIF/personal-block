"use strict";

let collection_Item_Ft_Title = document.querySelectorAll(".item-ft__title");

let prevElements;
collection_Item_Ft_Title.forEach((title) => {
	let itemFt = title.parentElement;
	let nav = title.nextElementSibling;

	title.addEventListener("click", () => {
		let elements = [title, nav, itemFt];
		if (prevElements) {
			if (prevElements[0].outerText !== elements[0].outerText) {
				prevElements.forEach((item) => item.removeAttribute("data-state"));
			}
		}
		elements.forEach((element) => {
			element.dataset.state ? element.removeAttribute("data-state") : (element.dataset.state = "open-spoiler");
			prevElements = elements;
		});
	});
});
