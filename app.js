document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultadoSec = document.getElementById("resultado");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // =====================
    // 1) SOMA DOS PONTOS
    // =====================
    const respostas = document.querySelectorAll('input[type="radio"]:checked');

    let pontos = 0;
    respostas.forEach((r) => {
      pontos += parseInt(r.value, 10) || 0;
    });

    // Faixa esperada (6 perguntas de 1 a 5)
    const minPontos = 6;
    const maxPontos = 30;

    // =====================
    // 2) CLASSIFICAÇÃO
    // =====================
    let nivel = "";
    let chakra = "";
    let mensagem = "";
    let plano = [];
    let afirmacao = "";

    // Você pode ajustar os cortes se quiser (aqui está bem equilibrado)
    if (pontos <= 12) {
      nivel = "Bloqueio energético";
      chakra = "Chakra básico";
      mensagem =
        "Há travas ligadas à segurança e sobrevivência. Seu campo pede aterramento, limpeza de crenças e fortalecimento do merecimento.";
      plano = [
        "Aterre: pés no chão + respiração profunda por 3 minutos.",
        "Identifique a crença central (ex.: “dinheiro é perigoso” / “não mereço”).",
        "Ative segurança: rotina simples + proteção energética + ação guiada.",
      ];
      afirmacao =
        "Eu estou segura. Eu mereço prosperar. Eu sustento abundância com paz.";
    } else if (pontos <= 21) {
      nivel = "Campo em abertura";
      chakra = "Chakra do Plexo Solar";
      mensagem =
        "Seu campo já responde ao crescimento, mas ainda alterna entre confiança e dúvida. É fase de disciplina leve e decisão.";
      plano = [
        "Escolha 1 meta financeira simples para 7 dias (curta e real).",
        "Faça 1 ação diária de fortalecimento do merecimento (3 min).",
        "Organize uma pequena regra: guardar/entrar/receber com constância.",
      ];
      afirmacao =
        "Eu confio em mim. Eu tomo decisões com clareza. Eu sustento meu crescimento com equilíbrio.";
    } else {
      nivel = "Fluxo aberto";
      chakra = "Chakra cardíaco + Plexo Solar alinhados";
      mensagem =
        "Seu campo está receptivo para prosperar. O foco agora é expansão com constância: receber, organizar e multiplicar com sabedoria.";
      plano = [
        "Defina um próximo passo de expansão (oferta/serviço/ação clara).",
        "Crie uma rotina de receber: agradecer + registrar entradas/ganhos.",
        "Sustente o fluxo: um limite saudável + consistência semanal.",
      ];
      afirmacao =
        "Eu recebo com leveza. Eu honro meu valor. A prosperidade flui e permanece comigo.";
    }

    // =====================
    // 3) MOSTRAR RESULTADO
    // =====================
    if (resultadoSec) resultadoSec.style.display = "block";

    const elNivel = document.getElementById("resNivel");
    const elChakra = document.getElementById("resChakra");
    const elMensagem = document.getElementById("resMensagem");
    const elPlano = document.getElementById("resPlano");
    const elAfirmacao = document.getElementById("resAfirmacao");

    if (elNivel) elNivel.textContent = nivel;
    if (elChakra) elChakra.textContent = chakra;
    if (elMensagem) elMensagem.textContent = mensagem;

    if (elPlano) {
      elPlano.innerHTML = "";
      plano.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        elPlano.appendChild(li);
      });
    }

    if (elAfirmacao) elAfirmacao.textContent = afirmacao;

    // =====================
    // 4) BARRA ENERGÉTICA (%)
    // (IDs precisam existir no HTML)
    // =====================
    let pct = Math.round(((pontos - minPontos) / (maxPontos - minPontos)) * 100);
    pct = Math.max(0, Math.min(100, pct));

    const elPct = document.getElementById("resPct");
    const elBarra = document.getElementById("resBarra");
    const elEnergiaTitulo = document.getElementById("resEnergiaTitulo");
    const elEnergiaSub = document.getElementById("resEnergiaSub");

    if (elPct) elPct.textContent = pct + "%";
    if (elBarra) elBarra.style.width = pct + "%";

    let tituloEnergia = "";
    let subEnergia = "";
    let classeEnergia = "";

    if (pct <= 33) {
      tituloEnergia = "Campo em recalibração";
      subEnergia = "Seu fluxo está pedindo segurança energética para expandir.";
      classeEnergia = "baixo";
    } else if (pct <= 66) {
      tituloEnergia = "Campo em abertura";
      subEnergia = "Existe potencial ativo, apenas ajustes de merecimento.";
      classeEnergia = "medio";
    } else {
      tituloEnergia = "Campo bem responsivo";
      subEnergia = "Energia favorável para crescimento e materialização.";
      classeEnergia = "alto";
    }

    if (elBarra) {
      elBarra.classList.remove("baixo", "medio", "alto");
      elBarra.classList.add(classeEnergia);
    }
    if (elEnergiaTitulo) elEnergiaTitulo.textContent = tituloEnergia;
    if (elEnergiaSub) elEnergiaSub.textContent = subEnergia;

    // =====================
    // 5) WHATSAPP (LINK PRONTO)
    // =====================
    const nomeInput = document.getElementById("nome");
    const nome = (nomeInput?.value || "Pessoa").trim() || "Pessoa";

    const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade.

👤 Nome: ${nome}
🔮 Nível: ${nivel}
🌀 Chakra: ${chakra}

Quero receber o protocolo completo e entender meu desbloqueio energético. 💰`;

    const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);
    const btnWhats = document.getElementById("btnWhats");
    if (btnWhats) btnWhats.href = link;
  });
});

