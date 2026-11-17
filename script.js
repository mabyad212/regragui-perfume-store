const WHATSAPP = "212766384091";

// Temporary layout cards only. Replace these with the owner's confirmed names,
// fragrance references, stock status and prices before publishing.
const products = [
  // Indicative launch prices in MAD for 50 ml. These are suggested prices,
  // not confirmed owner prices; review costs and margins before publishing.
  {id:"bleu-signature",name:"Bleu Signature",inspired:"Inspired by Bleu de Chanel",category:"homme",note:"Boisé · Aromatique · Frais",description:"Un sillage élégant et frais, au caractère boisé.",price:90},
  {id:"sauvage-intense",name:"Sauvage Intense",inspired:"Inspired by Dior Sauvage",category:"homme",note:"Frais · Épicé · Ambré",description:"Un accord vibrant, puissant et affirmé.",price:90},
  {id:"aqua-fresh",name:"Aqua Fresh",inspired:"Inspired by Acqua di Giò",category:"homme",note:"Marin · Agrumes · Boisé",description:"Une fraîcheur lumineuse pour tous les jours.",price:90},
  {id:"imagination",name:"Imagination",inspired:"Inspired by Imagination",category:"homme",note:"Agrumes · Thé · Ambre",description:"Un parfum frais, lumineux et raffiné.",price:100},
  {id:"eros",name:"Eros",inspired:"Inspired by Versace Eros",category:"homme",note:"Menthe · Vanillé · Boisé",description:"Un accord énergique, sensuel et gourmand.",price:90},
  {id:"la-nuit",name:"La Nuit",inspired:"Inspired by La Nuit de L'Homme",category:"homme",note:"Cardamome · Cèdre · Épices",description:"Une signature élégante aux accents épicés.",price:90},
  {id:"stronger",name:"Stronger",inspired:"Inspired by Stronger With You",category:"homme",note:"Épicé · Vanillé · Ambré",description:"Chaleureux, enveloppant et séduisant.",price:90},
  {id:"le-male",name:"Le Marin",inspired:"Inspired by Le Male",category:"homme",note:"Lavande · Menthe · Vanille",description:"Un contraste frais et généreusement aromatique.",price:90},
  {id:"terre",name:"Terre",inspired:"Inspired by Terre d'Hermès",category:"homme",note:"Agrumes · Minéral · Boisé",description:"Un caractère sec, élégant et terreux.",price:100},
  {id:"tom-oud",name:"Oud Élégance",inspired:"Inspired by a Tom Ford-style oud profile",category:"homme",note:"Oud · Bois · Ambre",description:"Un sillage profond aux accents précieux.",price:110},

  {id:"my-way",name:"My Way",inspired:"Inspired by My Way",category:"femme",note:"Fleur blanche · Agrumes · Vanille",description:"Un bouquet lumineux et féminin.",price:90},
  {id:"libre",name:"Libre",inspired:"Inspired by Libre",category:"femme",note:"Lavande · Fleur d'oranger · Vanille",description:"Une fragrance florale, libre et affirmée.",price:95},
  {id:"jadore",name:"J'adore",inspired:"Inspired by J'adore",category:"femme",note:"Floral · Jasmin · Ylang-ylang",description:"Un bouquet floral doux et sophistiqué.",price:95},
  {id:"si",name:"Sì",inspired:"Inspired by Sì",category:"femme",note:"Cassis · Rose · Vanille",description:"Un accord fruité et élégant.",price:90},
  {id:"la-vie",name:"La Vie",inspired:"Inspired by La Vie est Belle",category:"femme",note:"Iris · Praliné · Vanille",description:"Une douceur gourmande et enveloppante.",price:95},
  {id:"coco",name:"Mademoiselle",inspired:"Inspired by Coco Mademoiselle",category:"femme",note:"Orange · Rose · Patchouli",description:"Un équilibre chic entre fraîcheur et profondeur.",price:100},
  {id:"alien",name:"Alien",inspired:"Inspired by Alien",category:"femme",note:"Jasmin · Ambre · Bois",description:"Une signature intense et mystérieuse.",price:100},
  {id:"good-girl",name:"Good Girl",inspired:"Inspired by Good Girl",category:"femme",note:"Fleurs blanches · Cacao · Tonka",description:"Un contraste gourmand et audacieux.",price:100},
  {id:"mon-paris",name:"Mon Paris",inspired:"Inspired by Mon Paris",category:"femme",note:"Fruits rouges · Jasmin · Patchouli",description:"Un accord fruité, pétillant et romantique.",price:95},
  {id:"baccarat",name:"Rouge Élixir",inspired:"Inspired by Baccarat Rouge 540",category:"unisexe",note:"Safran · Ambre · Bois",description:"Un sillage ambré, aérien et reconnaissable.",price:110},
  {id:"ck-one",name:"One",inspired:"Inspired by CK One",category:"unisexe",note:"Agrumes · Thé vert · Musc",description:"Une fraîcheur propre et facile à porter.",price:70},
  {id:"light-blue",name:"Blue",inspired:"Inspired by Light Blue",category:"unisexe",note:"Citron · Pomme · Cèdre",description:"Une sensation fraîche et ensoleillée.",price:80},
  {id:"lost-cherry",name:"Lost Cherry",inspired:"Inspired by Tom Ford Lost Cherry",category:"unisexe",note:"Cerise · Amande · Vanille",description:"Un accord fruité, gourmand et profond.",price:110},
  {id:"tobacco-vanille",name:"Tobacco Vanille",inspired:"Inspired by Tom Ford Tobacco Vanille",category:"unisexe",note:"Tabac · Vanille · Épices",description:"Une composition chaude et enveloppante.",price:110},
  {id:"oud-wood",name:"Oud Wood",inspired:"Inspired by Tom Ford Oud Wood",category:"unisexe",note:"Oud · Bois · Épices",description:"Un profil boisé, sec et sophistiqué.",price:110},
  {id:"vanilla-sex",name:"Vanilla Sex",inspired:"Inspired by Tom Ford Vanilla Sex",category:"unisexe",note:"Vanille · Amande · Notes douces",description:"Une vanille crémeuse aux accents amandés.",price:110},
  {id:"ombre-leather",name:"Ombré Leather",inspired:"Inspired by Tom Ford Ombré Leather",category:"unisexe",note:"Cuir · Ambre · Épices",description:"Un accord cuiré, intense et texturé.",price:110},
  {id:"bitter-peach",name:"Bitter Peach",inspired:"Inspired by Tom Ford Bitter Peach",category:"unisexe",note:"Pêche · Agrumes · Ambre",description:"Un accord fruité et chaleureux.",price:110},
  {id:"cafe-rose",name:"Café Rose",inspired:"Inspired by Tom Ford Café Rose",category:"femme",note:"Rose · Café · Patchouli",description:"Un floral profond avec une facette café.",price:110},
  {id:"noir-extreme",name:"Noir Extreme",inspired:"Inspired by Tom Ford Noir Extreme",category:"homme",note:"Épices · Ambre · Vanille",description:"Un accord ambré, chaud et élégant.",price:110},
  {id:"home-diffuser",name:"Diffuseur parfumé",inspired:"Collection parfum d'intérieur Regragui",category:"maison",note:"Parfum d'ambiance · Diffusion par bâtonnets",description:"Une touche parfumée pour votre intérieur.",price:120}
];

const translations = {
fr:{
announcement:"Livraison partout au Maroc · Commande directe sur WhatsApp",navHome:"Accueil",navCollection:"Collection",navStory:"Notre univers",navContact:"Contact",order:"Commander",
heroEyebrow:"L'ART DU PARFUM · TANGER, MAROC",heroTitle:"Votre histoire,<br><em>en fragrance.</em>",heroText:"Des fragrances inspirées, soigneusement élaborées pour laisser une impression qui vous ressemble.",discover:"Découvrir la collection",ourStory:"Notre univers",heroNote:"Des sillages qui racontent quelque chose.",scroll:"DÉFILER ↓",
introEyebrow:"L'ESSENCE DE REGRAGUI",introTitle:"Une signature olfactive.<br><em>Une présence inoubliable.</em>",introText:"Nous imaginons des parfums inspirés des grandes familles olfactives, avec une attention particulière portée au caractère, à l'équilibre et au plaisir de porter son parfum.",
collectionEyebrow:"TROUVEZ VOTRE SIGNATURE",collectionTitle:"La collection",collectionSub:"Explorez nos créations et trouvez le parfum qui vous ressemble.",all:"Tout",men:"Homme",women:"Femme",unisex:"Unisexe",catalogueNote:"Prix indicatifs proposés pour 50 ml — à valider par la marque après calcul des coûts et marges. Fragrances inspirées, sans affiliation avec les marques citées.",
storyEyebrow:"NOTRE UNIVERS",storyTitle:"Le parfum est<br><em>une façon d'être.</em>",storyText:"À Tanger, Regragui Perfume développe des fragrances inspirées, pensées pour accompagner chaque moment et exprimer chaque personnalité. Notre ambition : rendre le plaisir du parfum accessible, sans renoncer au caractère.",storyCta:"Parlons de votre prochain parfum",
promise1Title:"Des accords expressifs",promise1Text:"Des profils olfactifs choisis pour leur personnalité.",promise2Title:"Un format pratique",promise2Text:"Flacon 50 ml — facile à emporter au quotidien.",promise3Title:"Proche de vous",promise3Text:"Commande directe et livraison au Maroc.",
contactEyebrow:"VOTRE PROCHAIN SILLAGE COMMENCE ICI",contactTitle:"Trouvez le parfum<br><em>qui vous ressemble.</em>",contactText:"Une question sur une fragrance ou envie de commander ? Écrivez-nous directement.",whatsappCta:"Discuter sur WhatsApp ↗",footerLine:"Votre histoire, en fragrance.",details:"Demander le prix ↗",sample:"Exemple de présentation",homeFragrance:"Maison",diffuserEyebrow:"L'ART DE PARFUMER VOTRE INTÉRIEUR",diffuserTitle:"Une atmosphère.<br><em>Une signature.</em>",diffuserText:"Découvrez aussi le diffuseur parfumé Regragui, pensé pour apporter une touche parfumée à votre espace.",diffuserCta:"Découvrir la collection maison ↗"
},
ar:{
announcement:"التوصيل إلى جميع أنحاء المغرب · الطلب مباشرة عبر واتساب",navHome:"الرئيسية",navCollection:"التشكيلة",navStory:"قصتنا",navContact:"اتصل بنا",order:"اطلب الآن",
heroEyebrow:"فن العطر · طنجة، المغرب",heroTitle:"حكايتك،<br><em>في عطر.</em>",heroText:"عطور مستوحاة بعناية، صُممت لتترك انطباعاً يشبه شخصيتك.",discover:"اكتشف التشكيلة",ourStory:"قصتنا",heroNote:"روائح تحكي حكاية.",scroll:"اكتشف ↓",
introEyebrow:"جوهر رݣراݣي",introTitle:"بصمة عطرية.<br><em>حضور لا يُنسى.</em>",introText:"نبتكر عطوراً مستوحاة من عائلات عطرية معروفة، مع الاهتمام بالشخصية والتوازن ومتعة استخدام العطر.",
collectionEyebrow:"اكتشف عطرك المميز",collectionTitle:"التشكيلة",collectionSub:"اكتشف إبداعاتنا واختر العطر الذي يشبهك.",all:"الكل",men:"رجالي",women:"نسائي",unisex:"للجنسين",catalogueNote:"أثمنة مقترحة لـ 50 مل، يجب على العلامة تأكيدها بعد احتساب التكلفة والهامش. عطور مستوحاة وغير تابعة للعلامات المذكورة.",
storyEyebrow:"قصتنا",storyTitle:"العطر<br><em>أسلوب حياة.</em>",storyText:"من طنجة، تقدم رݣراݣي بيرفيوم عطوراً مستوحاة ترافق لحظاتك وتعبر عن شخصيتك. طموحنا هو جعل متعة العطر في متناول الجميع مع الحفاظ على الطابع المميز.",storyCta:"لنتحدث عن عطرك القادم",
promise1Title:"تركيبات مميزة",promise1Text:"روائح مختارة لشخصيتها وطابعها.",promise2Title:"حجم عملي",promise2Text:"قارورة 50 مل مناسبة للاستعمال اليومي.",promise3Title:"قريبون منك",promise3Text:"الطلب المباشر والتوصيل داخل المغرب.",
contactEyebrow:"عطرك القادم يبدأ من هنا",contactTitle:"اكتشف العطر<br><em>الذي يشبهك.</em>",contactText:"هل لديك سؤال عن أحد العطور أو ترغب في الطلب؟ راسلنا مباشرة.",whatsappCta:"تواصل عبر واتساب ↗",footerLine:"حكايتك، في عطر.",details:"استفسر عن الثمن ↗",sample:"نموذج للعرض",homeFragrance:"للمنزل",diffuserEyebrow:"فن تعطير منزلك",diffuserTitle:"أجواء مميزة.<br><em>بصمة عطرية.</em>",diffuserText:"اكتشف أيضاً معطر المنزل من رݣراݣي، لإضافة لمسة عطرية إلى مساحتك.",diffuserCta:"اكتشف تشكيلة المنزل ↗"
},
en:{
announcement:"Delivery throughout Morocco · Order directly on WhatsApp",navHome:"Home",navCollection:"Collection",navStory:"Our story",navContact:"Contact",order:"Order now",
heroEyebrow:"THE ART OF PERFUMERY · TANGIER, MOROCCO",heroTitle:"Your story,<br><em>in fragrance.</em>",heroText:"Thoughtfully crafted, inspired fragrances made to leave an impression that feels like you.",discover:"Explore the collection",ourStory:"Our story",heroNote:"Scents that tell a story.",scroll:"SCROLL ↓",
introEyebrow:"THE ESSENCE OF REGRAGUI",introTitle:"An olfactory signature.<br><em>An unforgettable presence.</em>",introText:"We create fragrances inspired by celebrated scent families, with care for character, balance and the pleasure of wearing a perfume.",
collectionEyebrow:"FIND YOUR SIGNATURE",collectionTitle:"The collection",collectionSub:"Explore our creations and find the fragrance that feels like you.",all:"All",men:"For him",women:"For her",unisex:"Unisex",catalogueNote:"Suggested 50 ml prices — the brand should confirm them after checking costs and margins. Inspired fragrances; not affiliated with the referenced brands.",
storyEyebrow:"OUR WORLD",storyTitle:"Fragrance is<br><em>a way of being.</em>",storyText:"Based in Tangier, Regragui Perfume develops inspired fragrances designed to accompany every moment and express every personality. Our ambition is to make the pleasure of fragrance accessible without losing character.",storyCta:"Let's talk about your next fragrance",
promise1Title:"Expressive accords",promise1Text:"Scent profiles selected for their character.",promise2Title:"An everyday format",promise2Text:"50 ml bottle — easy to take with you.",promise3Title:"Close to you",promise3Text:"Direct ordering and delivery in Morocco.",
contactEyebrow:"YOUR NEXT SCENT STARTS HERE",contactTitle:"Find the fragrance<br><em>that feels like you.</em>",contactText:"Have a question or ready to order? Message us directly.",whatsappCta:"Chat on WhatsApp ↗",footerLine:"Your story, in fragrance.",details:"Ask for the price ↗",sample:"Sample presentation",homeFragrance:"Home",diffuserEyebrow:"THE ART OF SCENTING YOUR SPACE",diffuserTitle:"An atmosphere.<br><em>A signature.</em>",diffuserText:"Discover the Regragui scented diffuser, created to bring a refined fragrance touch to your space.",diffuserCta:"Explore home fragrance ↗"
}
};

let currentFilter = "all";
let currentLanguage = "fr";

function renderProducts(){
  const grid = document.getElementById("productGrid");
  const t = translations[currentLanguage];
  const shown = products.filter(p => currentFilter === "all" || p.category === currentFilter);
  grid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-visual">
        <img src="${p.category === "maison" ? "assets/regragui-diffuser.jpg" : p.category === "femme" ? "assets/regragui-womens-fragrance.jpg" : p.category === "homme" ? "assets/regragui-bottle-gold.jpg" : "assets/regragui-bottle-in-hand.jpg"}" alt="${p.category === "maison" ? "Diffuseur parfumé Regragui" : `Flacon Regragui Perfume 50 ml — ${p.name}`}">
      </div>
      <div class="product-info">
        <small>${p.category === "homme" ? t.men : p.category === "femme" ? t.women : p.category === "maison" ? t.homeFragrance : t.unisex}</small>
        <h3>${p.name}</h3>
        <p class="inspired-label">${p.inspired}</p>
        <p>${p.note} — ${p.description}</p>
        <div class="product-bottom">
          <strong>${p.price ? `${p.price} MAD` : t.sample}</strong>
          <button type="button" data-product="${p.name}">${t.details}</button>
        </div>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-product]").forEach(btn => btn.addEventListener("click", () => {
    const name = btn.dataset.product;
    const message = encodeURIComponent(`Salam Regragui Perfume, je souhaite avoir des informations sur ${name} (50 ml).`);
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank", "noopener");
  }));
}

function setLanguage(lang){
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  renderProducts();
}
document.getElementById("languageSelect").addEventListener("change", e => setLanguage(e.target.value));
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  currentFilter = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProducts();
}));
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
