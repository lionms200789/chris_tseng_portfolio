
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const preloader = document.querySelector('.preloader-wrap');
        preloader.style.opacity = 0;

        setTimeout(() => {
            document.body.removeChild(preloader)
        }, 650);
    }
};