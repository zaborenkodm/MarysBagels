$('.footer-email__btn').click(function () { // Вызываем функцию по нажатию кнопки
    var popup_id = $('#' + $(this).attr("rel")); // Связывем rel и popup_id
    $(popup_id).show(); // Открываем окно
    $('.overlay-popup').show(); // Открываем блок заднего фона
});
$('.overlay-popup').click(function () { // Обрабатываем клик по заднему фону
    $('.overlay-popup, .form-email').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});