$(document).on('turbolinks:load', function(){
  $('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#F79400',
    speed: .25
  });
});