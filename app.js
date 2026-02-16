document.getElementById("quizForm").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;
let respostas = document.querySelectorAll("input[type=radio]:checked");

if(respostas.length < 6){
alert("Responda todas as perguntas");
return;
}

let pontos = 0;

respostas.forEach(r => pontos += parseInt(r.value));

let nivel = "";
let chakra = "";
let mensagem = "";
let plano = "";
let afirmacao = "";

if(pontos <= 10){
nivel = "Fluxo aberto";
chakra = "Chakra do Plexo Solar alinhado";
mensagem = "Seu campo está pronto para expandir a prosperidade.";
plano = "Ativar frequência da abundância | Sustentar merecimento | Expandir recepção.";
afirmacao = "Eu permito que a prosperidade flua com leveza.";
}

else if(pontos <= 18){
nivel = "Bloqueio leve";
chakra = "Oscilação no chakra do merecimento";
mensagem = "Existe potencial de crescimento com pequenos ajustes.";
plano = "Limpeza energética | Reprogramação de crenças | Alinhamento do receber.";
afirmacao = "Eu sou digna de prosperar.";
}

else{
nivel = "Bloqueio profundo";
chakra = "Contração no campo financeiro";
mensagem = "Seu campo pede liberação de padrões antigos.";
plano = "Remoção de votos | Cura da linhagem | Reconexão com a frequência da abundância.";
afirmacao = "Eu autorizo minha expansão financeira.";
}

document.getElementById("resultado").innerHTML = `

<h2>${nome ? nome + ", seu resultado:" : "Seu resultado:"}</h2>

<h3>${nivel}</h3>

<p><strong>Chakra:</strong> ${chakra}</p>

<p>${mensagem}</p>

<h4>Plano prático:</h4>
<p>${plano}</p>

<h4>Afirmação:</h4>
<p>${afirmacao}</p>

<a class="btn" target="_blank"
href="https://wa.me/5581986831679?text=Olá%20Leide,%20fiz%20meu%20diagnóstico%20e%20quero%20meu%20protocolo">
Receber meu protocolo completo no WhatsApp
</a>

`;

});
