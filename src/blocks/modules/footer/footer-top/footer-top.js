"use strict";

let collection_Item_Ft_Title = document.querySelectorAll(".item-ft__title");

// for (let i = 0; i < collection_Item_Ft_Title.length; i++) {

// }

let prevElements;
collection_Item_Ft_Title.forEach((title) => {
	let nav = title.nextElementSibling;

	title.addEventListener("click", () => {
		let elements = [title, nav];
		if (prevElements) {
			// [elements[2], elements[3]] = [prevElements[0], prevElements[1]];
			if (prevElements[0].outerText !== elements[0].outerText) {
				prevElements[0].removeAttribute("data-state");
				prevElements[1].removeAttribute("data-state");
			}
			// console.log(elements);
			// prevElements.forEach((element) => {
			// 	// element.dataset.state ? element.removeAttribute("data-state") : (element.dataset.state = "open-spoiler");
			// 	// if (element.dataset.state) element.removeAttribute("data-state");
			// });
		}
		elements.forEach((element) => {
			element.dataset.state ? element.removeAttribute("data-state") : (element.dataset.state = "open-spoiler");
			prevElements = elements;
			// if (!element.dataset.state) element.dataset.state = "open-spoiler";
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
