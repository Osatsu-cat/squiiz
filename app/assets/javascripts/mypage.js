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
      $(this).animate({'left': '100px'}, 300);
      $('.mypage_bar').animate({'left': 0}, 300);
      $(this).find('.fa-chevron-right').hide();
      $(this).find('.fa-chevron-left').show();
      console.log("GO");
    }else{
      $(this).animate({'left': 0 }, 300);
      $('.mypage_bar').animate({'left': '-100px'}, 300);
      $(this).find('.fa-chevron-left').hide();
      $(this).find('.fa-chevron-right').show();
      console.log("BACK");
    }
  });
});