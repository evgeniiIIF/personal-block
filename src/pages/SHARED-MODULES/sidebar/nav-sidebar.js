let sidebarNavMobile = document.querySelector(".nav-header--mobile-nav");
let sidebarNavItems = sidebarNavMobile.querySelectorAll(".nav-header__item");
let prevTarget;

sidebarNavItems.forEach((item) => {
	item.setAttribute("data-nohover", true);

	item.addEventListener("click", (event) => {
		let $this = event.currentTarget;

		if (prevTarget && prevTarget != $this) {
			prevTarget.classList.remove("nav--active");
		}

		$this.classList.toggle("nav--active");
		event.stopPropagation();

		document.body.addEventListener(
			"click",
			() => {
				$this.classList.remove("nav--active");
			},
			{ once: true }
		);

		prevTarget = $this;
	});
});
