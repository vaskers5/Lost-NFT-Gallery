document.querySelectorAll('nav a').forEach(link => {
    console.log(link.href, window.location.pathname)
    if (link.href.includes(window.location.pathname)) {
        link.classList.add('active')
    }
})