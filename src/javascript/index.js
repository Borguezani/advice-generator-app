const botao = document.getElementById("button");

botao.addEventListener("click", () => takeRandomAdvice());

async function takeAdvice() {
  const url = "https://api.adviceslip.com/advice";
  const resposta = await fetch(url);
  const json = await resposta.json();
  return [json.slip.advice, json.slip.id];
}

async function takeRandomAdvice() {
  const adviceRandom = await takeAdvice();
  const advice = adviceRandom[0];
  const id = adviceRandom[1];
  document.getElementById("conselho").innerHTML = advice;
  document.getElementById("numero-conselho").innerHTML = id;
}
