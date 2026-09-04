document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const buttons = document.querySelectorAll('.lang-switch button');
    if (!buttons.length) return;

    const SUPPORTED = ['en', 'de', 'es'];

    function detectDefault() {
        const stored = localStorage.getItem('lang');
        if (stored && SUPPORTED.includes(stored)) return stored;
        const nav = (navigator.language || 'de').slice(0, 2).toLowerCase();
        return SUPPORTED.includes(nav) ? nav : 'de';
    }

    function applyLang(lang) {
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);
        buttons.forEach(function (btn) {
            const isActive = btn.getAttribute('data-lang-btn') === lang;
            btn.setAttribute('aria-pressed', String(isActive));
        });
    }

    applyLang(detectDefault());

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const lang = btn.getAttribute('data-lang-btn');
            localStorage.setItem('lang', lang);
            applyLang(lang);
        });
    });
});
