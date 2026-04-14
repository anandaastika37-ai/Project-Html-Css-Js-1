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

$.getJSON('t-shirt.json' , function(data){
    let etalase = data.etalase;
    $.each(etalase ,(i , data) => {
        $('#card-tshirt').append(`<div class="card">
            <img src="gambar baju/${data.gambar}" alt="">
            <h1 class="nama-produk">${data.nama}</h1>
            <h3>- ${data.kategori} -</h3>
            <h2>${data.size}</h2>
            <h4>${data.gender}</h4>
            <h5 class="price-produk">Rp ${data.harga.toLocaleString('id-ID')}</h5>
            <button class="tombol-buy">buy</button>
        </div>`)
    });
})
