var span = document.getElementById("number");

window.addEventListener("scroll", () => {

    let galleryHeight = document.documentElement.scrollHeight - window.innerHeight;

    let scrolled = window.scrollY

    let onePercent = galleryHeight / 100;

    let percentage = Math.round(scrolled / onePercent);

    span.innerHTML = percentage;

});
