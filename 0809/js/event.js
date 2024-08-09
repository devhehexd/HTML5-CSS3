window.addEventListener('load', init, false);
//HTML의 모든 element가 메모리에 로딩(load)한 후
function init() {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', myClick, false)
}

function myClick(evt) {
  console.log(evt);
}
