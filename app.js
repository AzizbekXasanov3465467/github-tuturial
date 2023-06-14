const progress = document.querySelector('#progress');

window.addEventListener("scroll", () => {
    let height = document.body.scrollHeight - window.innerHeight;
    let positionScroll = document.documentElement.scrollTop;
    let width = (positionScroll / height ) * 100;
    progress.style.width = `${width}%`;
})

