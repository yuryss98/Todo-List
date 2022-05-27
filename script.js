const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
function limpar() {
  input.value = '';
}
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
function criarLista() {
  const valor = input.value;
  const listas = document.createElement('li');
  listaOrdenada.appendChild(listas);
  listas.innerText = valor;
  limpar();
  const buscarLi = document.getElementsByTagName('li');
  for (let i = 0; i < buscarLi.length; i += 1) {
    buscarLi[i].addEventListener('click', colorBackground);
  }
}
btn.addEventListener('click', criarLista);
