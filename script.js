let itemCount = 0;
const actualBuyerMap = {
  0: {
    Gstin: "Select",
    LglNm: "Please select the buyer",
    Addr1: null,
    Addr2: null,
    Loc: null,
    Pin: null,
    Pos: null,
    Stcd: null,
    Ph: null,
    Em: null
  },
  "33AAACS7032B1ZZ": {
    Gstin: "33AAACS7032B1ZZ",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "PB NO-4 HARITHA HOSUR",
    Addr2: "TAMILNADU",
    Loc: "TAMILNADU",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  "29AAACS7032B1ZO": {
    Gstin: "29AAACS7032B1ZO",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "POST BOX 1 KADAKOLA POST,BYTHALI KARNATAK",
    Addr2: "KARNATAKA",
    Loc: "KARNATAKA",
    Pin: 591287,
    Pos: "29",
    Stcd: "29",
    Ph: null,
    Em: null
  },
  3: {
    Gstin: "02AAACS7032B1Z4",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "HIMACHAL PRADESH",
    Addr2: "HIMACHAL PRADESH",
    Loc: "HIMACHAL PRADESH",
    Pin: 176052,
    Pos: "02",
    Stcd: "02",
    Ph: null,
    Em: null
  },
  4: {
    Gstin: "36AAACB5861B1Z1",
    LglNm: "BERAR FINANCE LTD",
    Addr1: "2N, 2, WARANGAL CITY CENTER, MULGU ROAD, INDUSTRIAL ETATE,Hanumakonda",
    Addr2: "WARANGAL",
    Loc: "WARANGAL",
    Pin: 503002,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  5: {
    Gstin: "36AFHFS4680J1ZH",
    LglNm: "SAVERA AUTOCRAFT LLP",
    Addr1: "PLOT NO 22/5-3,NH 7",
    Addr2: "KAMAREDDY",
    Loc: "KAMAREDDY",
    Pin: 503111,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  6: {
    Gstin: "36AAACS7018R1ZU",
    LglNm: "SHRIRAM FINANCE LIMITED",
    Addr1: "3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Addr2: " 3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Loc: "HYDERABAD",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  7: {
    Gstin: "36AADCT0724A1ZY",
    LglNm: "TVS CREDIT SERVICES LIMITED",
    Addr1: "KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  8: {
    Gstin: "33AAJFH7551C1ZL",
    LglNm: "HARITA INSURANCE BROKING LLP",
    Addr1: "NO 29,JAYALAKSHMI ESTATES,SECOND FLOOR,HADDOWS ROAD,NANGAMBAKKAM,CHENNAI",
    Addr2: "CHENNAI",
    Loc: "CHENNAI",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  9: {
    Gstin: "36BPSPK8565G1Z6",
    LglNm: "SRI SAI MOTORS",
    Addr1: "3-39/4/E2,BANSWADA ROAD,PITLAM",
    Addr2: "PITLAM",
    Loc: "PITLAM",
    Pin: 503310,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  10: {
    Gstin: "36AAKCA3283E1ZQ",
    LglNm: "ADARSHA MOTOR SALES PRIVATE LIMITED",
    Addr1: "8-6-301/18,BYPASS ROAD,KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  11: {
    Gstin: "36BCUPG1861Q1ZT",
    LglNm: "AKSHAYA MOTORS",
    Addr1: "14-84/1/A,OPPOSITE HANUMAN MANDIR,BALKONDA",
    Addr2: "BALKONDA",
    Loc: "BALKONDA",
    Pin: 503217,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  12: {
    Gstin: "36AAACI1314G1Z4",
    LglNm: "INDUSIND BANK LTD",
    Addr1: "CONSUMER FINANCE DIVISION CONSUMER FINANCE DIVISION",
    Addr2: "SECUNDERABAD",
    Loc: "SECUNDERABAD",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  13: {
    Gstin: "27AAECI3370G1ZN",
    LglNm: "INDICOSMIC CAPITAL PVT.LTD",
    Addr1: "OFFICE NO 101,BABA HOUSE NEXT TO WEH METRO STATION ANDHERI EAST,MUMBAI",
    Addr2: "MUMBAI",
    Loc: "MUMBAI",
    Pin: 400093,
    Pos: "27",
    Stcd: "27",
    Ph: null,
    Em: null
  },
  14: {
    Gstin: "36ADWFS8368L1ZT",
    LglNm: "SRI SIDDARAMESHWARA AUTO MOTIVES",
    Addr1: "8-135/1,OPP GOVT HIGH SCHOOL,BHIKNOOR MAIN ROAD 8-135/1,OPP GOVT HIGH",
    Addr2: "SCHOOL,BHIKNOOR MAIN ROAD",
    Loc: "BHIKNOOR",
    Pin: 503101,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  15: {
    Gstin: "36ABVPU7412L1ZS",
    LglNm: "SRI VINAYAKA MOTORS",
    Addr1: "JANNEPALLY ROAD   8-194/1/B,MAIN ROAD,NAVIPET",
    Addr2: "NAVIPET",
    Loc: "NAVIPET",
    Pin: 503245,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  16: {
    Gstin: "36AAMCS8857L2ZC",
    LglNm: "SBI General Insurance company limited",
    Addr1: "Ozone Commercial Complex,3rd,Panjagutta Main Road,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  17: {
    Gstin: "36AABCT3518Q1ZX",
    LglNm: "TATA AIG GENERAL INSURANCE CO LTD",
    Addr1: "Imperial Towers,H.No 7-1-6-617/A,5th and 6th Floor,GHMC no - 615,616, Ameerpet,Hyderabad,500016",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500016,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  18: {
    Gstin: "36AAYCA8340E1ZC",
    LglNm: "ANTARIKSH MOTORS PRIVATE LIMITED",
    Addr1: "8-1-351/a/11, RAHUL COLONY,Tolichowki Road,Hyderabad,500008",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500008,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  19: {
    Gstin: "36AAACS7032B1ZT",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "FIRST FLOOR,2-11-30,PLOT NO-11,RUKMINI TOWER,PAIGHA COLONY,SECUNDRABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  20: {
    Gstin: "36AAFCL0077Q1Z1",
    LglNm: "LAXMI AUTO AGENCIES PRIVATE LIMITED",
    Addr1: "1-13-173,VINAYAK NAGAR,NIZAMABAD",
    Addr2: "NIZAMABAD",
    Loc: "NIZAMABAD",
    Pin: 503001,
    Pos: "36",
    Stcd: "36",
    Ph: 9440090930,
    Em: null,
  },
  21: {
    Gstin: "36AAACU5552C1ZK",
    LglNm: "UNITED INDIA INSURANCE COMPANY LIMITED",
    Addr1: "UNITED INDIA TOWERS 3 - 5 - 817 818,Floor No 2, OLD MLA QRTRS ROAD,BASHEERBAGH",
    Addr2: "BASHEERBAGH",
    Loc: "BASHEERBAGH",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
};
function sortBuyerMapByName(buyerMap) {
  const selectEntry = Object.values(buyerMap).find(b => b.Gstin === "Select");
  const sortedOthers = Object.values(buyerMap)
    .filter(b => b.Gstin !== "Select")
    .sort((a, b) => a.LglNm.localeCompare(b.LglNm));
  return Object.fromEntries([
    [selectEntry.LglNm, selectEntry], // "Please select the buyer" first
    ...sortedOthers.map(buyer => [buyer.LglNm, buyer])
  ]);
}

const buyerMap = sortBuyerMapByName(actualBuyerMap);
const allowed = [
  "36AFHFS4680J1ZH",
  "36AAFCL0077Q1Z1",
]
const predefinedItems = {
  WARRANTY: {
    desc: "WARRANTY",
    hsn: "87141090",
    gst: 28,
    isIGST: true,
    IsServc: "N"
  },
  "PETROL VEHICLE": {
    desc: "TVS RAIDER 125",
    hsn: "87112029",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  },
  "IQUBE VEHICLE": {
    desc: "TVS IQUBE",
    hsn: "87112029",
    gst: 5,
    isIGST: false,
    IsServc: "N"
  },
  "PARTS SALES": {
    desc: "PARTS SALES",
    hsn: "84099191",
    gst: 28,
    isIGST: false,
    IsServc: "N"
  },
  "COMMISION (local)": {
    desc: "COMMISION",
    hsn: "996211",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "COMMISION (outstate)": {
    desc: "COMMISION",
    hsn: "996211",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  "FSC CLAIM FROM TVSM": {
    desc: "FSC CLAIM FROM TVSM",
    hsn: "997161",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  "INCENTIVE FROM TVSM COMPANY (local)": {
    desc: "INCENTIVE FROM TVSM COMPANY",
    hsn: "9983",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "INCENTIVE FROM TVSM COMPANY (outstate)": {
    desc: "INCENTIVE FROM TVSM COMPANY",
    hsn: "9983",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  'LABOUR (local)': {
    desc: "LABOUR",
    hsn: "9954",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  'LABOUR (outstate)': {
    desc: "Labour Charges for Waranty",
    hsn: "9987",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  }
};
const isServer = {
  tillDate: "2025-09-04",
  get down() {
    const currentDate = new Date();
    const till = new Date(this.tillDate);
    return currentDate < till;
  }
};
console.log("error")
let createdInvoices = [];

function addItem() {
  itemCount++;
  const container = document.getElementById("itemsContainer");
  const itemDiv = document.createElement("div");
  itemDiv.className = "item-block";
  const options = Object.keys(predefinedItems)
    .map((key) => `<option value="${key}">${key}</option>`)
    .join("");
  const selectHTML = `
    <label>Choose Item:
      <select class="itemSelect" onchange="onItemSelect(this)">
        <option value="">-- Select Item --</option>
        ${options}
      </select>
    </label><br>
  `;
  itemDiv.innerHTML = `
    <h4>Item ${itemCount}</h4>
    <button type="button" class="delete-btn" onclick="this.parentElement.remove();">Delete</button>
    ${selectHTML}
    Description: <input type="text" class="itemDesc" value="">
    HSN Code: <input type="text" class="hsnCode" value="">
    Quantity: <input type="number" class="qty" value="1" oninput="updateGST(this)">
   <input type="text" class="IsServc hidden" value="" disabled>
  <input type="text" class="unit hidden" value="NOS" disabled>
    Unit Price: <input type="number" step="0.01" class="unitPrice" value="0" oninput="updateGST(this)">
    GST Rate (%): <input type="number" step="0.01" class="gstRate" value="18" oninput="updateGST(this)">
    
    <div class="igstDiv">IGST Amount: <input type="number" step="0.01" class="igstAmt" disabled></div>
    <div class="cgstSgstDiv" style="display:none;">
      CGST Amount: <input type="number" step="0.01" class="cgstAmt" disabled>
      SGST Amount: <input type="number" step="0.01" class="sgstAmt" disabled>
    </div>

    Total Item Value: <input type="number" step="0.01" class="totItemVal" readonly>
  `;
  container.appendChild(itemDiv);
}

function onItemSelect(selectEl) {
  const block = selectEl.closest(".item-block");
  const selected = selectEl.value;
  const descField = block.querySelector(".itemDesc");
  const hsnField = block.querySelector(".hsnCode");
  const gstField = block.querySelector(".gstRate");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  const IsServc = block.querySelector(".IsServc");
  if (selected === "custom") {
    // descField.value = "";
    // hsnField.value = "";
    // gstField.value = "18";
    // igstDiv.style.display = "block";
    // cgstSgstDiv.style.display = "none";
  } else {
    const item = predefinedItems[selected];
    descField.value = item.desc;
    hsnField.value = item.hsn;
    gstField.value = item.gst;
    if (item.isIGST) {
      igstDiv.style.display = "block";
      cgstSgstDiv.style.display = "none";
    } else {
      igstDiv.style.display = "none";
      cgstSgstDiv.style.display = "block";
    }
  }
  const item = predefinedItems[selected];
  IsServc.value = item.IsServc;
  updateGST(selectEl);
}

function updateGST(el) {
  const block = el.closest(".item-block");
  const qty = parseFloat(block.querySelector(".qty").value) || 0;
  const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
  const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
  const total = qty * unitPrice;
  const igstField = block.querySelector(".igstAmt");
  const cgstField = block.querySelector(".cgstAmt");
  const sgstField = block.querySelector(".sgstAmt");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  
  let totalVal = total;
  if (igstDiv.style.display !== "none") {
    const igst = (total * gstRate) / 100;
    igstField.value = igst.toFixed(2);
    if (cgstField) cgstField.value = "0.00";
    if (sgstField) sgstField.value = "0.00";
    totalVal += igst;
  } else {
    const halfGST = gstRate / 2;
    const cgst = (total * halfGST) / 100;
    const sgst = (total * halfGST) / 100;
    cgstField.value = cgst.toFixed(2);
    sgstField.value = sgst.toFixed(2);
    igstField.value = "0.00";
    totalVal += cgst + sgst;
  }
  block.querySelector(".totItemVal").value = totalVal.toFixed(2);
  // 🔽 Add this part to update overall totals
  let totalIgst = 0,
    totalCgst = 0,
    totalSgst = 0,
    totalAmount = 0;
  totalTaxAmount = 0;
  totalTaxable = 0;
  document.querySelectorAll(".item-block").forEach((item) => {
    totalTaxable += parseFloat(item.querySelector(".unitPrice")?.value) || 0;
    totalIgst += parseFloat(item.querySelector(".igstAmt")?.value) || 0;
    totalCgst += parseFloat(item.querySelector(".cgstAmt")?.value) || 0;
    totalSgst += parseFloat(item.querySelector(".sgstAmt")?.value) || 0;
    totalAmount += parseFloat(item.querySelector(".totItemVal")?.value) || 0;
  });
  document.querySelector("#total-taxable").value = totalTaxable.toFixed(2);
  document.querySelector("#total-igst").value = totalIgst.toFixed(2);
  document.querySelector("#total-cgst").value = totalCgst.toFixed(2);
  document.querySelector("#total-sgst").value = totalSgst.toFixed(2);
  document.querySelector("#total-amount").value = totalAmount.toFixed(2);
  totalTaxAmount = totalCgst + totalSgst + totalIgst;
  document.querySelector("#total-tax-amount").value = totalTaxAmount.toFixed(2);
}

function populateBuyerDetails() {
  const selectedKey = document.getElementById("buyerSelector").value;
  const buyer = buyerMap[selectedKey];
  document.getElementById("buyerGstin").value = buyer.Gstin;
  document.getElementById("buyerName").value = buyer.LglNm;
  document.getElementById("buyerAddr1").value = buyer.Addr1;
  document.getElementById("buyerAddr2").value = buyer.Addr2;
  document.getElementById("buyerLoc").value = buyer.Loc;
  document.getElementById("buyerPin").value = buyer.Pin;
  document.getElementById("buyerPos").value = buyer.Pos;
  document.getElementById("buyerStcd").value = buyer.Stcd;
}

function buildBuyerDropdown() {
  const buyerSelector = document.getElementById("buyerSelector");
  buyerSelector.innerHTML = "";
  // Clear existing options
  for (const key in buyerMap) {
    const buyer = buyerMap[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${buyer.Gstin} - ${buyer.LglNm}`;
    buyerSelector.appendChild(option);
  }
  const bulkBuyer = document.getElementById("bulkBuyerSelect");
  bulkBuyer.innerHTML = "";
  for (const key in buyerMap) {
    const buyer = buyerMap[key];
    const option2 = document.createElement("option");
    option2.value = key;
    option2.textContent = `${buyer.Gstin} - ${buyer.LglNm}`;
    bulkBuyer.appendChild(option2);
  }
}

function checkInvDateRange(dateStr) {
  // Expecting dateStr in dd/mm/yyyy format
  const [day, month, year] = dateStr.split("/").map(Number);
  const inputDate = new Date(year, month - 1, day);
  
  // Today's date (set time to midnight for clean comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Date 30 days ago
  const past30 = new Date(today);
  past30.setDate(today.getDate() - 30);
  
  // Check if inputDate is between past30 and today
  return inputDate >= past30 && inputDate <= today;
}

function formatDate(input) {
  // Split by "-" (day-month-year)
  const parts = input.split("-");
  if (parts.length !== 3) return input; // fallback if invalid
  
  let [day, month, year] = parts;
  
  // Ensure month has 2 digits
  month = month.padStart(2, "0");
  
  // Return in desired format
  return `${day}/${month}/${year}`;
}

function generateJSON() {
  const session = localStorage.getItem("loginSession");
  if (!session) return window.location.reload();
  const isGstin = document.getElementById("sellerGstin").value;
  if (!allowed.includes(isGstin)) return window.location.reload();
  const buyerGstin = document.getElementById("buyerGstin").value;
  if (buyerGstin === isGstin) {
    return alert("Cannot create invoice for same buyer and seller!")
  }
  if (isServer.down) return alert("E-invoice Json server is down, please try again later!");
  if (!checkInvDateRange(document.getElementById("docDate").value)) return alert('Invoice date must be within the last 30days including today!')
  if (document.getElementById("buyerGstin").value === "Select") {
    alert("please select the buyer")
    return;
  }
  if (isGstin === "") {
    alert("please login first")
    window.location.reload();
    return;
  }
  let assVal = 0;
  let cgstVal = 0;
  let sgstVal = 0;
  let igstVal = 0;
  let totInvVal = 0;
  let docNumber = document
    .getElementById("docNo")
    .value.replace(/\s+/g, "")
    .trim();
  
  if (createdInvoices.includes(docNumber)) {
    return alert("Cannot create E-Invoice for same invoice Number: " + docNumber);
  }
  
  createdInvoices.push(docNumber);
  const invoice = {
    Version: "1.1",
    TranDtls: {
      TaxSch: "GST",
      SupTyp: "B2B",
      IgstOnIntra: "N",
      RegRev: "N",
      EcmGstin: null
    },
    DocDtls: {
      Typ: "INV",
      No: docNumber,
      Dt: document.getElementById("docDate").value
    },
    SellerDtls: {
      Gstin: document.getElementById("sellerGstin").value,
      LglNm: document.getElementById("sellerName").value,
      Addr1: document.getElementById("sellerAddr1").value,
      Addr2: null,
      Loc: document.getElementById("sellerLoc").value,
      Pin: parseInt(document.getElementById("sellerPin").value),
      Stcd: document.getElementById("sellerStcd").value,
      Ph: document.getElementById("sellerPh").value,
      Em: null
    },
    BuyerDtls: {
      Gstin: document.getElementById("buyerGstin").value,
      LglNm: document.getElementById("buyerName").value,
      Addr1: document.getElementById("buyerAddr1").value,
      Addr2: document.getElementById("buyerAddr2").value,
      Loc: document.getElementById("buyerLoc").value,
      Pin: parseInt(document.getElementById("buyerPin").value),
      Pos: document.getElementById("buyerPos").value,
      Stcd: document.getElementById("buyerStcd").value,
      Ph: null,
      Em: null
    },
    ValDtls: {},
    RefDtls: {
      InvRm: "NICGEPP2.0"
    },
    ItemList: []
  };
  const itemBlocks = document.querySelectorAll(".item-block");
  itemBlocks.forEach((block, index) => {
    const desc = block.querySelector(".itemDesc").value;
    const hsn = block.querySelector(".hsnCode").value;
    const qty = parseFloat(block.querySelector(".qty").value) || 0;
    const unit = block.querySelector(".unit").value;
    const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
    const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
    const igstAmt = parseFloat(block.querySelector(".igstAmt").value) || 0;
    const cgstAmt = parseFloat(block.querySelector(".cgstAmt").value) || 0;
    const sgstAmt = parseFloat(block.querySelector(".sgstAmt").value) || 0;
    const totItemVal =
      parseFloat(block.querySelector(".totItemVal").value) || 0;
    const itemAssVal = unitPrice * qty;
    const IsServc = block.querySelector(".IsServc").value;
    assVal += itemAssVal;
    igstVal += igstAmt;
    cgstVal += cgstAmt;
    sgstVal += sgstAmt;
    totInvVal += totItemVal;
    invoice.ItemList.push({
      SlNo: String(index + 1),
      PrdDesc: desc,
      IsServc: IsServc,
      HsnCd: hsn,
      Qty: qty,
      FreeQty: 0,
      Unit: unit,
      UnitPrice: unitPrice,
      TotAmt: itemAssVal,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: itemAssVal,
      GstRt: gstRate,
      IgstAmt: igstAmt,
      CgstAmt: cgstAmt,
      SgstAmt: sgstAmt,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: totItemVal
    });
  });
  invoice.ValDtls = {
    AssVal: parseFloat(assVal.toFixed(2)),
    IgstVal: parseFloat(igstVal.toFixed(2)),
    CgstVal: parseFloat(cgstVal.toFixed(2)),
    SgstVal: parseFloat(sgstVal.toFixed(2)),
    CesVal: 0,
    StCesVal: 0,
    Discount: 0,
    OthChrg: 0,
    RndOffAmt: 0,
    TotInvVal: parseFloat(totInvVal.toFixed(2))
  };
  document.getElementById("output").textContent = JSON.stringify(
    [invoice],
    null,
    2
  );
  downloadJSON();
  
  function downloadJSON() {
    const jsonText = document.getElementById("output").textContent;
    if (!jsonText.trim()) {
      alert("Please generate JSON first.");
      return;
    }
    const blob = new Blob([jsonText], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const docNo =
      document.getElementById("docNo").value.replace(/\s+/g, "").trim() ||
      "invoice";
    link.download = `${docNo}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
window.onload = () => {
  buildBuyerDropdown?.(); // Optional, if defined elsewhere
  populateBuyerDetails?.(); // Optional, if defined elsewhere
  addItem?.(); // Optional, if defined elsewhere
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear(); // Full year (e.g., 2025)
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById("docDate").value = formattedDate;
  
  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey) {
      switch (e.key.toLowerCase()) {
        case "e": // Ctrl + E
          e.preventDefault();
          addItem();
          break;
          
        case "s": // Ctrl + S
          e.preventDefault(); // prevent browser save
          generateJSON();
          break;
          
        case "x": // Ctrl + X
          e.preventDefault(); // prevent undo
          logout();
          break;
      }
    }
  });
  
  
  function logout() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (!confirm("Are you sure want to log out?")) return;
    localStorage.removeItem("loginSession");
    location.reload(); // reload page
  }
};

function generateBulkInvoices() {
  const fileInput = document.getElementById("csvFile").files[0];
  if (!fileInput) {
    alert("Please upload a CSV file first!");
    return;
  }
  
  const buyerId = document.getElementById("bulkBuyerSelect").value;
  const buyerDetails = buyerMap[buyerId];
  if (buyerDetails.Gstin === "Select") {
    alert("please select the buyer")
    return;
    if (!buyerDetails) {
      alert("Please select a buyer from Bulk Buyer dropdown!");
      return;
    }
    
  }
  
  const sellerStcd = document.getElementById("sellerStcd").value;
  const sellerGstin = document.getElementById("sellerGstin").value;
  
  Papa.parse(fileInput, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const data = results.data;
      const zip = new JSZip();
      
      // Group rows by invNo
      const invoiceGroups = {};
      data.forEach(row => {
        const invNo = row["invNo"];
        if (!invoiceGroups[invNo]) invoiceGroups[invNo] = [];
        invoiceGroups[invNo].push(row);
      });
      
      // Process each invoice
      Object.keys(invoiceGroups).forEach((invNo, idx) => {
        const rows = invoiceGroups[invNo];
        
        let assVal = 0,
          cgst = 0,
          sgst = 0,
          igst = 0,
          total = 0;
        const itemList = [];
        
        rows.forEach((row, i) => {
          const taxable = parseFloat(row["taxable"]) || 0;
          const gstRate = parseFloat(row["percentage"]) || 0;
          
          let itemCgst = 0,
            itemSgst = 0,
            itemIgst = 0;
          let itemTotal = taxable;
          
          if (sellerStcd === buyerDetails.Stcd) {
            itemCgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemSgst = +(taxable * (gstRate / 200)).toFixed(2);
            itemTotal += itemCgst + itemSgst;
          } else {
            itemIgst = +(taxable * (gstRate / 100)).toFixed(2);
            itemTotal += itemIgst;
          }
          
          // Push item to ItemList
          itemList.push({
            SlNo: (i + 1).toString(),
            PrdDesc: row["description"],
            HsnCd: row["hsn"] || "0000",
            Qty: 1,
            Unit: "NOS",
            UnitPrice: taxable,
            AssAmt: taxable,
            GstRt: gstRate,
            IgstAmt: itemIgst,
            CgstAmt: itemCgst,
            SgstAmt: itemSgst,
            TotItemVal: itemTotal,
            IsServc: row["isService"] || "N"
          });
          
          // Add to totals
          assVal += taxable;
          cgst += itemCgst;
          sgst += itemSgst;
          igst += itemIgst;
          total += itemTotal;
        });
        
        const invoice = {
          Version: "1.1",
          TranDtls: { TaxSch: "GST", SupTyp: "B2B", IgstOnIntra: "N", RegRev: "N", EcmGstin: null },
          DocDtls: { Typ: "INV", No: invNo, Dt: formatDate(rows[0]["invDate"]) },
          SellerDtls: {
            Gstin: sellerGstin,
            LglNm: document.getElementById("sellerName").value,
            Addr1: document.getElementById("sellerAddr1").value,
            Loc: document.getElementById("sellerLoc").value,
            Pin: parseInt(document.getElementById("sellerPin").value),
            Stcd: sellerStcd,
            Ph: document.getElementById("sellerPh").value
          },
          BuyerDtls: buyerDetails,
          ValDtls: {
            AssVal: assVal,
            IgstVal: igst,
            CgstVal: cgst,
            SgstVal: sgst,
            TotInvVal: total
          },
          ItemList: itemList
        };
        
        zip.file(`${invNo}.json`, JSON.stringify([invoice], null, 2));
      });
      
      zip.generateAsync({ type: "blob" }).then(content => {
        saveAs(content, "bulk_invoices.zip");
      });
    }
  });
}

const csvFileInput = document.getElementById("csvFile");
const csvDrop = document.getElementById("csvDrop");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const removeFileBtn = document.getElementById("removeFile");

csvFileInput.addEventListener("change", function() {
  if (this.files.length > 0) {
    const file = this.files[0];
    fileName.textContent = file.name;
    csvDrop.style.display = "none"; // hide dropzone
    fileInfo.style.display = "flex"; // show file info row
  }
});

removeFileBtn.addEventListener("click", function() {
  csvFileInput.value = ""; // clear file
  fileInfo.style.display = "none"; // hide file row
  csvDrop.style.display = "block"; // show dropzone again
});

const themes = {
  // 1. Light
  light: {
    "--primary-color": "#1e3a8a",
    "--secondary-color": "#e0f2fe",
    "--accent-color": "#3b82f6",
    "--hover-color": "#1d4ed8",
    "--border-color": "#93c5fd",
    "--text-color": "#0f172a",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  
  // 2. Dark
  dark: {
    "--primary-color": "#0f172a",
    "--secondary-color": "#1e293b",
    "--accent-color": "#3b82f6",
    "--hover-color": "#2563eb",
    "--border-color": "#334155",
    "--text-color": "#f1f5f9",
    "--bg-color": "#0f172a",
    "--danger-color": "#f87171"
  },
  
  // 3. Blue
  blue: {
    "--primary-color": "#1e40af",
    "--secondary-color": "#dbeafe",
    "--accent-color": "#2563eb",
    "--hover-color": "#1e3a8a",
    "--border-color": "#93c5fd",
    "--text-color": "#0f172a",
    "--bg-color": "#f8fafc",
    "--danger-color": "#ef4444"
  },
  
  // 4. Green
  green: {
    "--primary-color": "#065f46",
    "--secondary-color": "#d1fae5",
    "--accent-color": "#10b981",
    "--hover-color": "#047857",
    "--border-color": "#6ee7b7",
    "--text-color": "#064e3b",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  ocean: {
    "--primary-color": "#1e3a8a",
    "--secondary-color": "#e0f7fa",
    "--accent-color": "#00bcd4",
    "--hover-color": "#0288d1",
    "--border-color": "#4dd0e1",
    "--text-color": "#0d3b66",
    "--bg-color": "#f0fdfa",
    "--danger-color": "#d32f2f"
  },
  lava: {
    "--primary-color": "#ff5722",
    "--secondary-color": "#fff3e0",
    "--accent-color": "#ff9800",
    "--hover-color": "#e65100",
    "--border-color": "#ffcc80",
    "--text-color": "#3e2723",
    "--bg-color": "#fff8f1",
    "--danger-color": "#b71c1c"
  },
  galaxy: {
    "--primary-color": "#4c1d95",
    "--secondary-color": "#0f172a",
    "--accent-color": "#6366f1",
    "--hover-color": "#9333ea",
    "--border-color": "#7dd3fc",
    "--text-color": "#e0f2fe",
    "--bg-color": "#1e1b4b",
    "--danger-color": "#f43f5e"
  },
  autumn: {
    "--primary-color": "#92400e",
    "--secondary-color": "#fff7ed",
    "--accent-color": "#d97706",
    "--hover-color": "#b45309",
    "--border-color": "#fcd34d",
    "--text-color": "#451a03",
    "--bg-color": "#fef3c7",
    "--danger-color": "#991b1b"
  },
  rainbow: {
    "--primary-color": "#e11d48", // red
    "--secondary-color": "#fef3c7", // yellow
    "--accent-color": "#22c55e", // green
    "--hover-color": "#3b82f6", // blue
    "--border-color": "#a78bfa", // violet
    "--text-color": "#111827",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  // 5. Sunset
  sunset: {
    "--primary-color": "#b91c1c",
    "--secondary-color": "#fef3c7",
    "--accent-color": "#f97316",
    "--hover-color": "#c2410c",
    "--border-color": "#fdba74",
    "--text-color": "#431407",
    "--bg-color": "#fff7ed",
    "--danger-color": "#991b1b"
  },
  
  // 6. Neon
  neon: {
    "--primary-color": "#0ff",
    "--secondary-color": "#111827",
    "--accent-color": "#f0f",
    "--hover-color": "#ff0",
    "--border-color": "#22d3ee",
    "--text-color": "#e5e7eb",
    "--bg-color": "#000000",
    "--danger-color": "#ff1744"
  },
  
  // 7. Pastel
  pastel: {
    "--primary-color": "#a78bfa",
    "--secondary-color": "#f5d0fe",
    "--accent-color": "#f9a8d4",
    "--hover-color": "#f472b6",
    "--border-color": "#fbcfe8",
    "--text-color": "#4b5563",
    "--bg-color": "#fdf4ff",
    "--danger-color": "#fb7185"
  },
  
  // 8. Coffee
  coffee: {
    "--primary-color": "#6b4226",
    "--secondary-color": "#ede0d4",
    "--accent-color": "#a47148",
    "--hover-color": "#5c3d2e",
    "--border-color": "#ddb892",
    "--text-color": "#3e2723",
    "--bg-color": "#fff8f1",
    "--danger-color": "#b91c1c"
  },
  
  // 9. Solarized
  solarized: {
    "--primary-color": "#268bd2",
    "--secondary-color": "#fdf6e3",
    "--accent-color": "#2aa198",
    "--hover-color": "#859900",
    "--border-color": "#93a1a1",
    "--text-color": "#657b83",
    "--bg-color": "#eee8d5",
    "--danger-color": "#dc322f"
  },
  
  // 10. Purple
  purple: {
    "--primary-color": "#4c1d95",
    "--secondary-color": "#ede9fe",
    "--accent-color": "#7c3aed",
    "--hover-color": "#6d28d9",
    "--border-color": "#c4b5fd",
    "--text-color": "#1e1b4b",
    "--bg-color": "#f5f3ff",
    "--danger-color": "#e11d48"
  },
  
  // 11. Monochrome
  mono: {
    "--primary-color": "#444",
    "--secondary-color": "#f5f5f5",
    "--accent-color": "#666",
    "--hover-color": "#222",
    "--border-color": "#bbb",
    "--text-color": "#111",
    "--bg-color": "#fff",
    "--danger-color": "#e60000"
  },
  
  // 12. Gradient
  gradient: {
    "--primary-color": "#0f766e",
    "--secondary-color": "#e0f2fe",
    "--accent-color": "#6366f1",
    "--hover-color": "#312e81",
    "--border-color": "#a5f3fc",
    "--text-color": "#0f172a",
    "--bg-color": "#f0f9ff",
    "--danger-color": "#dc2626"
  },
  
  // EXTRA THEMES
  
  // 13. Rose
  rose: {
    "--primary-color": "#be123c",
    "--secondary-color": "#ffe4e6",
    "--accent-color": "#f43f5e",
    "--hover-color": "#9f1239",
    "--border-color": "#fecdd3",
    "--text-color": "#881337",
    "--bg-color": "#fff1f2",
    "--danger-color": "#e11d48"
  },
  
  // 14. Aqua
  aqua: {
    "--primary-color": "#0891b2",
    "--secondary-color": "#cffafe",
    "--accent-color": "#06b6d4",
    "--hover-color": "#155e75",
    "--border-color": "#a5f3fc",
    "--text-color": "#083344",
    "--bg-color": "#ecfeff",
    "--danger-color": "#e11d48"
  },
  
  // 15. Forest
  forest: {
    "--primary-color": "#14532d",
    "--secondary-color": "#dcfce7",
    "--accent-color": "#22c55e",
    "--hover-color": "#166534",
    "--border-color": "#86efac",
    "--text-color": "#052e16",
    "--bg-color": "#f0fdf4",
    "--danger-color": "#b91c1c"
  },
  
  // 16. Gold
  gold: {
    "--primary-color": "#b45309",
    "--secondary-color": "#fef9c3",
    "--accent-color": "#facc15",
    "--hover-color": "#92400e",
    "--border-color": "#fde68a",
    "--text-color": "#451a03",
    "--bg-color": "#fffbeb",
    "--danger-color": "#b91c1c"
  },
  
  // 17. Silver
  silver: {
    "--primary-color": "#737373",
    "--secondary-color": "#f5f5f5",
    "--accent-color": "#a3a3a3",
    "--hover-color": "#525252",
    "--border-color": "#d4d4d4",
    "--text-color": "#262626",
    "--bg-color": "#fafafa",
    "--danger-color": "#d00000"
  },
  
  // 18. Crimson
  crimson: {
    "--primary-color": "#7f1d1d",
    "--secondary-color": "#fee2e2",
    "--accent-color": "#dc2626",
    "--hover-color": "#991b1b",
    "--border-color": "#fecaca",
    "--text-color": "#450a0a",
    "--bg-color": "#fef2f2",
    "--danger-color": "#b91c1c"
  },
  
  // 19. Indigo
  indigo: {
    "--primary-color": "#312e81",
    "--secondary-color": "#e0e7ff",
    "--accent-color": "#4338ca",
    "--hover-color": "#3730a3",
    "--border-color": "#c7d2fe",
    "--text-color": "#1e1b4b",
    "--bg-color": "#eef2ff",
    "--danger-color": "#b91c1c"
  },
  
  // 20. Cyberpunk
  cyberpunk: {
    "--primary-color": "#ff007f",
    "--secondary-color": "#1a1a2e",
    "--accent-color": "#00fff7",
    "--hover-color": "#ff4dff",
    "--border-color": "#39ff14",
    "--text-color": "#f8f9fa",
    "--bg-color": "#0f0f1a",
    "--danger-color": "#ff3131"
  }
};
// Apply theme
function setTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(key, theme[key]);
  });
  localStorage.setItem("appTheme", themeName);
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("appTheme") || "light";
  setTheme(saved);
});

const themeBtn = document.getElementById("themeBtn");
const themeOptions = document.getElementById("themeOptions");

// Toggle dropdown on button click
themeBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("hidden");
});

// Apply selected theme
function setTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(key, theme[key]);
  });
  localStorage.setItem("appTheme", themeName);
  themeOptions.classList.add("hidden"); // auto-close menu
}

// Hook up buttons
document.querySelectorAll(".theme-options button").forEach(btn => {
  btn.addEventListener("click", () => {
    setTheme(btn.dataset.theme);
  });
});

// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("appTheme") || "light";
  setTheme(saved);
});

document.querySelector('#invoiceForm').addEventListener('submit', (e) => {
  e.preventDefault();
  generateJSON();
})