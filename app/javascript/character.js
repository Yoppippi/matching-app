function character() {

  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const current = document.querySelector('#current');
  const extra = document.querySelector('#extra');
  const nervous = document.querySelector('#nervous');
  const honesty = document.querySelector('#honesty');
  const harmony = document.querySelector('#harmony');
  const openness = document.querySelector('#openness');

  const quizSet = [
    {q: '知らない人とすぐ話ができる', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: 'パーティや社交イベントを企画する', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '落ち込んだり憂鬱になったりする', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: 'ストレスを感じたり不安になったりする', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: 'かなり前から準備する', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: 'ものごとの整理が得意', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '人が幸せかどうか気にかかる', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '人の悪口は一切言わない', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '他の人の気持ちを思いやる', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '絵画などの制作、著述、音楽を作る', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '哲学的、精神的な問題を考える', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    {q: '難しい言葉を使う', c: ['きわめてあてはまる', 'ややあてはまる', 'どちらでもない', 'ややあてはまらない', 'きわめてあてはまらない']},
    
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;
  let extraScore = 0;
  let nervousScore = 0;
  let honestyScore = 0;
  let harmonyScore = 0;
  let opennessScore = 0;

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    // 点数の加算処理 ---------------------------
    switch (quizSet[currentNum].q){
      case quizSet[0].q:
      case quizSet[1].q:
        switch (li.textContent) {
          case quizSet[currentNum].c[0]:
            extraScore += 5
            break;
          case quizSet[currentNum].c[1]:
            extraScore += 4
            break;
          case quizSet[currentNum].c[2]:
            extraScore += 3
            break;
          case quizSet[currentNum].c[3]:
            extraScore += 2
            break;
          case quizSet[currentNum].c[4]:
            extraScore += 1
            break;
        }
        break;
      case quizSet[2].q:
      case quizSet[3].q:
        switch (li.textContent) {
          case quizSet[currentNum].c[0]:
            nervousScore += 5
            break;
          case quizSet[currentNum].c[1]:
            nervousScore += 4
            break;
          case quizSet[currentNum].c[2]:
            nervousScore += 3
            break;
          case quizSet[currentNum].c[3]:
            nervousScore += 2
            break;
          case quizSet[currentNum].c[4]:
            nervousScore += 1
            break;
        }
        break;
      case quizSet[4].q:
      case quizSet[5].q:
        switch (li.textContent) {
          case quizSet[currentNum].c[0]:
            honestyScore += 5
            break;
          case quizSet[currentNum].c[1]:
            honestyScore += 4
            break;
          case quizSet[currentNum].c[2]:
            honestyScore += 3
            break;
          case quizSet[currentNum].c[3]:
            honestyScore += 2
            break;
          case quizSet[currentNum].c[4]:
            honestyScore += 1
            break;
        }
        break;
      case quizSet[6].q:
      case quizSet[7].q:
      case quizSet[8].q:
        switch (li.textContent) {
          case quizSet[currentNum].c[0]:
            harmonyScore += 5
            break;
          case quizSet[currentNum].c[1]:
            harmonyScore += 4
            break;
          case quizSet[currentNum].c[2]:
            harmonyScore += 3
            break;
          case quizSet[currentNum].c[3]:
            harmonyScore += 2
            break;
          case quizSet[currentNum].c[4]:
            harmonyScore += 1
            break;
        }
        break;
      case quizSet[9].q:
      case quizSet[10].q:
      case quizSet[11].q:
        switch (li.textContent) {
          case quizSet[currentNum].c[0]:
            opennessScore += 5
            break;
          case quizSet[currentNum].c[1]:
            opennessScore += 4
            break;
          case quizSet[currentNum].c[2]:
            opennessScore += 3
            break;
          case quizSet[currentNum].c[3]:
            opennessScore += 2
            break;
          case quizSet[currentNum].c[4]:
            opennessScore += 1
            break;
        }
        break;
    }
    // /点数の加算処理 --------------------------
  }

  function setQuiz() {
    isAnswered = false;

    current.textContent = `${currentNum + 1}問目/12問中`
    // 質問を入れている
    question.animate([{opacity: '0'}, {opacity: '1'}], 500)
    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    // 選択肢を入れている
    quizSet[currentNum].c.forEach(choice => {
      const li = document.createElement('li');
      li.animate([{opacity: '0'}, {opacity: '1'}], 800)
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
        if (currentNum === quizSet.length - 1) {
          scoreLabel.innerHTML = `外向性: ${extraScore} / 10 </br>
                                  神経質傾向: ${nervousScore} / 10 </br>
                                  誠実性: ${honestyScore} / 10 </br>
                                  調和性: ${harmonyScore} / 15 </br>
                                  開放性: ${opennessScore} / 15 </br>`;
          extra.setAttribute("value", extraScore)
          nervous.setAttribute("value", nervousScore) 
          honesty.setAttribute("value", honestyScore) 
          harmony.setAttribute("value", harmonyScore) 
          openness.setAttribute("value", opennessScore)                         
          result.classList.remove('hidden');
        } else {
          currentNum++;
          setQuiz();
        }
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

}

window.addEventListener("load", character);