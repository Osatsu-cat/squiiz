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
  
});