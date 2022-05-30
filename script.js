const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const buscarLi = document.getElementsByTagName('li');
const btnClear = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
function limpar() {
  input.value = '';
}
function clearList() {
  listaOrdenada.innerHTML = '';
}
function finalizados() {
  for (let i = buscarLi.length - 1; i >= 0; i -= 1) {
    if (buscarLi[i].className === 'completed') {
      buscarLi[i].remove();
    }
  }
}
btnFinalizados.addEventListener('click', finalizados);
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
function adcionaEventos() {
  for (let i = 0; i < buscarLi.length; i += 1) {
    buscarLi[i].addEventListener('click', colorBackground);
  }
  for (let i = 0; i < buscarLi.length; i += 1) {
    buscarLi[i].addEventListener('dblclick', riscaElemento);
  }
}
function criarLista() {
  const valor = input.value;
  const listas = document.createElement('li');
  listaOrdenada.appendChild(listas);
  listas.innerText = valor;
  limpar();
  adcionaEventos();
}
btn.addEventListener('click', criarLista);
function salvar() {
  const dados = [];
  const dadosComClasse = [];
  for (let i = 0; i < buscarLi.length; i += 1) {
    dados.push(buscarLi[i].innerText);
  }
  for (let i = 0; i < buscarLi.length; i += 1) {
    if (buscarLi[i].className === 'completed') {
      dadosComClasse.push(buscarLi[i].innerText);
    }
  }
  localStorage.setItem('dados', JSON.stringify(dados));
  localStorage.setItem('dadosComClasse', JSON.stringify(dadosComClasse));
}
btnSalvar.addEventListener('click', salvar);
function verificaLs() {
  if (localStorage.getItem('dados') === null) {
    localStorage.setItem('dados', JSON.stringify([]));
  }
  if (localStorage.getItem('dadosComClasse') === null) {
    localStorage.setItem('dadosComClasse', JSON.stringify([]));
  }
}
function resgataItensSalvos() {
  verificaLs();
  const dados = JSON.parse(localStorage.getItem('dados'));
  const dadosComClasse = JSON.parse(localStorage.getItem('dadosComClasse'));
  for (let i = 0; i < dados.length; i += 1) {
    const createElement = document.createElement('li');
    if (dados[i].includes(dadosComClasse)) {
      createElement.classList.add('completed');
    }
    createElement.innerText = dados[i];
    listaOrdenada.appendChild(createElement);
    adcionaEventos();
  }
}

window.onload = function aleatoria() {
  resgataItensSalvos();
};
