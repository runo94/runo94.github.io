$(document).ready(function(){
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
  });
});

$(document).ready(function(){
  $('.wrapper').on("swipe",function(){
    $('#nav-icon1').toggleClass('open');
  });                       
});