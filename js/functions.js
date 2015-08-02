$('document').ready(function(){
    $('.eng').on('click', function(e){      
        // отменяем стандартное действие при клике
        e.preventDefault();
        // Получаем адрес страницы
        var href = $(this).attr('href');
        // Передаем адрес страницы в функцию
        getContent(href, true);
    });
});

// Добавляем обработчик события popstate, 
// происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
    // Передаем текущий URL
    getContent(location.pathname, false);
});

// Функция загрузки контента
function getContent(url, addEntry) {
    $.get(url).done(function(data) {
        // Обновление только текстового содержимого в сером блоке
        $('#content').html($(data).find("#content").html());
        // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
        // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
        if(addEntry == true) {
            // Добавляем запись в историю, используя pushState
            history.pushState(null, null, url); 
        }
    });
}























function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $(".right").css({
        height: vph + "px"
    })
}
$(document).ready(function() {
    resizeDiv()
});
window.onresize = function(e) {
    resizeDiv()
};

