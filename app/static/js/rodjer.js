window.onload = function() {        // Вызов JS скрипта после загрузки HTML
    $('.btn-show-appointment').click( function () {
        $('.appointment-bg').toggle();
        // $('.nav-block').toggle();
    })
    $('.appointment-bg').click( function () {
        $('.appointment-bg').toggle();
        // $('.nav-block').toggle();
    })
    $('.window-appointment').click( function (event) {
        event.stopPropagation()     //отмена расспространения при нажатии на дочерний класс
    })
}
