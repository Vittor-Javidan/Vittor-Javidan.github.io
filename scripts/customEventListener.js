function customEventListener({
    element,
    mode = 'click',
    mediaQuery = '(min-width: 0px)'
    }, callback) {

        // check if the callback is a function
        if (typeof callback !== 'function') {
            throw new Error('customEventListener ERROR: The "callback" parameter must be a function.');
        }
    
        // check if the element has the addEventListener method
        if (!element.addEventListener) {
            throw new Error('customEventListener ERROR: The "element" parameter must have the addEventListener method.');
        }
    
        // check if the window has the matchMedia method
        if (!window.matchMedia) {
            throw new Error('customEventListener ERROR: The "window" object must have the matchMedia method.');
        }

        element.addEventListener(mode, () => {

            if(window.matchMedia(mediaQuery).matches) {

                if(typeof callback === 'function')
                    callback()
        }
    })
}