let tambah = document.getElementById('form-pendaftar')

tambah.addEventListener('submit' , function(event){
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let umur = document.getElementById('umur').value;
    let jurusan = document.getElementById('jurusan').value;

    let data = document.getElementById('data');

    let baris = document.createElement('tr');

    let knama = document.createElement('td');
    let kumur = document.createElement('td');
    let kjurusan = document.createElement('td');

    knama.textContent = nama
    kumur.textContent = umur
    kjurusan.textContent = jurusan

    baris.appendChild(knama)
    baris.appendChild(kumur)
    baris.appendChild(kjurusan)

    data.appendChild(baris)
    
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("jurusan").value = "";


});
