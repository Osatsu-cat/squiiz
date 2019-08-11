$(document).on('turbolinks:load', function(){
  $('.question_box').first().fadeIn('slow');
  $('div.a__hide').on('click',function(){
    if(!$('#test_answer').length){
      $('.test_container').attr('id', 'test_answer');
      $('.question_box__a__content').slideDown();
    }
  });
  $('.correct_btn').on('click',function(){
    $(this).parent().css('display','none');
    $(this).parents('.question_box__a__content').find('.accuracy_count').hide();
    $('.next_btn').fadeIn('fast');
    $('.next_btn').css('display','block');
    var yn = $(this).text();
    var questionId = $(this).parents('.question_box').find('.question_id').text().replace(/\n/g, "");
    if(yn == "⭕️"){
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 1, n_count: 0, accuracy: 1},
        dataType: 'json'
      })
    }else{
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 0, n_count: 0, accuracy: -1},
        dataType: 'json'
      })
      .done(function(user){
        console.log('OK!');
      })
    }
    var $current_box = $(this).parents('.question_box')
    var index = $('.question_box').index($current_box);
    var num = $('.question_box').length;
    if(index+1 == num){
      $('.complete_modal').fadeIn();
    }
  });

  $('.next_btn').on('click',function(e){
    Reset();
    $(this).parents('.question_box').hide();
    $(this).parents('.question_box').next().fadeIn();
  });

  $('.again_btn').on('click',function(){
    $('.complete_modal').hide();
  })

  function Reset(){
    $('.test_container').removeAttr('id', 'test_answer');
      $('.question_box__a__content').css('display','none');
      $('.result_box').css('display','flex');
      $('.accuracy_count').show();
      $('.next_btn').css('display','none');
      $('.question_box').css('display','none');
  };
});

