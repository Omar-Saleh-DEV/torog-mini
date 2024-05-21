document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});


var countDownDate = new Date("May 30, 2024 00:00:00").getTime();


var countdownfunction = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// FAQ dropdown 

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
            if (activeItem !== faqItem) {
                activeItem.classList.remove('active');
            }
        });

        faqItem.classList.toggle('active');
    });
});