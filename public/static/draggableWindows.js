const pages = document.querySelectorAll('.SCRIPT_page')
const dragAreas = document.querySelectorAll('.SCRIPT_draggable')

pages.forEach((page, index) => { 
	makeDraggable({
		element: dragAreas[index],
		parent: page,
	})
})

pages.forEach((page) => {
	page.addEventListener('mousedown', () => {
		pages.forEach((element) => {
			element.classList.remove('SCRIPT_bringFoward')
		})
		page.classList.add('SCRIPT_bringFoward')
	})
})

/**
 * @param {{element: HTML_Element, parent: HTML_Element}} object
 */
function makeDraggable({ element, parent }) {

	let currentX = 0
	let currentY = 0
	let isDragging = false

	element.addEventListener('mousedown', onMouseDown)
	document.addEventListener('mouseup', onMouseUp)
	document.addEventListener('mousemove', onMouseMove)

	function onMouseDown(e) {

		if (parent.classList.contains('fullscreen')) {
			return
		}

		isDragging = true
		currentX = e.clientX
		currentY = e.clientY
	}

	function onMouseUp(e) {

		if (parent.classList.contains('fullscreen')) {
			return
		}

		isDragging = false
	}

	function onMouseMove(e) {

		if (parent.classList.contains('fullscreen')) {
			return
		}

		if (!isDragging) {
			return
		}

		const offsetX = e.clientX - currentX
		const offsetY = e.clientY - currentY

		element.style.top = `${element.offsetTop + offsetY}px`
		element.style.left = `${element.offsetLeft + offsetX}px`
		parent.style.top = `${parent.offsetTop + offsetY}px`
		parent.style.left = `${parent.offsetLeft + offsetX}px`

		currentX = e.clientX
		currentY = e.clientY
	}
}
