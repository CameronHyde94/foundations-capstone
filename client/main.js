const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

$(document).on('click', '.menu-link-js', function(e) {
    e.preventDefault();

    var $self = $(this);
    $('.menu-link-js').removeClass('color-primary');
    $self.addClass('color-primary');
    var target = $(this).attr('href');

    $('.menu-tab-js').hide();
    $(target).fadeIn();
});


