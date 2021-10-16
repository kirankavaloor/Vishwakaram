
$(window).on("load",function(){
 $(".loading").fadeOut(1000, function() {
    $('body').removeClass('loadingbody');
});

})



$.scrollIt({
    topOffset: -50
});