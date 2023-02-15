pages.forEach((page) => {
	page.addEventListener('mousedown', () => {
		pages.forEach((element) => {
			element.classList.remove('SCRIPT_bringFoward')
		})
		page.classList.add('SCRIPT_bringFoward')
	})
})