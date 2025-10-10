// Détecte la langue du navigateur
const userLang = navigator.language || navigator.userLanguage; // ex: "fr-FR" ou "en-US"

// Redirige vers la version correspondante
if (userLang.startsWith('fr')) {
    window.location.href = 'fr/index.html';
} else if (userLang.startsWith('en')) {
    window.location.href = 'en/index.html';
} else {
    window.location.href = '/en/index.html'; // par défaut anglais
}
