const botao = document.getElementById("meuBotao");
const botao_enter = document.getElementById("botaoEnter");
const input = document.getElementById("meuInput");

botao.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#f0f4f8"; // ⚠️ Dica: document.body.style é mais rápido e limpo, mas o seu funciona!
  alert("Botão Pressionado!"); // ❌ Erro 2: Faltou o ponto e vírgula (;) no final do alert.
});

botao_enter.addEventListener("click", () => {
    const texto_digitado = input.value;

    alert(`Seja bem vindo(a): ${texto_digitado}`); // ❌ Erro 3: Faltou o ponto e vírgula (;) no final aqui também.
});