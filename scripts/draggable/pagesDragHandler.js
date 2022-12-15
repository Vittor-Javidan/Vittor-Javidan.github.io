pages.forEach((page, index) => {
	makeDraggable({
		element: dragAreas[index],
		parent: page,
	})
})
