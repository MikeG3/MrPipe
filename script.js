document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get("lang");

    if (lang === "fr") {
        document.getElementById("title").textContent = "Mr. Pipe";
        document.getElementById("subtitle").textContent = "Service Professionnel de Débouchage de Drains - Seulement 99$";
        document.getElementById("description").style.display = "none";
        document.getElementById("description-fr").style.display = "block";
        document.getElementById("contact-title").textContent = "Contactez Mr. Pipe";
        document.getElementById("instructions").style.display = "none";
        document.getElementById("instructions-fr").style.display = "block";
    }
});
