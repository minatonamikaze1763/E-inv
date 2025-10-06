// --- Users DB ---
const users = {
  savera: {
    username: "14929",
    password: "Sep@2025#",
    details: {
      Gstin: "36AFHFS4680J1ZH",
      LglNm: "SAVERA AUTOCRAFT LLP",
      Addr1: "PLOT NO 22/5-3,NH 7",
      Addr2: "KAMAREDDY",
      Loc: "KAMAREDDY",
      Pin: 503111,
      Pos: "36",
      Stcd: "36",
      Ph: 9866530909,
      Em: null,
    },
    keys : ["2","savera-1",'savera_1']
  },
  laxmi: {
    username: "14517",
    password: "Oct@2025#",
    details: {
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
    keys : ["1",'laxmi-1','laxmi_1']
  },
};

// --- Helpers ---
function setSellerDetails(details) {
  document.getElementById("sellerGstin").value = details.Gstin || "";
  document.getElementById("sellerName").value = details.LglNm || "";
  document.getElementById("sellerAddr1").value = details.Addr1 || "";
  document.getElementById("sellerLoc").value = details.Loc || "";
  document.getElementById("sellerPin").value = details.Pin || "";
  document.getElementById("sellerStcd").value = details.Stcd || "";
  document.getElementById("sellerPh").value = details.Ph || "";
  
  
  // 🔹 Update header text
  const headerEl = document.querySelector(".header");
  if (headerEl) {
    headerEl.textContent = `Logged in as ${details.LglNm} - ${details.Gstin}`;
  }
}

// Save login with expiry (2 hrs)
function saveLogin(userKey) {
  const expiryTime = Date.now() + 12 * 60 * 60 * 1000; // 12 hrs
  localStorage.setItem(
    "loginSession",
    JSON.stringify({ user: userKey, expiry: expiryTime })
  );
}

// Check session validity
function checkSession() {
  const session = localStorage.getItem("loginSession");
  if (!session) return null;
  
  const { user, expiry } = JSON.parse(session);
  if (Date.now() > expiry) {
    localStorage.removeItem("loginSession"); // expired
    return null;
  }
  return user;
}

function loginWithKey() {
  const loginContainer = document.querySelector(".login-container");
  const loginKey = document.getElementById("login-key").value.trim();
  const status = document.getElementById("login-key-status");
  // Check each user
  for (const key in users) {
    const u = users[key];
    if (u.keys.includes(loginKey)) {
      setSellerDetails(u.details);
      loginContainer.classList.add("hidden");
      saveLogin(key);
      return;
    }
  }
  status.innerHTML = "Invalid Key!";
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  const loginContainer = document.querySelector(".login-container");
  const loginForm = document.querySelector(".login-form");
  
  // Auto-login if session valid
  const activeUser = checkSession();
  if (activeUser && users[activeUser]) {
    setSellerDetails(users[activeUser].details);
    loginContainer.classList.add("hidden");
  } else {
    loginContainer.classList.remove("hidden");
  }
  
  // Handle login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const status = document.getElementById("login-status");
    
    // Check each user
    for (const key in users) {
      const u = users[key];
      if (u.username === username && u.password === password) {
        setSellerDetails(u.details);
        loginContainer.classList.add("hidden");
        saveLogin(key);
        return;
      }
    }
    status.innerHTML = "Invalid username or password!";
  });
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  if (!confirm("Are you sure want to log out?")) return;
  localStorage.removeItem("loginSession");
  location.reload(); // reload page
});