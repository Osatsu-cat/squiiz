$(document).on('turbolinks:load', function(){
  $('.question_box').fadeIn('slow');
  $('div.a__hide').on('click',function(){
    if(!$('#test_answer').length){
      $('.test_container').attr('id', 'test_answer');
      $('.question_box__a__content').slideDown();
    }
  });
  $('.correct_btn').on('click',function(){
    $(this).parent().css('display','none');
    $('.next_btn').fadeIn('fast');
    $('.next_btn').css('display','block');
  });
  $('.next_btn').on('click',function(){
    $('.test_container').removeAttr('id', 'test_answer');
    $(this).parent().css('display','none');
    $('.result_box').css('display','flex');
    $('.next_btn').css('display','none');
    $('.question_box').css('display','none');
    $('.question_box').fadeIn();
  });
});
