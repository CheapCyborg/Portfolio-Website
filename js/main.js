$(document).ready(function () {
    $('#view-work').on('click', function () {
        const images = $('#images').position().top;

        $('html, body').animate({
            scrollTop: images
        }, 900);
    });

});

function flipPicture() {
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
}

var clicked = 0;
function openNav() {
    if ($(window).width() <= 800) {
        document.getElementById("mySidenav").style.width = "150px";
    } else {
        document.getElementById("mySidenav").style.width = "250px";
    }
    clicked++;
    if(clicked == 2){
        closeNav();
        clicked = 0;
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function changeMenu(x) {
    x.classList.toggle("change");
}
