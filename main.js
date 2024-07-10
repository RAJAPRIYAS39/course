document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// nav-pills
window.onscroll = function() {
    var navpill = document.querySelector(".navpill");
    if (window.pageYOffset > 0) {
        navpill.classList.add("sticky");
    } else {
        navpill.classList.remove("sticky");
    }
};