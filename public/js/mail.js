(function ($) {
    'use strict';
    var form = $('#contactform'),
        message = $('.success'),
        form_data;
    // Success function
    function done_func(response) {
        console.log(response);
        message.fadeIn().removeClass('alert-failed').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 7000);
        $('#sendbtn').text('Odesláno');
        $('.form__select-item input').prop('checked', false);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-failed');
        message.text('Někde se stala chyba!');
        console.log(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 7000);
        $('#sendbtn').text('Odeslat');
    }
    
    form.submit(function (e) {
        console.log('1');
        $('#sendbtn').text('Odesílání');
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);