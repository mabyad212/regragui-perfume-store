const WHATSAPP = "212766384091";

// Temporary layout cards only. Replace these with the owner's confirmed names,
// fragrance references, stock status and prices before publishing.
const products = [
  {id:"sample-1",name:"Signature Homme",category:"homme",note:"Boisé · Ambré · Épicé",description:"Une présence affirmée, chaleureuse et élégante.",price:null},
  {id:"sample-2",name:"Signature Femme",category:"femme",note:"Floral · Musqué · Doux",description:"Un accord lumineux, délicat et féminin.",price:null},
  {id:"sample-3",name:"Équilibre",category:"unisexe",note:"Frais · Aromatique · Boisé",description:"Une fragrance équilibrée pour tous les jours.",price:null}
];

const translations = {
fr:{
announcement:"Livraison partout au Maroc · Commande directe sur WhatsApp",navHome:"Accueil",navCollection:"Collection",navStory:"Notre univers",navContact:"Contact",order:"Commander",
heroEyebrow:"L'ART DU PARFUM · TANGER, MAROC",heroTitle:"Votre histoire,<br><em>en fragrance.</em>",heroText:"Des fragrances inspirées, soigneusement élaborées pour laisser une impression qui vous ressemble.",discover:"Découvrir la collection",ourStory:"Notre univers",heroNote:"Des sillages qui racontent quelque chose.",scroll:"DÉFILER ↓",
introEyebrow:"L'ESSENCE DE REGRAGUI",introTitle:"Une signature olfactive.<br><em>Une présence inoubliable.</em>",introText:"Nous imaginons des parfums inspirés des grandes familles olfactives, avec une attention particulière portée au caractère, à l'équilibre et au plaisir de porter son parfum.",
collectionEyebrow:"TROUVEZ VOTRE SIGNATURE",collectionTitle:"La collection",collectionSub:"Explorez nos créations et trouvez le parfum qui vous ressemble.",all:"Tout",men:"Homme",women:"Femme",unisex:"Unisexe",catalogueNote:"Catalogue de démonstration : les références, disponibilités et prix seront ajoutés après validation par la marque.",
storyEyebrow:"NOTRE UNIVERS",storyTitle:"Le parfum est<br><em>une façon d'être.</em>",storyText:"À Tanger, Regragui Perfume développe des fragrances inspirées, pensées pour accompagner chaque moment et exprimer chaque personnalité. Notre ambition : rendre le plaisir du parfum accessible, sans renoncer au caractère.",storyCta:"Parlons de votre prochain parfum",
promise1Title:"Des accords expressifs",promise1Text:"Des profils olfactifs choisis pour leur personnalité.",promise2Title:"Un format pratique",promise2Text:"Flacon 50 ml — facile à emporter au quotidien.",promise3Title:"Proche de vous",promise3Text:"Commande directe et livraison au Maroc.",
contactEyebrow:"VOTRE PROCHAIN SILLAGE COMMENCE ICI",contactTitle:"Trouvez le parfum<br><em>qui vous ressemble.</em>",contactText:"Une question sur une fragrance ou envie de commander ? Écrivez-nous directement.",whatsappCta:"Discuter sur WhatsApp ↗",footerLine:"Votre histoire, en fragrance.",details:"Demander le prix ↗",sample:"Exemple de présentation"
},
ar:{
announcement:"التوصيل إلى جميع أنحاء المغرب · الطلب مباشرة عبر واتساب",navHome:"الرئيسية",navCollection:"التشكيلة",navStory:"قصتنا",navContact:"اتصل بنا",order:"اطلب الآن",
heroEyebrow:"فن العطر · طنجة، المغرب",heroTitle:"حكايتك،<br><em>في عطر.</em>",heroText:"عطور مستوحاة بعناية، صُممت لتترك انطباعاً يشبه شخصيتك.",discover:"اكتشف التشكيلة",ourStory:"قصتنا",heroNote:"روائح تحكي حكاية.",scroll:"اكتشف ↓",
introEyebrow:"جوهر رݣراݣي",introTitle:"بصمة عطرية.<br><em>حضور لا يُنسى.</em>",introText:"نبتكر عطوراً مستوحاة من عائلات عطرية معروفة، مع الاهتمام بالشخصية والتوازن ومتعة استخدام العطر.",
collectionEyebrow:"اكتشف عطرك المميز",collectionTitle:"التشكيلة",collectionSub:"اكتشف إبداعاتنا واختر العطر الذي يشبهك.",all:"الكل",men:"رجالي",women:"نسائي",unisex:"للجنسين",catalogueNote:"هذه نماذج أولية للعرض. ستُضاف أسماء العطور والأسعار والتوفر بعد تأكيدها من العلامة.",
storyEyebrow:"قصتنا",storyTitle:"العطر<br><em>أسلوب حياة.</em>",storyText:"من طنجة، تقدم رݣراݣي بيرفيوم عطوراً مستوحاة ترافق لحظاتك وتعبر عن شخصيتك. طموحنا هو جعل متعة العطر في متناول الجميع مع الحفاظ على الطابع المميز.",storyCta:"لنتحدث عن عطرك القادم",
promise1Title:"تركيبات مميزة",promise1Text:"روائح مختارة لشخصيتها وطابعها.",promise2Title:"حجم عملي",promise2Text:"قارورة 50 مل مناسبة للاستعمال اليومي.",promise3Title:"قريبون منك",promise3Text:"الطلب المباشر والتوصيل داخل المغرب.",
contactEyebrow:"عطرك القادم يبدأ من هنا",contactTitle:"اكتشف العطر<br><em>الذي يشبهك.</em>",contactText:"هل لديك سؤال عن أحد العطور أو ترغب في الطلب؟ راسلنا مباشرة.",whatsappCta:"تواصل عبر واتساب ↗",footerLine:"حكايتك، في عطر.",details:"استفسر عن الثمن ↗",sample:"نموذج للعرض"
},
en:{
announcement:"Delivery throughout Morocco · Order directly on WhatsApp",navHome:"Home",navCollection:"Collection",navStory:"Our story",navContact:"Contact",order:"Order now",
heroEyebrow:"THE ART OF PERFUMERY · TANGIER, MOROCCO",heroTitle:"Your story,<br><em>in fragrance.</em>",heroText:"Thoughtfully crafted, inspired fragrances made to leave an impression that feels like you.",discover:"Explore the collection",ourStory:"Our story",heroNote:"Scents that tell a story.",scroll:"SCROLL ↓",
introEyebrow:"THE ESSENCE OF REGRAGUI",introTitle:"An olfactory signature.<br><em>An unforgettable presence.</em>",introText:"We create fragrances inspired by celebrated scent families, with care for character, balance and the pleasure of wearing a perfume.",
collectionEyebrow:"FIND YOUR SIGNATURE",collectionTitle:"The collection",collectionSub:"Explore our creations and find the fragrance that feels like you.",all:"All",men:"For him",women:"For her",unisex:"Unisex",catalogueNote:"Demo catalogue: fragrance names, availability and prices will be added once confirmed by the brand.",
storyEyebrow:"OUR WORLD",storyTitle:"Fragrance is<br><em>a way of being.</em>",storyText:"Based in Tangier, Regragui Perfume develops inspired fragrances designed to accompany every moment and express every personality. Our ambition is to make the pleasure of fragrance accessible without losing character.",storyCta:"Let's talk about your next fragrance",
promise1Title:"Expressive accords",promise1Text:"Scent profiles selected for their character.",promise2Title:"An everyday format",promise2Text:"50 ml bottle — easy to take with you.",promise3Title:"Close to you",promise3Text:"Direct ordering and delivery in Morocco.",
contactEyebrow:"YOUR NEXT SCENT STARTS HERE",contactTitle:"Find the fragrance<br><em>that feels like you.</em>",contactText:"Have a question or ready to order? Message us directly.",whatsappCta:"Chat on WhatsApp ↗",footerLine:"Your story, in fragrance.",details:"Ask for the price ↗",sample:"Sample presentation"
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
      <div class="product-visual"><div class="product-bottle" aria-hidden="true"></div></div>
      <div class="product-info">
        <small>${p.category === "homme" ? t.men : p.category === "femme" ? t.women : t.unisex}</small>
        <h3>${p.name}</h3>
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
