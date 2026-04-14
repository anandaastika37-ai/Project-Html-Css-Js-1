let form = document.getElementById('inputData');

let y = document.getElementById('list')

    if(y.children.length === 0){
        let x = document.createElement('h2')
        x.innerHTML = 'tidak ada list'
        x.classList.add('pemberitahuan')
        y.appendChild(x)
    }

form.addEventListener('submit' , function(event){
event.preventDefault();

    let Nama = document.getElementById('namaku').value;
    let umur = document.getElementById('umur').value;
    let genderinput = document.querySelector('input[name="gender"]:checked').value;
    let date = document.querySelector('input[type="date"]').value;
    let alamat = document.querySelector('textarea').value;
    
    let list = document.getElementById('list');
    let baris = document.createElement('br');
    let notif = document.querySelector('.pemberitahuan');

    if(notif){
        notif.remove()
    }


    function print (){
        let bungkus = document.createElement('div');
        bungkus.classList.add('list');


        let Knama = document.createElement('h2');
        Knama.textContent = Nama ;

        let Kgender = document.createElement('h4');
        Kgender.textContent = genderinput ;

        let Kumur = document.createElement('h4');
        Kumur.textContent = umur ;

        let Kalamat = document.createElement('h5');
        Kalamat.textContent = alamat ;

        let Kdate = document.createElement('h3');
        Kdate.textContent = date ;

        let sampah =document.createElement('span')
        sampah.innerHTML = 'delete'
        sampah.classList.add('material-symbols-outlined')
        sampah.style.cursor = 'pointer'

        sampah.addEventListener('click' , function(){
            bungkus.remove()
        })

        bungkus.appendChild(Knama);
        bungkus.appendChild(Kgender);
        bungkus.appendChild(Kumur);
        bungkus.appendChild(Kdate);
        bungkus.appendChild(Kalamat);
        bungkus.appendChild(sampah)
        list.appendChild(bungkus);

        return bungkus

    }

     print()



    document.getElementById('namaku').value = ""
    document.getElementById('umur').value = ""
    document.querySelector('input[name="gender"]:checked').value || ""
    document.querySelector('input[type="date"]').value = ""
    document.querySelector('textarea').value = ""
    


});





