$(document).on('turbolinks:load', function(){
  // $('.mypage_tab').on('click', function(){
  //   if(!$(this).hasClass('mypage_tab-select')){
  //     $(this).siblings().removeClass('mypage_tab-select');
  //     $(this).addClass('mypage_tab-select');
  //   }
  // });

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
  var reg = location.href
  if(reg.match('/questions/new')){
    $('.mypage_bar').find('li').eq(1).addClass('mypage_bar__menu-select');
  }else if (reg.match('/users/edit')){
    $('.mypage_bar').find('li').eq(2).addClass('mypage_bar__menu-select');
  }else{
    $('.mypage_bar').find('li').eq(0).addClass('mypage_bar__menu-select');
  }

  //問題の編集・リンクの追加
  function addLink(i){
    var html = `<input class="question_form__box" type="text" name="question[cfs_attributes][${i + 1}][link]" id="question_cfs_attributes_${i + 1}_link">`
    return html
  }
  var link_form = `<input class="question_form__box question_form__box-short" type="text" name="cfs[link]" id="cfs_link">`
  $('#add_cf').on('click',function(){
    var value = $('.link_form').find('input').last().val();
    var index = $('.link_form').find('input').last().index('.link_form input');

    if(value != ""){
      $('.link_form').append(addLink(index));
    }
  });

  $('.link_form').on('click', '.link_delete', function() {
    var inputId = $(this).data('id');
    var defaultData = $(this).data('default');
    if (defaultData == 'default') {
      $(this).prev().prop('checked', true);
      $('#add_member_' + inputId).hide();
    }else{
      $('#add_member_' + inputId).remove();
    }
  });

  // $('.question_delete').on('click',function(e){
  //   e.preventDefault();

  // });
});