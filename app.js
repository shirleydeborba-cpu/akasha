document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultado = document.getElementById("resultado");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const respostas = document.querySelectorAll('input[type="radio"]:checked');

    let pontos = 0;
    respostas.forEach((r) => (pontos += parseInt(r.value, 10) || 0));

    let nivel = "";
    let chakra = "";
    let mensagem = "";
    let plano = [];
    let afirmacao = "";

    if (pontos <= 8) {
      nivel = "Fluxo aberto";
      chakra = "Campo de merecimento ativo";
      mensagem = "Seu campo está receptivo para prosperar. Existe alinhamento entre dar e receber.";
      plano = [
        "Mantenha um ritual diário de gratidão (2 minutos).",
        "Defina uma ação concreta de prosperidade hoje (mesmo pequena).",
        "Pratique receber: aceite elogios, ajuda e oportunidades sem se justificar."
      ];
      afirmacao = "Eu permito que a prosperidade chegue com leveza, segurança e alegria.";
    } else if (pontos <= 16) {
      nivel = "Oscilação energética";
      chakra = "Plexo solar";
      mensagem = "Seu fluxo existe, mas oscila por medo, dúvida ou autocobrança. Ajustes simples destravam muito.";
      plano = [
        "Fortaleça sua autoconfiança com uma decisão clara (1 prioridade).",
        "Organize um ponto financeiro: gastos, preço, reserva ou cobrança.",
        "Reforce merecimento: reconheça 3 vitórias reais dos últimos 30 dias."
      ];
      afirmacao = "Eu sou capaz, eu mereço, e eu sustento o crescimento com equilíbrio.";
    } else {
      nivel = "Bloqueio energético";
      chakra = "Chakra básico";
      mensagem = "Há travas ligadas à segurança e sobrevivência. Seu campo pede aterramento e limpeza de crenças.";
      plano = [
        "Aterre: pés no chão + respiração profunda por 3 minutos.",
        "Identifique a crença central (ex.: “dinheiro é perigoso” / “não mereço”).",
        "Ative segurança: rotina simples + proteção energética + ação guiada."
      ];
      afirmacao = "Eu estou segura. Eu mereço prosperar. Eu sustento abundância com paz.";
    }

    // Mostrar resultado (IDs precisam existir no seu HTML)
    if (resultado) resultado.style.display = "block";

    const elNivel = document.getElementById("resNivel");
    const elChakra = document.getElementById("resChakra");
    const elMensagem = document.getElementById("resMensagem");
    const elPlano = document.getElementById("resPlano");
    const elAfirmacao = document.getElementById("resAfirmacao");

    if (elNivel) elNivel.innerText = nivel;
    if (elChakra) elChakra.innerText = chakra;
    if (elMensagem) elMensagem.innerText = mensagem;

    if (elPlano) {
      elPlano.innerHTML = "";
      plano.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        elPlano.appendChild(li);
      });
    }

    if (elAfirmacao) elAfirmacao.innerText = afirmacao;

    // WhatsApp
    const nomeInput = document.getElementById("nome");
    const nome = ((nomeInput && nomeInput.value) ? nomeInput.value : "Pessoa").trim() || "Pessoa";

    const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade.

👤 Nome: ${nome}
🔮 Nível: ${nivel}
🌀 Chakra: ${chakra}

Quero receber o protocolo completo e entender meu desbloqueio energético 💰`;

    const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);

    const btnWhats = document.getElementById("btnWhats");
    if (btnWhats) btnWhats.href = link;
  });
});


