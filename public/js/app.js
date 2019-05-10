$('.js-add-to-cart').on('click', function (event) {
    let headerCart = $('#header-cart');

    event.preventDefault();

    $.get(this.href, function (data) {
        $('#header-cart').html(data);
    });
});