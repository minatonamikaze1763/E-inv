(function applyThemeGlobally() {
  const themeVars = JSON.parse(localStorage.getItem("activeThemeVars") || "{}");
  if (!Object.keys(themeVars).length) return;
  Object.entries(themeVars).forEach(([k, v]) => {
    document.documentElement.style.setProperty(k, v);
  });
})();

function getSetting(key, fallback) {
  return settings[key]?.value ?? fallback;
}

