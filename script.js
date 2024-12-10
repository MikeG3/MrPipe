document.addEventListener('DOMContentLoaded', function () {
    const lang = new URLSearchParams(window.location.search).get('lang') || 'en';

    if (lang === 'fr') {
        // Show French elements, hide English ones
        document.querySelectorAll('.lang-fr').forEach(function (element) {
            element.style.display = 'block';
        });
        document.querySelectorAll('.lang-en').forEach(function (element) {
            element.style.display = 'none';
        });
    } else {
        // Show English elements, hide French ones
        document.querySelectorAll('.lang-en').forEach(function (element) {
            element.style.display = 'block';
        });
        document.querySelectorAll('.lang-fr').forEach(function (element) {
            element.style.display = 'none';
        });
    }
});
