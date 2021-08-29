$('#nav a').on('click', function(event) {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function() {
    $('.target').each(function() {
        if ($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('#nav a').removeClass('active');
            $('#nav a[href=#' + id + ']').addClass('active');
        }
        if ($('a.option').hasClass('active')) {
            $('a.label').addClass('active');
        }
    });
});

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}