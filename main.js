import './main.less'
import $ from 'jquery';
import  './src/js/jquery.pagepiling.min.js';

window.$ = $;


 document.querySelector('#burger-btn').addEventListener('click', function(){
     let nav = document.querySelector('.mobile-navigatiion');
     nav.classList.toggle('show');
});


$('#pagepiling').pagepiling();

