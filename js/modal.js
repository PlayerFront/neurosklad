(function () {
    const openBtn = document.querySelector('.hero__button');
    const modal = document.getElementById('modal-request');
    const overlay = modal.querySelector('.modal__overlay');
    const windowEl = modal.querySelector('.modal__window');

    let isOpen = false;

    function openModal(e) {
        e.preventDefault();
        if (isOpen) return;
        isOpen = true;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        overlay.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, fill: 'forwards' }
        );

        windowEl.animate(
            [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
            { duration: 300, easing: 'ease', fill: 'forwards' }
        );
    }

    function closeModal() {
        if (!isOpen) return;
        isOpen = false;

        const overlayAnim = overlay.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 300, fill: 'forwards' }
        );

        const windowAnim = windowEl.animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
            { duration: 300, easing: 'ease', fill: 'forwards' }
        );

        windowAnim.onfinish = () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };
    }

    openBtn.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) closeModal();
    });
})();
