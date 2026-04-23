function mencarilist(){
    $('#movie').html('')
    $.ajax({
        url: "https://www.omdbapi.com/",
        type: "get",
        dataType: "json",
        data: {
            'apikey' : '415a0a8',
            's' : $('#value').val()
        },
        success: function (hasil) {
            if (hasil.Response == "True"){
                let movie = hasil.Search
                $.each(movie , function (i , data){
                    $('#movie').append(`
            <div class="card m-auto mt-4" style="width: 14rem;">
            <img src="${data.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.Year}</h6>
                <p class="card-text">${data.Type}</p>
                <a class="card-text text-info m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}" id="detail">see detail</a>
                <a href="#" class="btn btn-primary">watch</a>
            </div>
            </div>`)
            $('#value').val('')
                })
            }else{
                $('#movie').html(`<h1 class="text-center mt-5 fs-8">${hasil.Error}</h1>`)
            }
        }
    });
}


$('#tombol-pencari').on('click' ,function(e){
    e.preventDefault();
    mencarilist()
});

$('#value').on('keyup' ,function(e){
    if(e.key ==  "Enter"){
        mencarilist()
    }
})

$('#movie').on('click' ,"#detail",function(){
    
    $.ajax({
        type: "get",
        url: "https://www.omdbapi.com/",
        data: {
            "apikey" : '415a0a8',
            'i' : $(this).data('id')
        },
        dataType: "json",
        success: function (movie) {
            if (movie.Response == 'True') {
                $('.modal-body').html(`
                <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                        <li class="list-group-item"><h2>${movie.Title}</h2></li>
                        <li class="list-group-item">${movie.Year}</li>
                        <li class="list-group-item">${movie.Actors}</li>
                        <li class="list-group-item">${movie.Plot}</li>
                        <li class="list-group-item">${movie.Ratings[0].Value}</li>
                        </ul>
                    </div>
                </div>
                </div>    
                `)
            }
        }
    });
});

