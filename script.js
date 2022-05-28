const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const buscarLi = document.getElementsByTagName('li');
const btnClear = document.getElementById('apaga-tudo');
function limpar() {
  input.value = '';
}
function clearList() {
  listaOrdenada.innerHTML = '';
}
btnClear.addEventListener('click', clearList);
function colorBackground(event) {
  const color = document.getElementsByTagName('li');
  for (let i = 0; i < color.length; i += 1) {
    if (color[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      color[i].style.backgroundColor = 'white';
    }
  }
  const alvo = event;
  alvo.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function riscaElemento(event) {
  const alvo = event;
  if (alvo.target.className === 'completed') {
    alvo.target.classList.remove('completed');
  } else {
    alvo.target.classList.add('completed');
  }
}
function criarLista() {
  const valor = input.value;
  const listas = document.createElement('li');
  listaOrdenada.appendChild(listas);
  listas.innerText = valor;
  limpar();
  for (let i = 0; i < buscarLi.length; i += 1) {
    buscarLi[i].addEventListener('click', colorBackground);
  }
  for (let i = 0; i < buscarLi.length; i += 1) {
    buscarLi[i].addEventListener('dblclick', riscaElemento);
  }
}
btn.addEventListener('click', criarLista);
