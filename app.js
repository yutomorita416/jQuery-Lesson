$(function (){
  $('.box1').slideDown(2000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '200px',
      'width': '200px'
    }).slideUp(2000);
  });
});

$(function(){
  $('.box2').mouseover(function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});

$(function(){
  $('.box3').on('click', function(){
    $('.box3').addClass('box3-ext');
  });
  $('.box3').mouseout(function(){
    $('.box3').removeClass('box3-ext');
  });
});