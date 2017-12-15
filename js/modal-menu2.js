$(function () {

    //    Создание объекта "modal"
    var modal = {
        self: $('#modal-window'),                  // Модульное окно

        showModal: function (content) {     // Показать окно
            this.self.find('#window_inner').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function () {            // Спрятать окно
            this.self.fadeOut(200);
            this.self.find('#window_inner').html('');
        }
    };

    // Обработка события нажатия кнопки вызова меню
    $(".menu-item__btn").on('click', function() {
        var id = $(this).data('id');
        var content = $('#cont' + id).html();
        modal.showModal(content);
    });

    // Обработка события клика на само модульное окно
    $('#modal_window').on('click', function(e) {
        // Проверка объекта клика
        console.log(e.target);
        if($(e.target).attr('id') === 'modal_window' || $(e.target).hasClass('modal-window__close')){
            modal.hideModal();
        }else {
            return false;
        }
    });

});