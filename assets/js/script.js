$(document).ready(function () {

    /*Funcion para activar tooltips*/
    $('[data-toggle="tooltip"]').tooltip();

    /*Funcion para enviar mensaje en el formulario*/
    $('#contacto button').on('click', function () {
        alert('Tu mensaje fue enviado Exitosamente...');
    });

    /*Funcion para cambiar de color el texto, cuando se pasa el mouse sobre los nav link del navbar, gracias al hover */
    $('.navbar-nav a').hover(function () {
        $(this).css('color', 'blue');
    }, function () {
        $(this).css('color', '');
    });
});