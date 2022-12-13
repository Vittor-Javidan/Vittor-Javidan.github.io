function customEventListener({
    element,
    mode = 'click',
    mediaQuery = '(min-width: 0px)'
}, callback) {

element.addEventListener(mode, () => {

    if(window.matchMedia(mediaQuery).matches) {

        if(typeof callback === 'function')
            callback()
    }
})
}