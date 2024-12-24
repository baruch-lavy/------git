function onBallClick(el) {
    let computedStyle = window.getComputedStyle(el)
    let currentWidth = parseInt(computedStyle.width)
    let currentHeight = parseInt(computedStyle.height)

    el.style.width = (currentWidth + 50) + 'px'
    el.style.height = (currentHeight + 50) + 'px'
    el.innerText = currentWidth + 50

    if(currentWidth >= 400) {
        el.style.width = '100px'
        el.style.height = '100px'
        el.innerText = 100
    }
    
 }
 
 