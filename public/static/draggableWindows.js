pages.forEach((page, index) => { 
	makeDraggable({
		draggableArea: dragAreas[index],
		target: page,
	})
})

/**
 * @param {{draggableArea: HTML_Element, target: HTML_Element}} object
 */
function makeDraggable({ draggableArea, target }) {

	let currentX = 0
	let currentY = 0
	let isDragging = false

	draggableArea.addEventListener('mousedown', onMouseDown)
	document.addEventListener('mouseup', onMouseUp)
	document.addEventListener('mousemove', onMouseMove)

	function onMouseDown(e) {

		if (target.classList.contains('fullscreen')) {
			return
		}

		isDragging = true
		currentX = e.clientX
		currentY = e.clientY
	}

	function onMouseUp(e) {

		if (target.classList.contains('fullscreen')) {
			return
		}

		isDragging = false
	}

	function onMouseMove(e) {

		if (target.classList.contains('fullscreen')) {
			return
		}

		if (!isDragging) {
			return
		}

		const offsetX = e.clientX - currentX
		const offsetY = e.clientY - currentY

		draggableArea.style.top = `${draggableArea.offsetTop + offsetY}px`
		draggableArea.style.left = `${draggableArea.offsetLeft + offsetX}px`
		target.style.top = `${target.offsetTop + offsetY}px`
		target.style.left = `${target.offsetLeft + offsetX}px`

		currentX = e.clientX
		currentY = e.clientY
	}
}
