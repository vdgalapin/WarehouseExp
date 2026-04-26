
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please complete all fields.';
      return;
    }

    formMessage.textContent = 'Form UI is working. Connect this form to Formspree or another static form service to receive messages.';
    form.reset();
  });
}
