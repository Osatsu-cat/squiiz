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
      seconds : minute * 60,
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
      $('#now').find('.judge').append('タイムアップ！');
      $('#now').find('.yn_answer__btn').prop("disabled", true);
      $('#now').find('.correct_btn').prop("disabled", true);
      $('.next_btn').css('display','block');
      var questionId = $('#now').find('.question_id').text().replace(/\n/g, "");
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 0, n_count: 1, last: "時間切れ"},
        dataType: 'json'
      })
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
  $('.question_box').first().attr('id','now');

  // 記述問題
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
    var answer = $(this).parents('.question_box').find('textarea').val();
    if(yn == "⭕"){
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 1, n_count: 0, last: answer},
        dataType: 'json'
      })
    }else{
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 0, n_count: 1, last: answer},
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

  // 選択問題
  //選択肢クリック&解答表示
  $('.select_answer__choice').on('click',function(){
    $(this).prop("disabled", true);
    $(this).siblings().prop("disabled", true);
    $(this).css({'border':'1px solid rgb(250, 148, 148)','background':'rgba(250, 148, 148, 0.363)'});
    var $box = $(this).parents('.question_box');
    var judge = $(this).attr("data-judge");
    var answer = $(this).text();
    var questionId = $(this).parents('.question_box').find('.question_id').text().replace(/\n/g, "");
    if(judge == "true"){
      $box.find('.judge').append('正解です！');
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 1, n_count: 0, last: answer},
        dataType: 'json'
      })
    }else{
      $box.find('.judge').append('不正解です。。');
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 0, n_count: 1, last: answer},
        dataType: 'json'
      })
    }
    showAnswer();
    $('#reset_btn').trigger("click");
    $box.find('.next_btn').css('display','block');
  });

  //◯×問題
  //◯×選択&解答表示
  $('.yn_answer__btn').on('click',function(){
    $(this).prop("disabled", true);
    $(this).siblings().prop("disabled", true);
    var $box = $(this).parents('.question_box');
    var answer = $(this).text();
    var correct = $box.find('.match_correct').find('span').text();
    var questionId = $(this).parents('.question_box').find('.question_id').text().replace(/\n/g, "");
    if(correct.indexOf(answer) !== -1){
      $box.find('.judge').append('正解です！');
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 1, n_count: 0, last: answer},
        dataType: 'json'
      })
    }else{
      $box.find('.judge').append('不正解です。。');
      console.log(correct);
      console.log(answer);
      $.ajax({
        type: 'post',
        url: "/questions/count",
        data: {id: questionId, y_count: 0, n_count: 1,last: answer},
        dataType: 'json'
      })
    }
    $box.find('.match_yours').append(answer);
    showAnswer();
    $('#reset_btn').trigger("click");
    $box.find('.next_btn').css('display','block');
  });


  //「次へ進む」
  $('.next_btn').on('click',function(e){
    Reset();
    $(this).parents('.question_box').hide();
    var index = $('.question_box').index($('#now'));
    var num = $('.question_box').length;
    if(index + 1 == num){
      $('.complete_modal').fadeIn();
    }else{
      $('#now').removeAttr('id','now');
      $(this).parents('.question_box').next().fadeIn();
      $(this).parents('.question_box').next().attr('id','now');
      $('#reset_btn').trigger("click");
    }
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

