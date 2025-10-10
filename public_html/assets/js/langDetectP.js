// Détecte la langue du navigateur
const userLang = navigator.language || navigator.userLanguage; // ex: "fr-FR" ou "en-US"

// Redirige vers la version correspondante
if (userLang.startsWith('fr')) {
    window.location.href = 'fr/projets.html';
} else if (userLang.startsWith('en')) {
    window.location.href = 'en/projets.html';
} else {
    window.location.href = '/en/projets.html'; // par défaut anglais
}
