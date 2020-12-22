$(function () {
  // адаптивная навигация

  $('.navicon').on('click', function() {
    $(this).toggleClass('active')
    $('.header__nav').toggleClass('active')
  })
  
  // плавная прокрутка к якорю

  $('.slow__link').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
    e.preventDefault();
  });

  // алаптивные изображения в секции works

  setHeight()
  $(window).on('resize', setHeight)
  
  function setHeight() {
    $('.works__item').height($('.works__item').width())
  }
});