import './main.less'
import $ from 'jquery';
import  './src/js/jquery.pagepiling.min.js';
import './src/js/slick.min.js'

window.$ = $;


 document.querySelector('#burger-btn').addEventListener('click', function(){
     let nav = document.querySelector('.mobile-navigatiion');
     nav.classList.toggle('show');
});


$('#pagepiling').pagepiling({
    anchors: ['home-page', 'about', 'offers',  'fourthPage', 'lastPage'],
    menu: '#menu',
    // normalScrollElements: '#offers, .element2'
});

$('#reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

