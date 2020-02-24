$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-dotshead',
});
$('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.header__slider',
});

$('.sport-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
    responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        },
        {
          breakpoint: 435,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },
    ]
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.sport-slider',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          },
    ]
});

$('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
})

$('.relax__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
})

$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/relax/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/relax/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
    let summ  = $('.night').val() * $('.summ').data('night') + ($('.quest').val() -1) * $('.summ').data('quest');
    $('.summ').html('€' + summ);
});

let summ  = $('.night').val() * $('.summ').data('night') + ($('.quest').val() -1) * $('.summ').data('quest');
$('.summ').html('€' + summ);

$('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
});

//---срабатывание бургера---//
$('.menu-btn').on('click', function(){
    $('.menu').toggleClass('active');
})

});