$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-dotshead',
  });
  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.header__slider',
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.sport-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
    responsive: [{
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
    responsive: [{
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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
  });

  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
  });

  //Relax slideshow
  $(document).ready(() => {
    $('#slideshow .relax__slider').slick({
      autoplay: true,
      fade: true,
      autoplaySpeed: 2000,
      speed: 1000,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    });
  });

  //kalkulator
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
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

  $('.quantity-button').on('click', function () {
    let summ = $('.night').val() * $('.summ').data('night') + ($('.quest').val() - 1) * $('.summ').data('quest');
    $('.summ').html('€' + summ);
  });

  let summ = $('.night').val() * $('.summ').data('night') + ($('.quest').val() - 1) * $('.summ').data('quest');
  $('.summ').html('€' + summ);

  //shop circle'
  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
  });

  //header__burger
  $(document).ready(function () {
    $('.header__burger, .list-item').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
    });
  });

  //parallax
  $(window).scroll(function (event) {
    let s = $(this).scrollTop();
    let w = $(this).outerWidth();
    let h = $('.content').outerHeight();
    let h_b = $('.parallax').outerHeight();
    let p = s / h * 100;
    let p_b = s / h_b * 100;
    let o = 1 - 1 / 100 * p_b;

    let z_1 = 1 + (w / 10000 * p_b);
    $('.parallax__fog').css('transform', 'scale(' + z_1 + ')');
    $('.parallax__fog').css('opacity', o);

    let z_2 = 1 + (w / 5000000 * p);
    $('.parallax__aqua__1').css('transform', 'scale(' + z_2 + ')');

    let hr = w / 2000 * p_b;
    let z_3 = 1 + (w * 0.000005 * p_b);
    $('.parallax__aqua__2').css('transform', 'translate3d(0' + hr + 'px,0,0) scale(' + z_3 + ')');

    let hr_2 = w / 1500 * p_b;
    let z_4 = 1 + (w * 0.00001 * p_b);
    $('.parallax__aqua__3').css('transform', 'translate3d(0' + hr_2 + 'px,0,0) scale(' + z_4 + ')');
  });
  //Płynne przewijanie strony – smooth scrolling
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top; {
      $('html,body').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });

  //relax-panel__heading
  $(document).ready(function () {
    $('.relax-panel__heading').click(function () {
      $(this).toggleClass('in').next().slideToggle();
    });
  });

});