$(function () {
  $('.box1').css({
    'background-color': '#0000ff',
    'height': '100px'
  });
});

$(function () {
  $('.box2').slideDown(500);
});

$(function () {
  $('.box3').slideUp(1000);
});

$(function () {
  $('.box4').show(500);
  $('.box4').css({'background-color': '#ffee00'});
});

$(function () {
  $('.box5').hide(1000);
});

$(function () {
  $('.box6').slideDown(2000, function() {
    $('.box6').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    }).slideUp(2000);
  });
});