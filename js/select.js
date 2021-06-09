$('.select').on('click', function(e) {
    $(this).toggleClass('select_active');
});

$('.select__option').on('click', function(e) {
    $(this).parent('.select__options').parent('.select').children('.select__value').text($(this).text());
})