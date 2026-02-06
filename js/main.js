const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('[name="nome"]');
    const message = form.querySelector('[name="mensagem"]');
    if (!name.value.trim() || !message.value.trim()) {
      alert('Por favor, preencha seu nome e mensagem para prosseguir.');
      return;
    }
    alert('Mensagem enviada! Em breve nossa equipe entrará em contato.');
    form.reset();
  });
}

const activeLink = document.querySelector(`.nav-links a[href="${window.location.pathname.split('/').pop()}"]`);
if (activeLink) {
  activeLink.classList.add('active');
}
