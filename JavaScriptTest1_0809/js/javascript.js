window.addEventListener('load', () => {
  document.getElementById('complete').addEventListener('click', submit);
}, false)

function submit() {

  const answers = [11, 5, 42, 5, 11];
  const username = document.querySelector('#username').value;
  const userAnswers = document.querySelectorAll('.answer');

  let wrongAnswerCounter = 0;
  let score = 0;

  for (let i = 0; i < answers.length; i++) {
    if (parseInt(userAnswers[i].value) !== answers[i]) {
      wrongAnswerCounter++;
      userAnswers[i].style.backgroundColor = 'red';
    }
    else {
      score += 20;
    }
  }

  const resultContent = document.getElementById('result-content');

  document.getElementById('result').style.display = 'block';

  const today = new Date().toLocaleDateString();

  resultContent.innerHTML = `<p>${username} 님의 ${today} 계산 퀴즈 결과</p>
  <p>총 5문제 중 ${wrongAnswerCounter}문제를 틀렸습니다. 틀린 답은 빨간색으로 표시하였습니다.</p>
  <p>최종 점수는 ${score} 점입니다.</p>`
}