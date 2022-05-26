const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
function limpar() {
  input.value = '';
}
function corDeFundo(event) {
  const alvo = event;
  alvo.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function criarLista() {
  const valor = input.value;
  const listas = document.createElement('li');
  listas.classList = 'testando';
  listaOrdenada.appendChild(listas);
  listas.innerText = valor;
  limpar();
  const test1 = document.getElementsByClassName('testando');
  for (let i = 0; i < test1.length; i += 1) {
    test1[i].addEventListener('click', corDeFundo);
  }
}
btn.addEventListener('click', criarLista);
