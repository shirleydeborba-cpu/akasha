document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // soma pontos
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let pontos = 0;
    respostas.forEach((r) => (pontos += parseInt(r.value, 10)));

    let nivel = "";
    let chakra = "";
    let mensagem = "";
    let plano = [];
    let afirmacao = "";

    // 🔮 classificação por pontuação
    if (pontos <= 8) {
      nivel = "Fluxo aberto para prosperidade";
      chakra = "Chakra do Plexo Solar alinhado";
      mensagem =
        "Seu campo está receptivo para expansão financeira. Existe merecimento ativo e uma conexão saudável com o receber.";

      plano = [
        "Ativar o plexo solar com respiração de poder por 3 minutos ao dia.",
        "Praticar o receber consciente (aceitar elogios, presentes e oportunidades).",
        "Visualizar diariamente sua vida com estabilidade financeira."
      ];

      afirmacao = "Eu permito que a prosperidade flua até mim com leveza e merecimento.";
    } else if (pontos <= 16) {
      nivel = "Oscilações no fluxo financeiro";
      chakra = "Chakra Cardíaco em ajuste";
      mensagem =
        "Você tem potencial de crescimento, mas emoções antigas ainda interferem na segurança financeira e no sentir-se merecedora(o).";

      plano = [
        "Praticar coerência cardíaca por 5 minutos ao dia.",
        "Escrever e substituir crenças de escassez (1 por dia).",
        "Criar um movimento financeiro novo nesta semana (uma ação simples e concreta)."
      ];

      afirmacao = "Meu coração se abre para uma nova realidade de prosperidade.";
    } else if (pontos <= 24) {
      nivel = "Bloqueios energéticos moderados";
      chakra = "Chakra Básico desalinhado";
      mensagem =
        "Seu campo mostra padrões de sobrevivência e insegurança. Isso tende a travar constância e estabilidade no financeiro.";

      plano = [
        "Fortalecer o chakra básico com conexão com a natureza (pé no chão, 10 min).",
        "Organizar o físico: gastos, entradas e uma meta simples para os próximos 7 dias.",
        "Cortar padrões de escassez herdados (frases e hábitos repetidos da família)."
      ];

      afirmacao = "Eu me sinto segura(o) para prosperar e expandir.";
    } else {
      nivel = "Bloqueio profundo no fluxo da prosperidade";
      chakra = "Campo de merecimento comprometido";
      mensagem =
        "Há travas energéticas relacionadas a medo, crenças antigas e não merecimento. Aqui o ideal é um protocolo direcionado e personalizado.";

      plano = [
        "Iniciar uma limpeza energética e emocional (para quebrar o padrão raiz).",
        "Trabalhar o merecimento diariamente (afirmação + atitude prática).",
        "Evitar ambientes e pessoas que reforcem escassez e desvalorização."
      ];

      afirmacao = "Eu libero agora todas as memórias que me impedem de prosperar.";
    }

    // 🧾 mostrar resultado
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

   // 📲 WhatsApp
const nome = (document.getElementById("nome")?.value || "Pessoa").trim();

const textoWhats = `Olá Leide ✨

Acabei de fazer meu Diagnóstico da Prosperidade e meu resultado foi:

🔮 Nível: ${nivel}
🧭 Chakra: ${chakra}

Quero receber o protocolo completo e entender meu desbloqueio energético. 💰`;

const link = "https://wa.me/5581986831679?text=" + encodeURIComponent(textoWhats);

const btnWhats = document.getElementById("btnWhats");
if (btnWhats) btnWhats.href = link;
  });
});
<script src="app.js"></script>
