
$('form').on('submit', function (e) {
   e.preventDefault();
    var pageAdress = $('select').val();

    $.ajax(pageAdress+ '.html', {

        success : function (result) {
            $('.news-set').append(result);
        },
        error: function () {
            $('.news-set').html('Ups...Something is broken=)');
        }
    });
});

