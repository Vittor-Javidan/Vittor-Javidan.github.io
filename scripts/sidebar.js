toggle.addEventListener('click', () => {
	sidebar.classList.toggle('open');
});

navItems.forEach((navItem, index) => {

	navItem.addEventListener('click', () => {

		if(pages[index].classList.contains('close-page'))
			pages[index].classList.remove('close-page')

		navItem.classList.toggle('active')
		pages[index].classList.toggle('hide-page')
	})
});

redDots.forEach((redDot, index) => {

	redDot.addEventListener('click', () => {

		navItems[index].classList.toggle('active')
		pages[index].classList.toggle('hide-page')
		pages[index].classList.toggle('close-page')
	})
});

yellowDots.forEach((yellowDot, index) => {

	yellowDot.addEventListener('click', () => {

		navItems[index].classList.toggle('active')
		pages[index].classList.toggle('hide-page')
	})
});

greenDots.forEach((greenDot, index) => {

	greenDot.addEventListener('click', () => {

		
	})

	greenDot.addEventListener('click', () => {

		
		pages.forEach(element => {
			if(pages[index] !== element)
            	element.classList.remove('fullscreen');
        })

		pages[index].classList.toggle('fullscreen')
        
    });
});