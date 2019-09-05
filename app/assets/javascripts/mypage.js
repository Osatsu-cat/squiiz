$(document).on('turbolinks:load', function(){
  // $('.mypage_tab').on('click', function(){
  //   if(!$(this).hasClass('mypage_tab-select')){
  //     $(this).siblings().removeClass('mypage_tab-select');
  //     $(this).addClass('mypage_tab-select');
  //   }
  // });
  var reg = location.href
  //選択中のドロップダウンメニューの表示
  $('.dropdown-menu .dropdown-item').click(function(){
    var visibleItem = $('.dropdown-toggle', $(this).closest('.dropdown'));
    var order = $(this).val();
    visibleItem.text(order);
    if (order == '問題番号順'){
      $('.asc').show();
      $('.user').hide();
    }else{
      $('.asc').hide();
      $('.user').show();
    }
  });

  //マイページメミューの表示(スマホ)
  $('.mypage_slide').on('click',function(){
    if($('.fa-chevron-right').css('display') == 'inline-block'){
      $(this).animate({'left': '150px'}, 300);
      $('.mypage_bar').animate({'left': 0}, 300);
      $(this).find('.fa-chevron-right').hide();
      $(this).find('.fa-chevron-left').show();
      console.log("GO");
    }else{
      $(this).animate({'left': 0 }, 300);
      $('.mypage_bar').animate({'left': '-150px'}, 300);
      $(this).find('.fa-chevron-left').hide();
      $(this).find('.fa-chevron-right').show();
      console.log("BACK");
    }
  });
  
  // マイページの選択中の色付け
  if(reg.match('/questions/new')){
    $('.mypage_bar').find('li').eq(1).addClass('mypage_bar__menu-select');
  }else if (reg.match('/users/edit')){
    $('.mypage_bar').find('li').eq(2).addClass('mypage_bar__menu-select');
  }else{
    $('.mypage_bar').find('li').eq(0).addClass('mypage_bar__menu-select');
  }

  //問題の作成時のタイプ選択
  if(reg.match('/questions/new')){
    $('.q_type').on('click',function(){
      var type = $(this).text();
      $('.q_type').removeClass('q_type-select');
      $('.question_form').hide();
      $(this).addClass('q_type-select');
      if(type == '記述式'){
        $('.text_form').show();
      }else if(type == '選択式'){
        $('.select_form').show();
      }else{
        $('.yn_form').show();
      }
    })
    //選択問題・ダミーの削除ボタン除去
    var $dummy = $('.select_form').find('.dummy_form').first();
    $dummy.find('.cancel_btn').css('display','none');
  }

  //問題の編集・リンクの追加
  function addLink(i){
    var html = `
                <div class="link_form">
                  <input class="question_form__box a_link" type="text" name="question[cfs_attributes][${i}][link]" id="question_cfs_attributes_${i}_link">
                  <div class="cancel_btn">
                    <i class="fa fa-trash"></i>
                    削除
                  </div>
                </div>
                `
    return html
  }
  $('.add_cf').on('click',function(){
    var $form = $(this).parent().find('.link_form');
    if($form.length == 0){
      $(this).parent().append(addLink(0));
    }else{
      var value = $form.find('input').last().val();
      var index = $form.find('input').last().index('.link_form input');
      if(value != ""){
        $form.parent().append(addLink(index + 1));
      }
    }
  });

  $('.link_form').on('click', '.link_delete', function() {
    var inputId = $(this).data('id');
    var defaultData = $(this).data('default');
    if (defaultData == 'default') {
      $(this).prev().prop('checked', true);
    }
  });

  //選択式問題の解答追加
  function addDummy(i){
    var html = `<div class="dummy_form">
                  <input class="question_form__box a_dummy" type="text" name="question[dummies_attributes][${i + 1}][answer]" id="question_dummies_attributes_${i + 1}_answer">
                  <div class="cancel_btn">
                    <i class="fa fa-trash"></i>
                    削除
                  </div>
                </div>
              `
    return html
  }
  $('.add_dummy').on('click',function(){
    var $block =  $(this).parent();
    var $form = $block.find('.dummy_form');
    var value = $form.find('input').last().val();
    var index = $form.find('input').last().index('.dummy_form input');
    if(value != ""){
      $block.append(addDummy(index));
    }
  });

  //◯×問題の解答選択
  $('.yn_btn').on('click',function(){
    $(this).css('background','white');
    $(this).siblings().css('background','rgba(27, 27, 27, 0.315)');
    var text = $(this).text();
    if(text == '⭕'){
      $(this).parents('.q_field').find('.yn_value').prop('value','⭕️');
    }else{
      $(this).parents('.q_field').find('.yn_value').prop('value','❌');
    }
  });

  //◯×問題編集時の選択中の表示
  if(reg.match(/\d.\/edit/)){
    var value = $('.yn_value').val();
    if(value == '⭕️'){
      $('.yn_box').find('.yn_btn').first().css('background','white');
    }else{
      $('.yn_box').find('.yn_btn').next().css('background','white');
    }
  }
});