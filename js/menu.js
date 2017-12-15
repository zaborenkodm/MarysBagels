$(function () {
    $('.main-menu__toggle').on('click', function () {
        $('.main-list').slideToggle(300);
    });

    $('.footer-menu__toggle').on('click', function () {
        $('.footer-list').slideToggle(300);
    });
});