const CHECKED = "2026-11-27";
const DEALS = [
 {name:"TCL 65\" S4CF Series 4K UHD HDR Smart TV with Fire TV (2026)", store:"Best Buy", cat:"TVs & Streaming", price:229.99, was:469.99, signal:"strong", url:"https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112?utm_source=meta&utm_medium=feed&fs=toycn3", source:"Best Buy product page (Doorbuster listing)", evidence:"Best Buy lists it as a Doorbuster at $229.99, saving $240 against a $469.99 comparable value, and its Black Friday announcement repeats the $229.99 price. Comparable value is a reference figure, so the saving is real but the percentage flatters it."},
 {name:"Insignia 32\" Class F40 Series 1080p Smart Fire TV", store:"Best Buy", cat:"TVs & Streaming", price:89.99, was:129.99, signal:"routine", url:"https://www.bestbuy.com/product/insignia-32-class-f40-series-1080p-full-hd-direct-led-smart-tv-with-fire-tv/J2FPJK622K/sku/6688047?utm_source=meta&utm_medium=feed&fs=tovf0j", source:"Best Buy product page", evidence:"Only $40 under a $129.99 comparable value, and Best Buy's own page shows smaller F40 models at $59.99–$89.99, so this is a modest cut on a budget set rather than a standout low."},
 {name:"Amazon Fire TV Stick 4K (2026)", store:"Amazon", cat:"TVs & Streaming", price:20, was:60, signal:"new-low", url:"https://www.amazon.com/dp/B0G4XRP464?tag=toysj-20&psc=1", source:"9to5Toys Amazon Black Friday Week report, Day 6", evidence:"The Day 6 report lists the new Fire TV Stick 4K at $20 against a $60 regular price and labels it an all-time low; other session reports put it at $19.99, consistent with a genuine floor price."},
 {name:"Amazon Fire TV Cube 4K Ultra HD (Wi-Fi 6E)", store:"Amazon", cat:"TVs & Streaming", price:90, was:200, signal:"strong", url:"https://www.amazon.com/dp/B09BZZ3MM7?tag=toysj-20&psc=1", source:"9to5Toys Amazon Black Friday Week report, Day 6", evidence:"Listed at $90 against a $200 regular price in the same Day 6 roundup — more than half off Amazon's own flagship streamer, with no cheaper identical offer seen in the cross-check."},
 {name:"HP OmniBook 5 14\" 2K OLED Touchscreen Laptop (2026)", store:"Best Buy", cat:"Laptops & Tablets", price:449.99, was:799.99, signal:"strong", url:"https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6/sku/6690110", source:"Best Buy product page and Black Friday announcement", evidence:"Best Buy's announcement says save $350 with a $449.99 sale price, and the product page shows the same $449.99 Doorbuster price. An OLED touchscreen laptop at this price is well under typical 14-inch OLED pricing."},
 {name:"Apple iPad 11-inch (A16) Wi-Fi 128GB", store:"Walmart", cat:"Laptops & Tablets", price:379, was:449, signal:"routine", url:"https://www.walmart.com/ip/Apple-iPad-11-inch-A16-Wi-Fi-128GB-Silver/15483805722", source:"Walmart product page", evidence:"Walmart shows $379.00, was $449.00 — but Target lists the same iPad at $379.99 in this session, so the price is matched across stores rather than a Walmart-only low."},
 {name:"Sony WH-1000XM5 Wireless Noise Cancelling Headphones", store:"Best Buy", cat:"Audio", price:169.99, was:398, signal:"new-low", url:"https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727?utm_source=meta&utm_medium=feed&fs=toxl8r&country=US", source:"Best Buy product page", evidence:"Best Buy lists $169.99 with a $228 saving as a Doorbuster. Earlier session reporting tracked the XM5 at $198 elsewhere, so $169.99 undercuts the other prices found this session."},
 {name:"Apple AirPods Pro 3 Wireless Earbuds", store:"Target", cat:"Audio", price:149.99, was:249.99, signal:"new-low", url:"https://www.target.com/p/ap2022-true-wireless-bluetooth-headphones/-/A-85978609", source:"Target product page", evidence:"Target shows $149.99, reg. $249.99. Earlier Black Friday reports in this session had AirPods Pro 3 at $179, and Walmart also dropped to $149, marking a fresh low rather than the first-wave price."},
 {name:"Beats Solo 4 Bluetooth Wireless On-Ear Headphones", store:"Target", cat:"Audio", price:79.99, was:199.99, signal:"strong", url:"https://www.target.com/p/beats-solo-4-bluetooth-wireless-on-ear-headphones-warm-white/-/A-93124207", source:"Target product page", evidence:"Target lists $79.99 against a $199.99 regular price — a 60% cut that also undercuts the $129.99 Solo 4 price seen in an earlier session report."},
 {name:"Beats Studio Pro Bluetooth Wireless Headphones", store:"Target", cat:"Audio", price:139.99, was:349.99, signal:"strong", url:"https://www.target.com/p/beats-studio-pro-bluetooth-wireless-headphones-matte-pink/-/A-94778650", source:"Target product page", evidence:"Target shows $139.99, reg. $349.99. The headline percentage leans on a high list price, but the absolute $139.99 price for an ANC over-ear model is genuinely low."},
 {name:"Nintendo Switch 2 + Mario Kart World Bundle", store:"Target", cat:"Gaming", price:499.99, was:549.99, signal:"routine", url:"https://www.target.com/p/nintendo-switch-2-mario-kart-world-bundle/-/A-1013129025", source:"Target product page", evidence:"Target lists $499.99, reg. $549.99, but session reporting notes the bundle price rose $50 in September before this “sale” brought it back to $499.99 — so the cut restores an earlier price more than it beats one."},
 {name:"Nintendo Switch 2 with NSO and Mario Kart World Digital Code", store:"Costco", cat:"Gaming", price:519.99, was:569.99, signal:"routine", url:"https://www.costco.com/p/-/4201051302?clickref=1110l4FpUnCp&CID=PZ&code=AFFNMBR&referralClientId=110l1347&campaignSource=Partnerize", source:"PhillyVoice Black Friday roundup and Costco listing", evidence:"Costco's bundle is $519.99, $50 off, but it requires a membership and the same console-and-game bundle is $499.99 at Target and Best Buy in this session; the extra year of Switch Online is the only added value."},
 {name:"PlayStation 5 DualSense Controller (Nova Pink)", store:"Target", cat:"Gaming", price:54.99, was:74.99, signal:"strong", url:"https://www.target.com/p/playstation-5-dual-sense-controller-nova-pink/-/A-1012255295", source:"Target product page", evidence:"Target lists $54.99, reg. $74.99, and session reporting found the same $54.99 DualSense price at Best Buy and Amazon — a matched, genuinely reduced controller price rather than a one-store tease."},
 {name:"Donkey Kong Bananza (Nintendo Switch 2)", store:"Nintendo Store", cat:"Gaming", price:49.99, was:69.99, signal:"strong", url:"https://www.nintendo.com/us/store/products/nintendo-switch-2-donkey-kong-bananza-121485", source:"Nintendo Everything Black Friday deals table", evidence:"Nintendo's Black Friday promotion cuts first-party Switch 2 games by $20 from Nov 22–29, taking Donkey Kong Bananza from $69.99 to $49.99 at participating retailers including Nintendo's own stores — rare for a first-party title."},
 {name:"Shark PowerDetect Speed Cordless Stick Vacuum", store:"Best Buy", cat:"Home & Kitchen", price:199.99, was:499.99, signal:"strong", url:"https://www.bestbuy.com/product/shark-powerdetect-speed-cordless-stick-vacuum-cleaner-hepa-filtration-60-min-runtime-ia1121-ivory/JXJVXL847Y/sku/6689453?ref=166_625&loc=SOC_MDF_ASC_1692337_120249298161040259_FY27_HOL_SMAPP_SHKNJA_10008797_OG_PDSOC_MULTI_META_CVR_Socialplus_MDF_NA_November2026_Others%E2%80%8B&media_type=image", source:"Best Buy product page", evidence:"Best Buy lists $199.99, save $300 against a $499.99 comparable value, and its announcement repeats the $300 saving. Even discounting the reference price, $199.99 for a current cordless Shark is a strong absolute price."},
 {name:"Shark Detect Lift-Away ADV Upright Vacuum (LA490)", store:"Walmart", cat:"Home & Kitchen", price:144, was:379.99, signal:"strong", url:"https://www.walmart.com/ip/Shark-Detect-Lift-Away-ADV-Upright-Vacuum-Pet-Friendly-Floor-Detect-Direction-Detect-PowerFins-Self-Cleaning-Brushroll-LA490-Mauve/14422865087", source:"Walmart product page", evidence:"Walmart shows the Mauve model at $144.00, was $379.99, labelled a Black Friday Deal. Note the discount is colour-specific — another colour on the same page is $329.99 — so pick the Mauve variant."},
 {name:"Dyson V9 Motorbar Cordless Vacuum", store:"Target", cat:"Home & Kitchen", price:269.99, was:599.99, signal:"strong", url:"https://www.target.com/p/dyson-v9-motorbar-cordless-vacuum-9-8-34-cleaning-path-nickel/-/A-1011912746", source:"Target product page", evidence:"Target lists $269.99 against a $599.99 regular price. The percentage leans on Dyson's premium list price, but $269.99 is well under what cordless Dysons usually fetch."},
 {name:"Keurig K-Mini Go Single-Serve Coffee Maker", store:"Target", cat:"Home & Kitchen", price:49.99, was:88.99, signal:"strong", url:"https://www.target.com/p/keurig-k-mini-go-single-serve-k-cup-pod-coffee-maker-gray/-/A-90116759", source:"Target product page", evidence:"Target shows $49.99, reg. $88.99 — and an earlier session report had this model at $69.99 at Target, so the price has dropped further since."},
 {name:"Ninja SLUSHi 96 oz Frozen Drink Machine (FS310)", store:"Walmart", cat:"Home & Kitchen", price:169, was:319, signal:"strong", url:"https://www.walmart.com/ip/Ninja-SLUSHi-96-Oz-Frozen-Drink-Machine-with-RapidChill-Technology-5-Presets-Dishwasher-Safe-Slushy-Maker-FS310GN-Green/18893414176", source:"Walmart product page", evidence:"Walmart lists $169.00, was $319.00, as a Black Friday Deal with thousands bought since yesterday — a near-half-price cut on a current Ninja model."},
 {name:"GE Profile Opal Mini Nugget Ice Maker", store:"Target", cat:"Home & Kitchen", price:199, was:299.99, signal:"routine", url:"https://www.target.com/p/ge-profile-opal-mini-nugget-ice-maker-moss-green-hearth-38-hand-8482-with-magnolia/-/A-95270171", source:"Target product page", evidence:"Target shows $199.00, reg. $299.99, but Walmart lists the Opal Mini at $179.00 in this session — so Target's sale price is beaten elsewhere and the “$100 off” framing overstates the deal."},
 {name:"Samsung Galaxy S26 FE 128GB (Unlocked)", store:"Best Buy", cat:"Phones & Wearables", price:499.99, was:699.99, signal:"strong", url:"https://www.bestbuy.com/product/samsung-galaxy-s26-fe-128gb-unlocked-graphite/6687704", source:"Best Buy product page and announcement", evidence:"Best Buy's announcement says save $200 with a $499.99 sale price, and the product page shows the same $499.99 Doorbuster price for the unlocked 128GB model."},
 {name:"Apple Watch Series 12 GPS 42mm", store:"Amazon", cat:"Phones & Wearables", price:299, was:399, signal:"new-low", url:"https://link.amazon/B0ioXXb6M", source:"9to5Toys Amazon Black Friday Week report, Day 6", evidence:"The Day 6 report lists the 42mm Series 12 at $299 against $399 and calls it an all-time low; Walmart and Target also show $299-class pricing in this session, confirming the drop is real."},
 {name:"Oura Ring 5 (Silver)", store:"Target", cat:"Phones & Wearables", price:299, was:399, signal:"routine", url:"https://www.target.com/p/oura-ring-5-silver-size-9/-/A-95006379", source:"Target product page", evidence:"Target lists $299.00, reg. $399.00 — a $100 cut, but Oura's subscription cost sits on top of the hardware price, so the total cost of ownership makes this a routine rather than standout saving."},
 {name:"Ring Battery Doorbell 2K", store:"Target", cat:"Smart Home", price:39.99, was:99.99, signal:"new-low", url:"https://www.target.com/p/ring-battery-doorbell-newest-model-retinal-2k-with-wide-angle-video-up-to-6x-enhanced-zoom-two-way-talk-and-built-in-battery-matte-mocha/-/A-95005836", source:"Target product page", evidence:"Target shows $39.99, reg. $99.99. Session reporting found the same doorbell at $40 across Target, Best Buy and Amazon, and a Home Depot starter set bundling it at $59.99 — $39.99 standalone is the floor price this session."}
];

const $ = id => document.getElementById(id);
const money = n => "$" + n.toLocaleString("en-US", {minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2});
const pct = d => Math.round((1 - d.price / d.was) * 100);
const signalLabel = {"new-low":"New low", strong:"Strong price", routine:"Routine / inflated"};

function fillSelect(el, values, allLabel) {
  el.innerHTML = "";
  const all = document.createElement("option");
  all.value = ""; all.textContent = allLabel; el.appendChild(all);
  values.forEach(v => { const o = document.createElement("option"); o.value = v; o.textContent = v; el.appendChild(o); });
}
fillSelect($("cat"), [...new Set(DEALS.map(d => d.cat))].sort(), "All categories");
fillSelect($("store"), [...new Set(DEALS.map(d => d.store))].sort(), "All stores");

const params = new URLSearchParams(location.search);
if (params.get("cat")) $("cat").value = params.get("cat");
if (params.get("store")) $("store").value = params.get("store");
if (params.get("signal")) $("signal").value = params.get("signal");
if (params.get("min")) $("min").value = params.get("min");
if (params.get("q")) $("q").value = params.get("q");

$("stats").innerHTML = [
  [DEALS.length, "deals checked"],
  [new Set(DEALS.map(d => d.store)).size, "stores"],
  [new Set(DEALS.map(d => d.cat)).size, "categories"],
  [DEALS.filter(d => d.signal === "new-low").length, "new lows"],
  [Math.max(...DEALS.map(pct)) + "%", "deepest cut"]
].map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join("");

function render() {
  const q = $("q").value.trim().toLowerCase();
  const cat = $("cat").value, store = $("store").value, sig = $("signal").value;
  const min = Number($("min").value), sort = $("sort").value;
  let list = DEALS.filter(d =>
    (!q || (d.name + " " + d.store + " " + d.cat).toLowerCase().includes(q)) &&
    (!cat || d.cat === cat) && (!store || d.store === store) &&
    (!sig || d.signal === sig) && pct(d) >= min);
  const by = {discount:(a,b)=>pct(b)-pct(a), savings:(a,b)=>(b.was-b.price)-(a.was-a.price), price:(a,b)=>a.price-b.price, name:(a,b)=>a.name.localeCompare(b.name)};
  list.sort(by[sort]);
  $("count").textContent = `Showing ${list.length} of ${DEALS.length} deals · prices checked ${CHECKED}`;
  $("empty").hidden = list.length > 0;
  $("grid").innerHTML = list.map(d => {
    const i = DEALS.indexOf(d);
    return `<article class="card">
      <div class="card-top"><span class="store">${d.store}</span><span class="badge ${d.signal}">${signalLabel[d.signal]}</span></div>
      <h3>${d.name}</h3>
      <p class="cat">${d.cat}</p>
      <p class="price"><strong>${money(d.price)}</strong> <s>${money(d.was)}</s> <span class="off">${pct(d)}% off</span></p>
      <p class="save">You save ${money(d.was - d.price)} · checked ${CHECKED}</p>
      <div class="bar"><span style="width:${pct(d)}%"></span></div>
      <div class="actions"><button type="button" data-open="${i}">Why this signal?</button><a href="${d.url}" target="_blank" rel="noopener noreferrer">View deal</a></div>
    </article>`;
  }).join("");
  document.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => openModal(DEALS[Number(b.dataset.open)])));
}

function openModal(d) {
  $("mStore").textContent = `${d.store} · ${d.cat} · ${signalLabel[d.signal]}`;
  $("mTitle").textContent = d.name;
  $("mPrice").innerHTML = `<strong>${money(d.price)}</strong> <s>${money(d.was)}</s> — ${pct(d)}% off, save ${money(d.was - d.price)}`;
  $("mFacts").innerHTML = `
    <div><dt>Sale price</dt><dd>${money(d.price)}</dd></div>
    <div><dt>Usual / reference price</dt><dd>${money(d.was)}</dd></div>
    <div><dt>Discount</dt><dd>${pct(d)}% (${money(d.was - d.price)} off)</dd></div>
    <div><dt>Price checked</dt><dd>${CHECKED}</dd></div>
    <div><dt>Price read from</dt><dd>${d.source}</dd></div>
    <div><dt>Deal signal</dt><dd>${signalLabel[d.signal]}</dd></div>`;
  $("mEvidence").textContent = d.evidence;
  $("mLink").href = d.url;
  $("modalBack").hidden = false;
}
$("mClose").addEventListener("click", () => { $("modalBack").hidden = true; });
$("modalBack").addEventListener("click", e => { if (e.target === $("modalBack")) $("modalBack").hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") $("modalBack").hidden = true; });
["q","cat","store","signal","min","sort"].forEach(id => $(id).addEventListener("input", render));
$("reset").addEventListener("click", () => { $("q").value=""; $("cat").value=""; $("store").value=""; $("signal").value=""; $("min").value="0"; $("sort").value="discount"; render(); });
render();
if (params.get("open") !== null) { const d = DEALS[Number(params.get("open"))]; if (d) openModal(d); }
