function tampilAllMenu(){
    $.getJSON('Pizza.json',function(data){
        let menu = data.menu;
        $.each(menu , (i , data) => {
            $('#daftar-menu').append(`<div class="col-md-3 my-3">
                 <div class="card shadow bg-body-secondary" style="width: 18rem;">
                 <img src="gambar pizza/${data.img}" class="card-img-top" alt="..." widht="200px" height="280px">
                 <div class="card-body">
                     <h5 class="card-title text-warning fw-bolder fs-3">${data.nama}</h5>
                     <p class="card-text">${data.deskripsi}</p>
                     <h6 class="text-danger">${data.harga}</h6>
                     <a href="#" class="btn btn-danger mt-3">Buy</a>
                 </div>
                 </div>`);
                 
        });
    });   
}



$('.nav-link').on('click' , function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    $('.text-center').html(kategori);
    if(kategori == "All Menu"){
    tampilAllMenu()
    return;
    }
    $.getJSON('Pizza.json' ,function(data){
        let menu = data.menu;
        let content = '';
        $.each(menu , (i , data) => {
            if(data.kategori == kategori.toLowerCase()){
                content += `<div class="col-md-3 my-3">
             <div class="card shadow bg-body-secondary" style="width: 18rem;">
             <img src="gambar pizza/${data.img}" class="card-img-top" alt="..." widht="200px" height="280px">
             <div class="card-body">
                 <h5 class="card-title text-warning fw-bolder fs-3">${data.nama}</h5>
                 <p class="card-text">${data.deskripsi}</p>
                 <h6 class="text-danger">${data.harga}</h6>
                 <a href="#" class="btn btn-danger mt-3">Buy</a>
             </div>
             </div>
             </div>`
            
            }
        });

    $('#daftar-menu').html(content)
    });
});