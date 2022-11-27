function setHeight() {
    const w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    const H = h - 47 + 'px'
    document.getElementsByTagName('iframe')[0].style.height = H;
    console.log('iframe高度：', H)
}

