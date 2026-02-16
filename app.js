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

    if (pontos <= 8) {
      nivel = "Fluxo aberto";
      chakra = "Campo de merecimento ativo";
      mensagem = "Seu campo está receptivo para prosperar.";
      plano = [
        "Manter práticas de gratidão diária",
        "Expandir sua visão de ganhos",
        "Ajudar outras pessoas a prosperar"
      ];
      afirmacao = "Eu permito que a prosperidade flua com alegria.";
    }

    else if (pontos <= 16) {
      nivel = "Oscilante";
      chakra = "Chakra do plexo solar";
      mensagem = "Existem crenças limitantes ativas.";
      plano = [
        "Trabalhar o merecimento",
        "Organizar sua vida financeira",
        "Ativar sua autoconfiança"
      ];
      afirmacao = "Eu sou capaz de gerar riqueza.";
    }

    else {
      nivel = "Bloqueado";
      chakra = "Chakra raiz";
      mensagem = "Seu campo pede segurança energética.";
      plano = [
        "Fortalecer sua base emocional",
        "Limpeza energética",
        "Conexão com o corpo físico"
      ];
      afirmacao = "Eu me sinto segura para prosperar.";
    }

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

    resultado.style.display = "block";

    // WHATSAPP

    const nome = document.getElementById("nome")?.value || "Pessoa";

    const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade.

🔮 Nível: ${nivel}
🧭 Chakra: ${chakra}

Quero receber o protocolo completo 💰`;

    const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);

    document.getElementById("btnWhats").href = link;

  });

});

<script src="app.js"></script>
