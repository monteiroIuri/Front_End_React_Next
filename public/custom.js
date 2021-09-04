$(function(){
    $('.menu-btn').click(function(){
        $('.navbars .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.navbars .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
});