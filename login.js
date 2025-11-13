// --- Users DB ---
let users = {};
async function loadUsers() {
  try {
    const response = await fetch("users.json");
    users = await response.json();
  } catch (error) {
    console.error("Error loading users.json:", error);
  }
}

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
  loadUsers();

  
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