const meuBotao = document.getElementById('meuBotao');
const minhaRegiao = document.getElementById('minhaRegiao');

meuBotao.addEventListener('click', () => {
  minhaRegiao.scrollIntoView({ behavior: 'smooth' });
});

const meuBotao1 = document.getElementById('meuBotao1');
const minhaRegiao1 = document.getElementById('minhaRegiao1');

meuBotao1.addEventListener('click', () => {
  minhaRegiao1.scrollIntoView({ behavior: 'smooth' });
});

meuBotao.addEventListener('click', () => {
    minhaRegiao.scrollIntoView({ behavior: 'smooth' });
  });
  
  const meuBotao2 = document.getElementById('meuBotao2');
  const minhaRegiao2 = document.getElementById('minhaRegiao2');
  
  meuBotao2.addEventListener('click', () => {
    minhaRegiao2.scrollIntoView({ behavior: 'smooth' });
  });

var p = document.getElementsByClassName("enviar")

function Clear(){
    document.getElementById('input').value = " "
    document.getElementById('input1').value = " "
  }