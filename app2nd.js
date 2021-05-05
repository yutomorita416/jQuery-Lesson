$(function () {

  $('.box1').css({
    'background-color': '#0000ff',
    'height': '100px'
  });

  $('.box2').slideDown(1000);

  $('.box3').slideUp(2000);

  $('.box4').show(1000);
  $('.box4').css({'background-color': '#ffee00'});

  $('.box5').hide(2000);

  $('.box6').slideDown(2000, function() {
    $('.box6').css({
      'background-color': '#0000ff',
      'width': '100px',
      'height': '100px'
    }).slideUp(1000);
  });

  $('.box7').mouseover(function() {
    $('.box7').css({'background-color': '#00eeff'});
  });
  $('.box7').mouseout(function() {
    $('.box7').css({'background-color': '#ffa500'});
  });

  $('.box8').mouseover(function() {
    $('.box8').addClass('box8-ext');
  });
  $('.box8').mouseout(function() {
    $('.box8').removeClass('box8-ext');
  });

  $('.box9').on('click', function() {
    $('.box9').addClass('box9-ext');
  });
  $('.box9').mouseout(function() {
    $('.box9').removeClass('box9-ext');
  });

  $('.box0').on('click', function() {
    $(this).slideUp();
  })

  $('button').on('click', function() {
    $('ul').children().css('color', 'red');
  });

});