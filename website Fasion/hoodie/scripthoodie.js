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

$.getJSON('hoodie.json' , function(respon){
    let etalase = respon.etalase;
    $.each(etalase , (i ,respon) => {
        $('#hoodie-card').append(`<div class="card">
            <img src="hoodieimg/${respon.gambar}" alt="">
            <h1 class="nama-produk">${respon.nama}</h1>
            <h3>- ${respon.kategori} -</h3>
            <h2>${respon.size}</h2>
            <h4>${respon.gender}</h4>
            <h5 class="price-produk">Rp ${respon.harga.toLocaleString('id-ID')}</h5>
            <button class="tombol-buy">buy</button>
        </div>`)
    });
})