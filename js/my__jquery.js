$(function(){

    $('.calculate__this').on('click', function(){
        $('.calculate__this').toggleClass('active');
        
    });

    $('.header__burger').on('click', function(event){
        $('.header__burger, .menu, .burger__inner').toggleClass('active', 1000);
    });
    
    $('.calculate__this').on('click', function(event){
        $('.header__burger, .menu, .burger__inner').toggleClass('active', 1000);
        $('.header__burger, .burger__inner, .contact').toggleClass('hide__some');
    });
    
    $('.popup__close').on('click', function(event){
        $('.header__burger, .burger__inner, .contact').toggleClass('hide__some', 1000);
    });

    $('.popup__area').on('click', function(event){
        $('.header__burger, .burger__inner, .contact').removeClass('hide__some', 1000);
    });
    
})