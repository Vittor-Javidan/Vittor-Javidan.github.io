pages.forEach(element => {

    element.addEventListener('mousedown', () => {

        pages.forEach(element => {
            element.classList.remove('zIndex2');
        })

        element.classList.add('zIndex2');
        
    });
    
})
