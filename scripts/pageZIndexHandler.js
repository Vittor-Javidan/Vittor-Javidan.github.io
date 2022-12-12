pages.forEach(element => {

    element.addEventListener('click', () => {

        pages.forEach(element => {
            element.classList.remove('zIndex2');
        })

        element.classList.add('zIndex2');
        
    });
    
})
