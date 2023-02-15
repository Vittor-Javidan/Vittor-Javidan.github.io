pages.forEach((page) => {
	page.addEventListener('mousedown', () => {
		pages.forEach((element) => {
			element.classList.remove('SCRIPT_bringFoward')
            element.classList.add('SCRIPT_bringBack')
		})
		page.classList.add('SCRIPT_bringFoward')
        page.classList.remove('SCRIPT_bringBack')
	})
})