(function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  function sendForm(form, modal) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const templateParams = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        company: form.company.value,
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        alert('Заявка отправлена!');
        form.reset();

        if (modal) {
          modal.classList.remove('active');
          modal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      } catch (err) {
        console.error('Ошибка:', err);
        alert('Ошибка отправки. Попробуйте позже.');
      }
    });
  }

  const requestForm = document.getElementById('request-form');
  const requestModal = document.getElementById('modal-request');
  if (requestForm) sendForm(requestForm, requestModal);

  const contactsForm = document.getElementById('contacts-form');
  if (contactsForm) sendForm(contactsForm, null);
})();