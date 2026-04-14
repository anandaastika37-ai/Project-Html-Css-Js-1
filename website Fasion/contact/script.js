let drop = document.getElementById('dropdown');
let menu = document.querySelector('.dropdown')
drop.addEventListener('click' ,  function(){
    if(menu.style.display === 'inline-block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'inline-block'
        menu.classList.add('dropdown-active')
    }
})