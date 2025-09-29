let chkMaiusculas = document.querySelector("#maiusculas");
let chkMinusculas = document.querySelector("#minusculas");
let chkNumeros = document.querySelector("#numeros");
let chkSimbolos = document.querySelector("#simbolos");

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minusculas = "abcdefghijklmnopqrstuvwxyz";
let numeros = "0123456789";
let simbolos = "!@#%*";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let charset = '';

  if (chkMaiusculas.checked) charset += maiusculas;
  if (chkMinusculas.checked) charset += minusculas;
  if (chkNumeros.checked) charset += numeros;
  if (chkSimbolos.checked) charset += simbolos;

  if (charset === '') {
    alert(
      "Porfavor, Selecione pelo menos uma opção para uma senha mais SEGURA!"
    );
    return;
  }

  let pass = "";
  let n = charset.length;

  for (let i = 0; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass);
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
