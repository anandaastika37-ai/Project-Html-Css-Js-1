let startQuis = document.getElementById('start-screen');
let theQuis = document.getElementById('screen-quis');
let theResult = document.getElementById('result-screen');
let tombolstart = document.getElementById('btn-start');
let questext = document.getElementById('theQuestion');
let answerContainer = document.getElementById('answers-container');
let currentQuestionspan = document.getElementById('nomor');
let total = document.getElementById('total-ques');
let poin = document.getElementById('poinn');
let poinAkhir = document.getElementById('poin-akhir');
let poinMax =document.getElementById('poin-maksimal');
let pesan = document.getElementById('pesan-result');
let ulang = document.getElementById('restart');
let progres = document.getElementById('progress');


let pertanyaan = [
    {   
        soal : "Apa ibukota dari provinsi bali",
        jawaban : [
            {text : 'Badung' , correct : false },
            {text : 'Tabanan' , correct : false},
            {text : 'Denpasar' , correct : true},
            {text : 'Karangasem' ,correct : false},
        ]
    },
    {   
        soal : "Apa mata uang dari Indonesia",
        jawaban : [
            {text : 'Rupiah' , correct : true },
            {text : 'Dolar' , correct : false},
            {text : 'Yen' , correct : false},
            {text : 'Baht' ,correct : false},
        ]
    },
    {   
        soal : "Presiden pertama Indonesia adalah",
        jawaban : [
            {text : 'Ir Soekarno' , correct : true},
            {text : 'Joko Widodo' , correct : false},
            {text : 'Prabowo Subianto' , correct : false},
            {text : 'B.J Habibie' ,correct : false},
        ]
    },
    {   
        soal : "Hari kemedekaan Indonesia diperingati pada?",
        jawaban : [
            {text : '1 Juni' , correct : false },
            {text : '17 Agustus' , correct : true},
            {text : '21 April' , correct : false},
            {text : '28 Oktober' ,correct : false},
        ]
    },
    {   
        soal : "Pulau terbesar diIndonesia adalah",
        jawaban : [
            {text : 'kalimantan' , correct : false },
            {text : 'Bali' , correct : false},
            {text : 'Sumatra' , correct : false},
            {text : 'Papua' ,correct : true},
        ]
    },

    
];



let benar = 0;
let score = 0;
let answerDisable = false;

total.textContent = pertanyaan.length;
poinMax.textContent = pertanyaan.length;

tombolstart.addEventListener('click', startQuiz);
ulang.addEventListener('click' , restartQuiz);

function startQuiz(){
    benar = 0;
    score = 0;
    poin.textContent = 0;

    startQuis.classList.remove('active');
    theQuis.classList.add('active');

    showques();
}

function showques(){
    answerDisable = false;
    let currentQuestion = pertanyaan[benar];

    currentQuestionspan.textContent = benar + 1;

    let progrespercent = (benar/pertanyaan.length)*100;
    progres.style.width = progrespercent + '%';

    questext.textContent = currentQuestion.soal;
    answerContainer.innerHTML = "";

    currentQuestion.jawaban.forEach((jawabann) => {
        let pilih = document.createElement('button');
        pilih.textContent = jawabann.text;
        pilih.classList.add('answer-btn');
        pilih.dataset.correct = jawabann.correct;
        pilih.addEventListener('click' ,selectAnswer);
        answerContainer.appendChild(pilih)
    });
}
function selectAnswer(event){
    if(answerDisable)return;
    answerDisable = true;
    let selectButton = event.target;
    let iscorrect = selectButton.dataset.correct === "true";
    Array.from(answerContainer.children).forEach((pilih) =>{
        if(pilih.dataset.correct === "true"){
            pilih.classList.add('benar');
        }
        else if (pilih === selectButton){
            pilih.classList.add('salah');
        }
    });

    if(iscorrect){
        score++;
        poin.textContent = score;
    }

    setTimeout(() => {
        benar++;
        if(benar < pertanyaan.length){
            showques();
        }
        else{
            showres();
        }
    }, 1000);

}

function showres(){
    theQuis.classList.remove('active');
    theResult.classList.add('active');

    poinAkhir.textContent = score;

    let percentage = (score / pertanyaan.length) * 100;

    if(percentage == 100){
        pesan.textContent = "sempurna"
    }
    else if (percentage >= 80) {
        pesan.textContent = "kamu hebat"
    }
    else if (percentage >= 60) {
        pesan.textContent = "lumayan"
    }
    else if (percentage >= 40){
        pesan.textContent = "belajar lagi ye!!"
    }
    else {
        pesan.textContent = "BODOHHH!!"
    }
}

function restartQuiz(){
    theResult.classList.remove('active');

    startQuiz();
}