const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const containerButton = document.getElementsByClassName('container-button')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    containerButton.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
        } else {
        scrollToTopBtn.style.display = 'none';
        }
    }

    scrollToTopBtn.addEventListener('click', function () {
        document.documentElement.scrollTop = 0; 
    });
});
