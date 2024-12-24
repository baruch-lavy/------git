function onBallClick(el) {
    let computedStyle = window.getComputedStyle(el)
    let currentWidth = parseInt(computedStyle.width)
    let currentHeight = parseInt(computedStyle.height)

    el.style.width = (currentWidth + getRandomInt(20, 60)) + 'px'
    el.style.height = (currentHeight + getRandomInt(20, 60)) + 'px'
    el.style.backgroundColor = getRandomColor()
    el.innerText = currentWidth


    if (currentWidth >= 400) {
        el.style.width = '100px'
        el.style.height = '100px'
        el.innerText = 100
    }

}

