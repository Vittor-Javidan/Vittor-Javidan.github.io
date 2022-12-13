menuToggle.addEventListener('click', () => {
	sidebar.classList.toggle('open');
});

navItems.forEach((navItem, index) => {

	customEventListener({
		element: navItem,
		mediaQuery: "(min-width: 1101px)"
	},
	() => {

		if(pages[index].classList.contains('close-page'))
			pages[index].classList.remove('close-page')

		navItem.classList.toggle('active')
		pages[index].classList.toggle('hide-page')
	})
});

redDots.forEach((redDot, index) => {

	customEventListener({
		element: redDot,
		mediaQuery: "(min-width: 1101px)"
	},
	() => {

		navItems[index].classList.toggle('active')
		pages[index].classList.toggle('hide-page')
		pages[index].classList.toggle('close-page')
	})
});

yellowDots.forEach((yellowDot, index) => {

	customEventListener({
		element: yellowDot,
		mediaQuery: '(min-width: 1101px)'
	}, 
	() => {

		navItems[index].classList.toggle('active')
		pages[index].classList.toggle('hide-page')
	})
});

greenDots.forEach((greenDot, index) => {

	customEventListener({
		element: greenDot,
		mediaQuery: '(min-width: 1101px)'
	},
	() => {

		pages.forEach(element => {

			if(pages[index] !== element) {
				element.classList.remove('fullscreen');
			}
		})

		pages[index].classList.toggle('fullscreen')
	})
});
