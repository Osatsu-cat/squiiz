$(document).on('turbolinks:load', function(){
  $('.setTime_modal').show();
  $('#setTime_btn').on('click',function(){
    $('.setTime_modal').hide();
    var minute = $('.setTime_modal__box input').val();
    if(minute == ""){
      minute = 1;
    }
    //タイマー設置
    $("#future_date").countdowntimer({
      minutes : minute,
      size : "md",
      displayFormat : "MS",
      borderColor: "#F09400",
      fontColor: "#FFFFFF",
      backgroundColor: "#F09400",
      stopButton: "reset_btn",
      timeUp : timeisUp
    });
    // タイムアップ(プラグイン)
    function timeisUp() {
      showAnswer();
      $('#reset_btn').trigger("click");
    }

    //タイプアップ(自前)
    // setInterval(function(){
    //   if($('#future_date').text() == "00:00"){
    //     showAnswer();
    //     $('#reset_btn').trigger("click");
    //   }
    // }, 3000);
  });
  // 問題BOX表示
  $('.question_box').first().fadeIn('slow');

  //解答表示
  $('div.a__hide').on('click',function(){
    showAnswer();
    $('#reset_btn').trigger("click");
  });
  //◯×回答
  $('.correct_btn').on('click',function(){
    $(this).parent().css('display','none');
    $(this).parents('.question_box__a__content').find('.accuracy_count').hide();
    $('.next_btn').fadeIn('fast');
    $('.next_btn').css('display','block');
    var yn = $(this).text();
    var questionId = $(this).parents('.question_box').find('.question_id').text().replace(/\n/g, "");
    if(yn == "⭕"){
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
        data: {id: questionId, y_count: 0, n_count: 1, accuracy: -1},
        dataType: 'json'
      })
    }
    var $current_box = $(this).parents('.question_box')
    var index = $('.question_box').index($current_box);
    var num = $('.question_box').length;
    if(index+1 == num){
      $('.complete_modal').fadeIn();
    }
  });
  //「次へ進む」
  $('.next_btn').on('click',function(e){
    Reset();
    $(this).parents('.question_box').hide();
    $(this).parents('.question_box').next().fadeIn();
    $('#reset_btn').trigger("click");
  });
  //全問解答後
  $('.again_btn').on('click',function(){
    $('.complete_modal').hide();
  })
  //問題BOXのviewリセット
  function Reset(){
    $('.test_container').removeAttr('id', 'test_answer');
      $('.question_box__a__content').css('display','none');
      $('.result_box').css('display','flex');
      $('.accuracy_count').show();
      $('.next_btn').css('display','none');
      $('.question_box').css('display','none');
  };
  //解答表示
  function showAnswer(){
    if(!$('#test_answer').length){
      $('.test_container').attr('id', 'test_answer');
      $('.question_box__a__content').slideDown();
    }
  };
});

