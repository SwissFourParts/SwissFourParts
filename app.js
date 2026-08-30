let products = [
  {
    "id": 1,
    "name_de": "Zündkerze (NGK D8EA)",
    "name_en": "Spark plug (NGK D8EA)",
    "price": 5.5,
    "description_de": "NGK",
    "description_en": "NGK",
    "image": "images/zündkerze.jpg",
    "categories": ["CB750", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 2,
    "name_de": "CB750 Zündkerzenstecker Set",
    "name_en": "CB750 Spark plug cap set",
    "price": 40,
    "description_de": "NGK",
    "description_en": "NGK",
    "image": "images/kerzenstecker.jpg",
    "categories": ["CB750"],
    "in_stock": false
  },
  {
    "id": 3,
    "name_de": "CB750 Ölfilter",
    "name_en": "CB750 Oil filter",
    "price": 8,
    "description_de": "Ölfilter und Dichtung",
    "description_en": "Oilfilter and O-ring",
    "image": "images/oilfilter.jpg",
    "categories": ["CB750", "CB550K", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 4,
    "name_de": "Dichtring Vorderbremse",
    "name_en": "Front Brake Piston Seal",
    "price": 9.5,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/dichtring_bremse.jpg",
    "categories": ["CB750", "CB550K", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 5,
    "name_de": "CB750 Reparatur Set Vergaser",
    "name_en": "CB750 Carburetor rebuild kit",
    "price": 84,
    "description_de": "beinhalted Teile für alle vier Vergaser",
    "description_en": "includes parts for all four carburetors",
    "image": "images/vergaser_kit.jpg",
    "categories": ["CB750"],
    "in_stock": false
  },
  {
    "id": 6,
    "name_de": "Kupplungshebel",
    "name_en": "Clutch lever",
    "price": 18,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/kupplungshebel.jpg",
    "categories": ["CB750", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 7,
    "name_de": "CB750 Lenkermutter",
    "name_en": "CB750 Steering stem nut",
    "price": 9.5,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/lenkermutter.jpg",
    "categories": ["CB750", "CB550K", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 8,
    "name_de": "CB750 Chrom Scheinwerferhalter",
    "name_en": "CB750 Chrome headlight bracket",
    "price": 119,
    "description_de": "Replika Ersatzteil",
    "description_en": "replica spare part",
    "image": "images/scheinwerferhalter.jpg",
    "categories": ["CB750"],
    "in_stock": false
  },
  {
    "id": 9,
    "name_de": "CB750 Sticker: Reifeninformation",
    "name_en": "CB750 Sticker: Tire info",
    "price": 4.5,
    "description_de": "Sticker",
    "description_en": "Sticker",
    "image": "images/tire_sticker.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 10,
    "name_de": "CB750 Sticker: Helmet holder",
    "name_en": "CB750 Sticker: Helmet holder",
    "price": 3.2,
    "description_de": "Sticker",
    "description_en": "Sticker",
    "image": "images/sticker_helmet.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 11,
    "name_de": "CB750 K1 Tankemblem Kit",
    "name_en": "CB750 K1 Tank Emblem Kit",
    "price": 82,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/tank_emblem_set.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 12,
    "name_de": "CB750 Emblem links",
    "name_en": "CB750 Emblem left",
    "price": 45,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/emblem_links.jpg",
    "categories": ["CB750"],
    "in_stock": false
  },
  {
    "id": 13,
    "name_de": "CB750 Emblem rechts",
    "name_en": "CB750 Emblem right",
    "price": 45,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/emblem_rechts.jpg",
    "categories": ["CB750"],
    "in_stock": false
  },
  {
    "id": 14,
    "name_de": "Hupenknopf",
    "name_en": "Horn button",
    "price": 10,
    "description_de": "Replika Ersatzteil",
    "description_en": "Replica spare part",
    "image": "images/hupenknopf.jpg",
    "categories": ["CB125T", "CB750", "CB550K"],
    "in_stock": true
  },
  {
    "id": 15,
    "name_de": "Kickstartergummi (K0-K2)",
    "name_en": "Rubber kickstarter (K0-K2)",
    "price": 3.5,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/kickstartergummi.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 16,
    "name_de": "Griffgummi set (CB750 K0-K1, CB400F)",
    "name_en": "Handlebar grip set (CB750 K0-K1, CB400F)",
    "price": 12.5,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/griffgummi_set.jpg",
    "categories": ["CB750", "CB400F"],
    "in_stock": true
  },
  {
    "id": 17,
    "name_de": "Bremsbeläge vorne",
    "name_en": "Breakpads front",
    "price": 39,
    "description_de": "japanisches Ersatzteil",
    "description_en": "japanese spare part",
    "image": "images/bremsklötze.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 18,
    "name_de": "Befestigungsgummis Seitenabdeckung",
    "name_en": "Side Cover Rubber Grommets",
    "price": 12.5,
    "description_de": "japanisches Ersatzteil",
    "description_en": "japanese spare part",
    "image": "images/Befestigungsgummis_Seitenabdeckung.jpg",
    "categories": ["CB750"],
    "in_stock": true
  },
  {
    "id": 19,
    "name_de": "Birne Blinker",
    "name_en": "Turn Signal Bulb",
    "price": 3,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/birne_blinker.jpg",
    "categories": ["CB750", "CB400F", "CB350F"],
    "in_stock": true
  },
  {
    "id": 20,
    "name_de": "Schalthebel Gummi",
    "name_en": "Shift lever rubber",
    "price": 2.5,
    "description_de": "originales Ersatzteil",
    "description_en": "original spare part",
    "image": "images/schalthebel_gummi.jpg",
    "categories": ["CB750", "CB400F", "CB350F"],
    "in_stock": true
  }
];





// Add your PDF list configuration
let pdfs = [
  {
    "id": 1,
    "title_de": "CB125T Anzugsdrehmomente Deutsch",
    "title_en": "CB125T Torque values german",
    "description_de": "PDF",
    "description_en": "PDF",
    "filename": "CB125T_Anzugsdrehmomente.pdf",
    "thumbnail": "pdfs/CB125T_Anzugsdrehmomente_thumbnail.jpg"
  },
  {
    "id": 2,
    "title_de": "CB750K Anzugsdrehmomente Englisch",
    "title_en": "CB750K Torque values english",
    "description_de": "PDF",
    "description_en": "PDF",
    "filename": "CB750K_Torque_values.pdf",
    "thumbnail": "pdfs/CB750K_Torque_thumbnail.jpg"
  }
];

let currentView = 'shop'; // 'shop' or 'knowledge'

// Switch to Shop view
function showShop() {
  currentView = 'shop';
  document.getElementById('filter-buttons').style.display = 'flex';
  document.getElementById('order-summary').style.display = 'block';
  document.getElementById('how-to-order').style.display = 'block';
  renderProducts();
  closeSidebarIfOpen();
}

// Switch to Knowledge Base view
function showKnowledgeBase() {
  currentView = 'knowledge';
  document.getElementById('filter-buttons').style.display = 'none';
  document.getElementById('pagination-controls').innerHTML = '';
  document.getElementById('order-summary').style.display = 'none';
  document.getElementById('how-to-order').style.display = 'none';
  renderPDFs();
  closeSidebarIfOpen();
}

// Render PDF files inside product container
function renderPDFs() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (pdfs.length === 0) {
    container.innerHTML = `
      <p class="de-text">Keine Dokumente verfügbar.</p>
      <p class="en-text" style="display:none;">No documents available.</p>
    `;
    applyLanguageVisibility();
    return;
  }

  pdfs.forEach((pdf) => {
    const pdfDiv = document.createElement("div");
    pdfDiv.className = "product pdf-card";

    // Use image thumbnail if provided, otherwise fallback to standard PDF icon
    const previewHTML = pdf.thumbnail
      ? `<img src="${pdf.thumbnail}" alt="${pdf.title_en}" class="pdf-thumbnail">`
      : `<div class="pdf-icon">📄</div>`;

    pdfDiv.innerHTML = `
      ${previewHTML}
      <div class="product-details">
        <strong class="de-text">${pdf.title_de}</strong>
        <strong class="en-text" style="display:none;">${pdf.title_en}</strong><br>
        <span class="de-text">${pdf.description_de}</span>
        <span class="en-text" style="display:none;">${pdf.description_en}</span>
      </div>
      <a href="pdfs/${pdf.filename}" download class="download-btn" onclick="event.stopPropagation()">
        <span class="de-text">Herunterladen</span>
        <span class="en-text" style="display:none;">Download</span> 📥
      </a>
    `;
    container.appendChild(pdfDiv);
  });

  applyLanguageVisibility();
}

// Helper to close sidebar when navigating
function closeSidebarIfOpen() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('open')) {
    toggleSidebar();
  }
}





let quantities = [];
let language = 'de';
let currentCategoryFilter = 'alle';
let currentPage = 1;
const itemsPerPage = 10;

function loadProducts() {
  quantities = new Array(products.length).fill(0);
  filterProducts('alle');
  setLanguage('de');
  updateOrderSummary();
}

// Filter category and reset to page 1
function filterProducts(filter) {
  if (currentView !== 'shop') {
    showShop();
  }
  currentCategoryFilter = filter;
  currentPage = 1;

  ['filter-alle', 'filter-cb750', 'filter-cb550k', 'filter-cb400f', 'filter-cb350f', 'filter-cb125t'].forEach(id => {
    document.getElementById(id)?.classList.toggle('active', id === 'filter-' + filter.toLowerCase());
  });

  renderProducts();
}

// Get items matching current filter
function getFilteredProducts() {
  return products.map((p, originalIndex) => ({ ...p, originalIndex }))
    .filter(p => currentCategoryFilter === 'alle' || p.categories.includes(currentCategoryFilter));
}

// Render dynamic product page and pagination controls
// Render dynamic product page and pagination controls
function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  paginatedItems.forEach((p) => {
    const isOutOfStock = p.in_stock === false;
    const index = p.originalIndex;
    const productDiv = document.createElement("div");
    
    productDiv.className = `product ${p.categories.join(" ")} ${isOutOfStock ? "out-of-stock" : ""}`;
    
    // Make product image/card clickable regardless of stock status
    productDiv.onclick = () =>
      openPopup(p.image, p.name_en, {
        de: `<strong>${p.name_de}</strong><br>${p.description_de}<br>Preis: CHF ${p.price}`,
        en: `<strong>${p.name_en}</strong><br>${p.description_en}<br>Price: CHF ${p.price}`
      });

    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.name_en}">
      <div class="product-details">
        <strong class="de-text">${p.name_de}</strong>
        <strong class="en-text" style="display:none;">${p.name_en}</strong><br>
        <span class="de-text">${p.description_de}</span>
        <span class="en-text" style="display:none;">${p.description_en}</span><br>
        <span class="de-text">Preis: CHF ${p.price}</span>
        <span class="en-text" style="display:none;">Price: CHF ${p.price}</span>
        ${isOutOfStock ? `
          <br><em class="de-text" style="color: #d9534f; font-weight: bold;">Nicht auf Lager</em>
          <em class="en-text" style="color: #d9534f; font-weight: bold; display:none;">Out of stock</em>
        ` : ''}
      </div>
      <div class="quantity-controls" onclick="event.stopPropagation()">
        <button onclick="decreaseQuantity(${index})" ${isOutOfStock ? "disabled" : ""}>-</button>
        <span id="qty-${index}">${quantities[index]}</span>
        <button onclick="increaseQuantity(${index})" ${isOutOfStock ? "disabled" : ""}>+</button>
      </div>
    `;
    container.appendChild(productDiv);
  });

  renderPaginationControls(totalPages);
  applyLanguageVisibility();
}

// Render page buttons
function renderPaginationControls(totalPages) {
  const controlsContainer = document.getElementById("pagination-controls");
  if (!controlsContainer) return;
  controlsContainer.innerHTML = "";

  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "«";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => changePage(currentPage - 1);
  controlsContainer.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === currentPage) pageBtn.className = "active";
    pageBtn.onclick = () => changePage(i);
    controlsContainer.appendChild(pageBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "»";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => changePage(currentPage + 1);
  controlsContainer.appendChild(nextBtn);
}

function changePage(newPage) {
  currentPage = newPage;
  renderProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLanguage(lang) {
  language = lang;

  document.getElementById('lang-de')?.classList.toggle('active', lang === 'de');
  document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');

  ['filter-alle', 'filter-cb750', 'filter-cb550k', 'filter-cb400f', 'filter-cb350f', 'filter-cb125t', 'condition-new', 'condition-used'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.querySelectorAll('span.de-text').forEach(el => el.style.display = (lang === 'de') ? '' : 'none');
      btn.querySelectorAll('span.en-text').forEach(el => el.style.display = (lang === 'en') ? '' : 'none');
    }
  });

  document.getElementById('order-summary-title').textContent = (lang === 'de') ? 'Bestellübersicht' : 'Order summary';
  document.getElementById('send-email-button').textContent = (lang === 'de') ? 'Bestellung senden' : 'Send order';

  applyLanguageVisibility();
  updateOrderSummary();
}

function applyLanguageVisibility() {
  document.querySelectorAll('.de-text').forEach(el => el.style.display = (language === 'de') ? '' : 'none');
  document.querySelectorAll('.en-text').forEach(el => el.style.display = (language === 'en') ? '' : 'none');
}

// Popup toggles
function openPopup(imgSrc, altText, textObj) {
  document.getElementById('popup-img').src = imgSrc;
  document.getElementById('popup-img').alt = altText;
  document.getElementById('popup-text').innerHTML = language === 'de' ? textObj.de : textObj.en;
  document.getElementById('popup').style.display = 'flex';
}
function closePopup() { document.getElementById('popup').style.display = 'none'; }

function openAboutPopup() { document.getElementById('about-popup').style.display = 'flex'; }
function closeAboutPopup() { document.getElementById('about-popup').style.display = 'none'; }
function openAgbPopup() { document.getElementById('agb-popup').style.display = 'flex'; }
function closeAgbPopup() { document.getElementById('agb-popup').style.display = 'none'; }
function openImpressumPopup() { document.getElementById('impressum-popup').style.display = 'flex'; }
function closeImpressumPopup() { document.getElementById('impressum-popup').style.display = 'none'; }

// Quantity logic
function increaseQuantity(i) { quantities[i]++; updateQuantityDisplay(i); updateOrderSummary(); }
function decreaseQuantity(i) { if (quantities[i] > 0) { quantities[i]--; updateQuantityDisplay(i); updateOrderSummary(); } }
function updateQuantityDisplay(i) { 
  const el = document.getElementById('qty-' + i);
  if (el) el.textContent = quantities[i];
}

// Cart calculation & mailto builder
function updateOrderSummary() {
  let productLabel = language === 'de' ? 'Produkt' : 'Product';
  let quantityLabel = language === 'de' ? 'Anzahl' : 'Qty';
  let priceLabel = language === 'de' ? 'Preis' : 'Price';
  let shippingLabel = language === 'de' ? 'Versandkosten' : 'Shipping';
  let totalLabel = language === 'de' ? 'Gesamttotal' : 'Total';
  let noItemsText = language === 'de' ? 'Keine Produkte ausgewählt.' : 'No products selected.';

  let emailSubject = encodeURIComponent(language === 'de' ? 'Bestellung SwissFourParts' : 'Order SwissFourParts');
  let emailBody = (language === 'de' ? 'Bestellübersicht' : 'Order summary') + ':\n\n';
  let hasItems = false;
  let summaryText = "";
  let total = 0;
  const shippingCost = 4.0;

  const col1 = 36;
  const col2 = 10;
  const col3 = 12;

  summaryText += productLabel.padEnd(col1) + quantityLabel.padEnd(col2) + priceLabel.padEnd(col3) + "\n";
  summaryText += "-".repeat(col1 + col2 + col3) + "\n";

  products.forEach((p, i) => {
    if (quantities[i] > 0) {
      hasItems = true;
      let lineTotal = p.price * quantities[i];
      total += lineTotal;

      let name = language === 'de' ? p.name_de : p.name_en;
      let qty = String(quantities[i]);
      let price = `CHF ${lineTotal.toFixed(2)}`;

      summaryText += name.padEnd(col1) + qty.padEnd(col2) + price.padEnd(col3) + "\n";
      emailBody += `${productLabel}: ${name}\n${quantityLabel}: ${qty}\n${priceLabel}: ${price}\n\n`;
    }
  });

  if (!hasItems) {
    summaryText = noItemsText;
    emailBody += noItemsText;
  } else {
    total += shippingCost;
    let shipping = `CHF ${shippingCost.toFixed(2)}`;
    let grandTotal = `CHF ${total.toFixed(2)}`;

    summaryText += "\n";
    summaryText += shippingLabel.padEnd(col1 + col2) + shipping.padEnd(col3) + "\n";
    summaryText += "-".repeat(col1 + col2 + col3) + "\n";
    summaryText += totalLabel.padEnd(col1 + col2) + grandTotal.padEnd(col3) + "\n";

    emailBody += `${shippingLabel}: ${shipping}\n`;
    emailBody += `${totalLabel}: ${grandTotal}\n`;
  }

  document.getElementById('order-summary-text').textContent = summaryText;
  document.getElementById('send-email-button').href =
    `mailto:elias.leitgeweger@gmx.ch?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;
}

window.onload = () => {
  loadProducts();
};

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}
