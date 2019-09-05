$(document).on('turbolinks:load', function(){
  //新規作成時のバリデーションの追加
  $('.question_form__btn').on('click',function(e){
    reset();
    var $form = $(this).parents('.question_form');
    QuestionValid($form);
    AnswerValid($form);
    DummyValid($form);
    URLValid($form);
    if($form.find('p').hasClass('sign-error')){
      e.preventDefault();
      $('#register-btn').removeAttr("data-disable-with");
    }
  });

  function reset(){
    $('.sign-error').remove();
    $('.error-box').removeClass('error-box');
  };
  function Empty($element){
    $element.addClass('error-box');
    $element.parent().append('<p class="sign-error">入力してください</p>');
  };

  function QuestionValid($form){
    var $element = $form.find('.a_question');
    var value = $element.val();
    if(value == ''){
      Empty($element);
    }else if(value.length > 200){
      $element.addClass('error-box');
      $element.parent().append('<p class="sign-error">入力は200字以内にしてください</p>');
    }
  };
  function AnswerValid($form){
    var $element = $form.find('.a_answer');
    var value = $element.val();
    if(value == ''){
      if($form.hasClass('yn_form')){
        $element.addClass('error-box');
        $element.parent().append('<p class="sign-error">選択してください</p>');
      }else{
        Empty($element);
      }
    }else if(value.length > 500){
      $element.addClass('error-box');
      $element.parent().append('<p class="sign-error">入力は500字以内にしてください</p>');
    }
  };
  function DummyValid($form){
    var $element = $form.find('.a_dummy');
    $element.each(function(){
      var value = $(this).val();
      if(value == ''){
        $(this).addClass('error-box');
        $(this).parent().after('<p class="sign-error">選択してください</p>');
      }else if(value.length > 500){
        $(this).addClass('error-box');
        $(this).parent().after('<p class="sign-error">入力は500字以内にしてください</p>');
      }
    });
  };
  function URLValid($form){
    var $element = $form.find('.a_link');
    $element.each(function(){
      var value = $(this).val();
      if(!value == "" && !value.match(/(http|https)\:\/\/([\w-]+\.).+/)){
        $(this).addClass('error-box');
        $(this).parent().after('<p class="sign-error">正しいURLを入力してください</p>');
      }else if(value.length > 150){
        $(this).addClass('error-box');
        $(this).parent().after('<p class="sign-error">入力は150字以内にしてください</p>');
      }
    });
  }

  //フォームの削除ボタン
  $(document).on('click','.cancel_btn',function(){
    var $block = $(this).parent();
    if($block.next().hasClass('sign-error')){
      $block.next().remove();
    }
    var reg = location.href
    if(reg.match('/questions/new')){
      $block.remove();
    }else{
      $block.css('display','none');
      $block.find('.dummy_delete input').prop('checked', true);
      $block.find('.link_delete input').prop('checked', true);
    }
  });
});