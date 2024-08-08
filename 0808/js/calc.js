window.addEventListener('load', () => {
  const mybutton = document.getElementById('mybutton');
  mybutton.addEventListener('click', calc);
  const result = document.getElementById('result');
  result.style.visibility = 'hidden';
});

function calc() {
  const f = document.forms[0];
  let result = Number(f.first.value) + Number(f.second.value);
  document.getElementById('result').innerHTML = `<div style='color:red'>${result}</div>`;
  document.getElementById('result').style.visibility = 'visible';
}
