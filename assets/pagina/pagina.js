const servicosAcademia = [
  {
    nome: 'Treinamento Personalizado',
    descricao:
      'Sessões individuais com treinadores especializados para criar programas adaptados às necessidades e objetivos específicos de cada pessoa.',
  },
  {
    nome: 'Treinamento em Circuito',
    descricao:
      'Configure circuitos de treinamento que permitem aos membros realizar uma série de exercícios em estações diferentes.',
  },
  {
    nome: 'Avaliação de Saúde e Fitness',
    descricao:
      'Realize avaliações regulares para medir o progresso dos membros e ajustar seus programas de treinamento conforme necessário.',
  },
  {
    nome: 'Planos Nutricionais Personalizados',
    descricao:
      'Ofereça orientação nutricional e crie planos alimentares personalizados para ajudar os membros a alcançar seus objetivos de saúde.',
  },
  {
    nome: 'Treino Funcional',
    descricao:
      'Implemente programas de treino funcional que melhorem a força, equilíbrio e flexibilidade dos membros.',
  },
  {
    nome: 'Aulas Específicas para Grupos',
    descricao:
      'Ofereça aulas específicas para grupos como crianças, idosos, gestantes ou pessoas com necessidades especiais.',
  },
];

let itens;
const lista = document.querySelector('.lista_servicos');

servicosAcademia.forEach(({ nome, descricao }) => {
  itens = `
  <li class="servico">
    <h3 class="titulo_servico">${nome}</h3>
    <p class="descricao">${descricao}</p>
  </li>
  `;

  lista.innerHTML += itens;
});

// imc
const calcular = document.querySelector("[data-btn='calcular']");
const resposta = document.querySelector('.resposta');

const calcularImc = () => {
  const nome = document.querySelector('.nome').value;
  const peso = Number(document.querySelector('.peso').value);
  const altura = Number(document.querySelector('.altura').value);
  const alturaMetros = altura / 100;

  const imc = peso / (alturaMetros * alturaMetros);

  if (nome === '' || altura === '' || peso === '') {
    alert('Preencha todos campos');
  } else {
    if (imc < 18.5) {
      resposta.innerHTML = `Oi ${nome} seu imc é ${imc.toFixed(
        2,
      )}Kg e voce esta abaixo do peso `;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resposta.innerHTML = `Oi ${nome} seu imc é ${imc.toFixed(
        2,
      )}Kg e voce esta com peso normal `;
    } else if (imc >= 25 && imc <= 29.9) {
      resposta.innerHTML = `Oi ${nome} seu imc é ${imc.toFixed(
        2,
      )}Kg e voce esta com sobrepeso `;
    } else {
      resposta.innerHTML = `Oi ${nome} seu imc é ${imc.toFixed(
        2,
      )}Kg e voce esta com obesidade `;
    }
  }
};

calcular.addEventListener('click', calcularImc);
