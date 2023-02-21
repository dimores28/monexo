import './main.less'

 document.querySelector('#burger-btn').addEventListener('click', function(){
     let nav = document.querySelector('.mobile-navigatiion');
     nav.classList.toggle('show');
});

