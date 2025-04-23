const darkModeButton = document.getElementById("darkmode");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "🌗 Modo Claro";
    } else {
        darkModeButton.textContent = "🌗 Modo Escuro";
    }
});