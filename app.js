document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const respostas = document.querySelectorAll('input[type="radio"]:checked');

    let pontos = 0;
    respostas.forEach(r => pontos += parseInt(r.value));

    let nivel = "";
    let chakra = "";
    let mensagem = "";
    let plano = [];
    let afirmacao = "";

    // 🔮 CLASSIFICAÇÃO

    if (pontos <= 8) {
      nivel = "Fluxo aberto";
      chakra = "Campo de merecimento ativo";
      mensagem = "Seu campo está receptivo para prosperar.";
      plano = [
        "Manter frequência de gratidão",
        "Fortalecer sua energia de ação",
        "Expandir sua visão de ganhos"
      ];
      afirmacao = "Eu permito que o dinheiro flua com leveza.";
    }

    else if (pontos <= 16) {
      nivel = "Oscilação energética";
      chakra = "Plexo solar";
      mensagem = "Há potencial, mas existem medos e dúvidas.";
      plano = [
        "Trabalhar autoconfiança",
        "Organizar vida financeira",
        "Ativar energia do merecimento"
      ];
      afirmacao = "Eu sou capaz de prosperar com segurança.";
    }

    else {
      nivel = "Bloqueio energético";
      chakra = "Chakra básico";
      mensagem = "Seu campo mostra travas ligadas à segurança e sobrevivência.";
      plano = [
        "Limpeza energética profunda",
        "Reprogramação de crenças",
        "Ativação do chakra raiz"
      ];
      afirmacao = "Eu me sinto segura para prosperar.";
    }

    // 🖥 MOSTRAR RESULTADO

    resultado.style.display = "block";

    document.getElementById("resNivel").innerText = nivel;
    document.getElementById("resChakra").innerText = chakra;
    document.getElementById("resMensagem").innerText = mensagem;

    const resPlano = document.getElementById("resPlano");
    resPlano.innerHTML = "";
    plano.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      resPlano.appendChild(li);
    });

    document.getElementById("resAfirmacao").innerText = afirmacao;

    // 📲 WHATSAPP

    const nome = (document.getElementById("nome").value || "Pessoa").trim();

    const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade.

Nível: ${nivel}
Chakra: ${chakra}

Quero receber o protocolo completo 💰`;

    const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);

    document.getElementById("btnWhats").href = link;

  });

});

