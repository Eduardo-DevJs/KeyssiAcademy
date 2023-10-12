/// variaveis
const btnEntrar = document.querySelector('button');
const inputUsuario = document.querySelector('[data-input="user"]');
const inputSenha = document.querySelector('[data-input="pass"]');

const admin = "keyssi";
const senha = "key123";

// Funcoes
const verificarCampos = (usuario, senha) => {
  return usuario == '' && senha == '';
};

const logar = () => {
  const inputValueUsuario = inputUsuario.value;
  const inputValueSenha = inputSenha.value;

  if (verificarCampos(inputValueUsuario, inputValueSenha)) {
    alert('Preencha todos os campos');
  }else if(inputValueUsuario.toLowerCase().trim() === admin && inputValueSenha.toLowerCase().trim() === senha){
    window.location.href = "assets/pagina/index.html"
  }else{
    alert("Usuarios e/ou senha invalidos")
  }
};

//eventos
btnEntrar.addEventListener('click', logar);
