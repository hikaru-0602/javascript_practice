const quiz=[
    {
        question: '2+2=',
        answers: [
            '1','2','5','4'
        ],
        correct: '4'
    },{
        question: '伊藤研究室自主ゼミのリーダーは',
        answers: [
            '齊藤輝',
            'トドメ',
            'トラ',
            'あつしさん'
        ],
        correct: '齊藤輝'
    },{
        question: 'ひかるの最近のご飯のおかずは',
        answers: [
            'ウィンナー',
            'カレー',
            'ふりかけ',
            '納豆'
        ],
        correct: 'ふりかけ'
    }
]

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
        $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
        btnIndex++;
    }
};

const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
        init();
    } else {
        // $window.alert('クイズ終了！');
        showEnd();
    }
};

const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
        $window.alert('正解!');
        score++;
    } else {
        $window.alert('不正解!');
    }
    goToNext();
};

const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';  
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
        judge(e.target);
    });
    answersIndex++;
    }


    fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=<e071fd2ff00042f3d4b9b86ab6dc9066>&language=en-US&region=US&page=1"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // 取得したJSONデータの処理
          console.log(data);
        })
        .catch((error) => {
          // エラー発生時の処理
          console.log("error");
        });