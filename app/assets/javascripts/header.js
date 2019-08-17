$(document).on('turbolinks:load', function(){
  $('.menu_icon').hover(function(){
    $('.header__menu').show();
    $('.header__menu').hover(function(){
      $(this).show();
    },function(){
      $(this).hide();
    });
  },function(){
    $('.header__menu').hide();
  });
  $('.menu_icon').on('click',function(){
    if($('.header__menu').css('display') == 'none'){
      $('.header__menu').show();
    }else{
      $('.header__menu').hide();
    }
  });
});