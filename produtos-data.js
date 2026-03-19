/**
 * ════════════════════════════════════════════════════
 *  PRODUTOS-DATA.JS  —  Fonte única de produtos
 *  Edite apenas este arquivo para adicionar/remover
 *  produtos. Tanto index.html quanto produtos.html
 *  leem daqui automaticamente.
 * ════════════════════════════════════════════════════
 *
 *  Campos de cada produto:
 *  - id       : string única (ex: "caneca-ceramica")
 *  - cat      : "canecas" | "camisetas" | "impressos"
 *  - img      : caminho da imagem (ex: "images/x.webp")
 *  - imgErr   : imagem de fallback (opcional)
 *  - name     : nome exibido
 *  - desc     : descrição curta
 *  - price    : preço em centavos (ex: 3500 = R$ 35,00)
 *  - badge    : { text: "...", cls: "bp|bt|bv|bo" } (opcional)
 *  - waText   : texto da mensagem WhatsApp (URL-encoded)
 */

const PRODUTOS_DATA = [

  /* ── CANECAS ─────────────────────────────────────── */
  {
    id: "caneca-ceramica",
    cat: "canecas",
    img: "images/caneca_branca.webp",
    name: "Caneca Cerâmica",
    desc: "325ml · Personalização frente e verso",
    price: 3500,
    badge: { text: "Popular ⭐", cls: "bp" },
    waText: "Quero%20Caneca%20Cer%C3%A2mica!"
  },
  {
    id: "caneca-aluminio",
    cat: "canecas",
    img: "images/caneca_aluminio_times.webp",
    name: "Caneca de Alumínio",
    desc: "Leve e resistente · Times e personagens",
    price: 3500,
    waText: "Quero%20Caneca%20Alum%C3%ADnio!"
  },
  {
    id: "caneca-interior-colorida",
    cat: "canecas",
    img: "images/caneca-interno-e-alca-colorida.webp",
    name: "Caneca Interior Colorida",
    desc: "Interior e alça coloridos · Várias cores",
    price: 4490,
    badge: { text: "Colorida 🌈", cls: "bt" },
    waText: "Quero%20Caneca%20Interior%20Colorida!"
  },
  {
    id: "caneca-colher",
    cat: "canecas",
    img: "images/caneca-com-colher.webp",
    name: "Caneca com Colher",
    desc: "Colher personalizada inclusa 🥄",
    price: 4990,
    waText: "Quero%20Caneca%20com%20Colher!"
  },
  {
    id: "caneca-magica",
    cat: "canecas",
    img: "images/caneca-magica.webp",
    name: "Caneca Mágica",
    desc: "Revela imagem com calor da bebida 🔥",
    price: 4990,
    badge: { text: "Mágica ✨", cls: "bv" },
    waText: "Quero%20Caneca%20M%C3%A1gica!"
  },
  {
    id: "caneca-jateada",
    cat: "canecas",
    img: "images/jateada.webp",
    name: "Caneca Jateada",
    desc: "Acabamento fosco elegante",
    price: 3990,
    waText: "Quero%20Caneca%20Jateada!"
  },
  {
    id: "caneca-alca-coracao",
    cat: "canecas",
    img: "images/canecas_alca_coracao.webp",
    name: "Caneca Alça Coração",
    desc: "Alça em formato de coração colorida",
    price: 4490,
    badge: { text: "Romântica 💕", cls: "bp" },
    waText: "Quero%20Caneca%20Al%C3%A7a%20Cora%C3%A7%C3%A3o!"
  },
  {
    id: "xicaras",
    cat: "canecas",
    img: "images/xicaras.webp",
    name: "Conjunto de Xícaras",
    desc: "Kit com 6 xícaras personalizadas ☕",
    price: 11990,
    waText: "Quero%20Conjunto%20de%20X%C3%ADcaras!"
  },
  {
    id: "squeeze-aluminio",
    cat: "canecas",
    img: "images/squeeze_de_aluminio.webp",
    name: "Squeeze de Alumínio",
    desc: "500ml · Ideal para esportes e academia",
    price: 4990,
    badge: { text: "Fitness 💪", cls: "bt" },
    waText: "Quero%20Squeeze%20de%20Alum%C3%ADnio!"
  },

  /* ── CAMISETAS ────────────────────────────────────── */
  {
    id: "camiseta-basica",
    cat: "camisetas",
    img: "images/camiseta_basica.webp",
    imgErr: "https://placehold.co/400x400/FFE9F3/FF4D8D?text=Camiseta+Basica",
    name: "Camiseta Básica",
    desc: "100% algodão · Personalização frente e costas",
    price: 4990,
    badge: { text: "Clássica 👕", cls: "bp" },
    waText: "Quero%20Camiseta%20B%C3%A1sica!"
  },
  {
    id: "camiseta-polo",
    cat: "camisetas",
    img: "images/camiseta_polo.webp",
    imgErr: "https://placehold.co/400x400/E0F7FA/00BFA6?text=Camiseta+Polo",
    name: "Camiseta Polo",
    desc: "Malha premium · Bordado ou silk screen",
    price: 6990,
    badge: { text: "Elegante ✨", cls: "bt" },
    waText: "Quero%20Camiseta%20Polo!"
  },
  {
    id: "camiseta-infantil",
    cat: "camisetas",
    img: "images/camiseta_infantil.webp",
    imgErr: "https://placehold.co/400x400/FFF3E0/FF7A35?text=Camiseta+Infantil",
    name: "Camiseta Infantil",
    desc: "Do 2 ao 16 · Tecido macio e lavável",
    price: 3990,
    badge: { text: "Infantil 🌟", cls: "bo" },
    waText: "Quero%20Camiseta%20Infantil!"
  },

  /* ── IMPRESSOS ────────────────────────────────────── */
  {
    id: "cartao-visita",
    cat: "impressos",
    img: "images/cartao_visita.webp",
    imgErr: "https://placehold.co/400x400/EDE7F6/7C4DFF?text=Cartao+de+Visita",
    name: "Cartão de Visita",
    desc: "Papel couchê · Frente e verso colorido",
    price: 2990,
    badge: { text: "Popular 🖨️", cls: "bv" },
    waText: "Quero%20Cart%C3%A3o%20de%20Visita!"
  },
	{
    id: "Adesivos",
    cat: "impressos",
    img: "images/cartao_visita.webp",
    imgErr: "https://placehold.co/400x400/fff/7C4DFF?text=Adesivo2",
    name: "Adesivo",
    desc: "Papel couchê · Frente colorido",
    price: 2990,
    badge: { text: "Popular 🖨️", cls: "bp" },
    waText: "Quero%20Cart%C3%A3o%20de%20Visita!"
  },
  {
    id: "flyer",
    cat: "impressos",
    img: "images/flyer.webp",
    imgErr: "https://placehold.co/400x400/E8F5E9/00BFA6?text=Flyer+Panfleto",
    name: "Flyer / Panfleto",
    desc: "A5 ou A4 · Couchê brilhante ou fosco",
    price: 3990,
    waText: "Quero%20Flyer%20Personalizado!"
  },
  {
    id: "banner",
    cat: "impressos",
    img: "images/banner.webp",
    imgErr: "https://placehold.co/400x400/FFE9F3/FF4D8D?text=Banner",
    name: "Banner",
    desc: "Lona ou papel · Qualquer tamanho",
    price: 5990,
    badge: { text: "Destaque 🎯", cls: "bp" },
    waText: "Quero%20Banner%20Personalizado!"
  },

  /* ════════════════════════════════════════════════
     ADICIONE NOVOS PRODUTOS ABAIXO DESTA LINHA ↓
     Copie um bloco acima e ajuste os campos.
     ════════════════════════════════════════════════ */

];

/* ── Utilitário: formata preço em centavos → "R$ 35,00" ── */
function formatPrice(cents) {
  const reais     = Math.floor(cents / 100);
  const centavos  = String(cents % 100).padStart(2, '0');
  return { reais, centavos };
}

/* ── Gera o HTML de um card a partir de um objeto produto ── */
function buildCard(p, extraClass = '') {
  const { reais, centavos } = formatPrice(p.price);
  const badge = p.badge
    ? `<span class="pbadge ${p.badge.cls}">${p.badge.text}</span>`
    : '';
  const imgErr = p.imgErr
    ? ` onerror="this.src='${p.imgErr}'"`
    : '';
  const WA = "5551981710049";

  return `
    <div class="pcard fi ${extraClass}" data-cat="${p.cat}" data-id="${p.id}">
      <div class="pimg">
        <img src="${p.img}" alt="${p.name}" loading="lazy"${imgErr}/>
        ${badge}
        <div class="pov">
          <button class="pov-btn" onclick="openLB('${p.img}')">
            <i class="fa-solid fa-expand"></i> Ver
          </button>
        </div>
      </div>
      <div class="pinfo">
        <div class="pname">${p.name}</div>
        <div class="pdesc">${p.desc}</div>
        <div class="pfoot">
          <div class="pprice">R$ ${reais}<small>,${centavos}</small></div>
          <a href="https://api.whatsapp.com/send?phone=${WA}&text=${p.waText}"
             target="_blank" class="pwa">
            <i class="fa-brands fa-whatsapp"></i> Pedir
          </a>
        </div>
      </div>
    </div>`;
}
