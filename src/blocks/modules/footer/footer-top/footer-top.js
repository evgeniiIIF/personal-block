"use strict";

let collection_Item_Ft_Title = document.querySelectorAll(".item-ft__title");

// for (let i = 0; i < collection_Item_Ft_Title.length; i++) {

// }

let prevElements;
collection_Item_Ft_Title.forEach((title) => {
	let nav = title.nextElementSibling;
	let elements = [title, nav];

	title.addEventListener("click", () => {
		if (prevElements) {
			console.log("jjjj");
			prevElements.forEach((element) => {
				if (element.dataset.state) element.removeAttribute("data-state");
				prevElements = elements;
			});
		} else {
			prevElements = elements;
		}
		elements.forEach((element) => {
			element.dataset.state ? element.removeAttribute("data-state") : (element.dataset.state = "open-spoiler");
		});
	});
});
function remove(elements) {
	if (prevElements) {
		console.log(prevElements[0].outerText);

		prevElements.forEach((element) => {
			if (element.dataset.state) element.removeAttribute("data-state");
		});
	}

	prevElements = elements;
}
