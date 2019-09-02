
/**
 *
 */
function wrapImages() {
    var images = document.querySelectorAll('.articlecontent > p > img')

    images.forEach(img => {
        // wrap image
        var wrapper = document.createElement('div')
        wrapper.className = 'imagewrapper'
        img.parentNode.className += ' imageparagraph'
        img.parentNode.appendChild(wrapper)
        img.parentNode.removeChild(img)
        wrapper.appendChild(img)

        if (!img.alt) return

        // append caption to wrapper
        var caption = document.createElement('div')
        caption.className = 'imagewrapper_caption'
        caption.innerHTML = img.alt
        wrapper.appendChild(caption)
    })
}
