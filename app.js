document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let pontos = 0;

    const respostas = document.querySelectorAll("input[type=radio]:checked");

    respostas.forEach(r => {
      pontos += parseInt(r.value);
    });

    let nivel = "";
    let chakra = "";
    let mensagem = "";
    let plano = [];
    let afirmacao = "";

    // 🔮 CLASSIFICAÇÃO ENERGÉTICA

    if (pontos <= 8) {

      nivel = "Fluxo aberto para prosperidade";
      chakra = "Chakra do Plexo Solar alinhado";

      mensagem = "Seu campo está receptivo para expansão financeira. Existe força de merecimento ativa e conexão saudável com o receber.";

      plano = [
        "Ativar o chakra do plexo solar com respiração de poder por 3 minutos ao dia.",
        "Praticar o receber consciente (aceitar elogios, presentes e oportunidades).",
        "Visualizar diariamente sua vida com estabilidade financeira."
      ];

      afirmacao = "Eu permito que a prosperidade flua até mim com leveza e merecimento.";

    }

    else if (pontos <= 16) {

      nivel = "Oscilações no fluxo financeiro";
      chakra = "Chakra Cardíaco em ajuste";

      mensagem = "Existe potencial de crescimento, mas ainda há memórias emocionais afetando sua segurança financeira.";

      plano = [
        "Praticar coerência cardíaca por 5 minutos ao dia.",
        "Liberar crenças de escassez através da escrita terapêutica.",
        "Criar um pequeno movimento financeiro novo nesta semana."
      ];

      afirmacao = "Meu coração se abre para uma nova realidade de prosperidade.";

    }

    else if (pontos <= 24) {

      nivel = "Bloqueios energéticos moderados";
      chakra = "Chakra Básico desalinhado";

      mensagem = "Seu campo mostra padrões de sobrevivência e medo da estabilidade financeira.";

      plano = [
        "Fortalecer o chakra básico com conexão com a natureza.",
        "Organizar sua vida financeira física (contas, valores e metas).",
        "Cortar laços energéticos com padrões de escassez familiar."
      ];

      afirmacao = "Eu me sinto segura para prosperar e expandir.";

    }

    else {

      nivel = "Bloqueio profundo no fluxo da prosperidade";
      chakra = "Campo de merecimento comprometido";

      mensagem = "Há travas energéticas relacionadas a medo, crenças antigas e padrões de não merecimento.";

      plano = [
        "Iniciar um processo de limpeza energética e emocional.",
        "Trabalhar o merecimento diariamente diante do espelho.",
        "Evitar ambientes e pessoas que reforcem a escassez."
      ];

      afirmacao = "Eu libero agora todas as memórias que me impedem de prosperar.";

    }

    // 🧾 EXIBIR RESULTADO

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

    const nome = document.getElementById("nome").value || "Pessoa";

    const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade e meu resultado foi:

🔮 Nível: ${nivel}
🧭 Chakra: ${chakra}

Quero receber o protocolo completo e entender meu desbloqueio energético. 💰`;

    const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);

