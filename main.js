import './main.less'
import $, { each } from 'jquery';
import  './src/js/jquery.pagepiling.min.js';
import './src/js/slick.min.js'

window.$ = $;


 document.querySelector('#burger-btn').addEventListener('click', function(){
     let nav = document.querySelector('.mobile-navigatiion');
     nav.classList.toggle('show');
});

const pageWidth = document.documentElement.scrollWidth;

if (pageWidth > 640) {
  $('#pagepiling').pagepiling({
    anchors: ['home', 'about', 'offers', 'investing', 'provide', 'reviews', 'partners'],
    menu: '#menu',
    verticalCentered: false,
  });
}



$('.screan-shot').on('click', function() {
  $(this).toggleClass('show-screanshot');
});


$('#reviews-slider').on('init', function(event, slick){
  var totalSlides = slick.$slides.length;

  $('.slider-paginatioin__total').text(totalSlides);
});

$('#reviews-slider').slick({
    dots: false,
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px',
        }
      }
    ]
  });



$('#reviews-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider-paginatioin__curent').text(currentSlide + 1);

});

$('#reviews-slider').each(function() {

  var $slide = $('.slide__video');
  var height = $slide.height();

  $('.slide').css('height', height + 'px');
});


$('#reviews-slider').on('setPosition', function(){

  var $slide = $('.slide__video');
  var height = $slide.height();

  $('.slide').css('height', height + 'px');

});

$('.mobile-menu__item').on('click', function() {
  $('.mobile-menu__item').removeClass('active');
  $(this).addClass('active');

  $('#burger-btn').trigger('click');
})

function stepAnimation() {
  let stN = 0;

  setInterval(function(){
    if(stN === 0) {
      for(let i = 1; i < 14; i++) {
        SVG(`#step-${i}`).attr({'fill-opacity': 0});
      }

      stN++;
      return;
    }

    SVG(`#step-${stN}`).attr({'fill-opacity': 0.7});
    stN++;

    if(stN >= 14) {
      stN = 0;
    }
    
  },1000);

}


stepAnimation();
// var rect = SVG('#step-2');
// rect.attr({'fill-opacity': 1});

$('.cards__btn-group button').on('click', function() {
  $('.cards__btn-group button').removeClass('active');
  $(this).addClass('active');
});