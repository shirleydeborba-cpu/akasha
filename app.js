document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultado = document.getElementById("resultado");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const respostas = document.querySelectorAll('input[type="radio"]:checked');

    let pontos = 0;
    respostas.forEach((r) => (pontos += parseInt(r.value, 10) || 0));
// =====================
// BARRA ENERGÉTICA (%)
// =====================
const minPontos = 6;   // 6 perguntas, mínimo 1 cada
const maxPontos = 30;  // 6 perguntas, máximo 5 cada

let pct = Math.round(((pontos - minPontos) / (maxPontos - minPontos)) * 100);
pct = Math.max(0, Math.min(100, pct));

let tituloBarra = "Campo em calibração";
let subtituloBarra = "Seu fluxo está ajustando rotas internas.";
let classeBarra = "medio";

if (pct <= 33) {
  tituloBarra = "Campo em recalibração";
  subtituloBarra = "Há sinais de contenção no receber. A energia pede segurança e base.";
  classeBarra = "baixo";
} else if (pct <= 66) {
  tituloBarra = "Campo em abertura";
  subtituloBarra = "Você já tem luz no fluxo, mas ainda existem travas pontuais no merecimento.";
  classeBarra = "medio";
} else {
  tituloBarra = "Campo bem responsivo";
  subtituloBarra = "Seu fluxo está mais disponível. Agora é alinhar ação + direção para estabilizar.";
  classeBarra = "alto";
}

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
// =====================
// BARRA ENERGÉTICA (%)
// =====================
const minPontos = 6;
const maxPontos = 30;

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


