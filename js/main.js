
$(window).on("load",function(){
 $(".loading").fadeOut(1000, function() {
    $('body').removeClass('loadingbody');
});

})

$(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});

$.scrollIt({
    topOffset: -50
});