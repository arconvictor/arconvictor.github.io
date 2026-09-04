document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const root = document.documentElement;

    function updateToggleState(theme) {
        const isLight = theme === 'light';
        toggle.setAttribute('aria-pressed', String(isLight));
        toggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }

    // Reflect whatever theme the inline head script already applied before paint.
    updateToggleState(root.getAttribute('data-theme') || 'dark');

    toggle.addEventListener('click', function () {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';

        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateToggleState(next);
    });
});
