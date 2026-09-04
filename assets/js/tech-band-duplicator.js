document.addEventListener('DOMContentLoaded', function () {

    const totalCopies = 3;

    const originalList = document.getElementById('tech-list-original');

    if (originalList) {
        // Keep the first copy as the "real", accessible content, and mark every
        // additional copy as aria-hidden so screen readers don't announce the
        // same tech stack two extra times.
        const originalContent = originalList.innerHTML;

        for (let i = 1; i < totalCopies; i++) {
            const wrapper = document.createElement('template');
            wrapper.innerHTML = originalContent;
            wrapper.content.querySelectorAll('li').forEach(li => li.setAttribute('aria-hidden', 'true'));
            originalList.append(...wrapper.content.childNodes);
        }
    }
});
