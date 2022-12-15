/**
 * @param {{element: HTML_Element, callback: Function}} object
 */
function errorHandlerEventListener({ element, callback }) {
	// check if the callback is a function
	if (typeof callback !== 'function') {
		throw new Error(
			'customEventListener ERROR: The "callback" parameter must be a function.'
		)
	}

	// check if the element has the addEventListener method
	if (!element.addEventListener) {
		throw new Error(
			'customEventListener ERROR: The "element" parameter must have the addEventListener method.'
		)
	}
}

/**
 * @param {{element: HTML_Element, mode: string, mediaQuery: string}} object
 * @param {Function} callback
 * @param Default mode = "click", mediaQuery = "(min-width: 0px)"
 */
function customEventListener(
	{ element, mode = 'click', mediaQuery = '(min-width: 0px)' },
	callback
) {
	errorHandlerEventListener({ element, callback })

	element.addEventListener(mode, () => {
		if (window.matchMedia(mediaQuery).matches) {
			if (typeof callback === 'function') callback()
		}
	})
}
