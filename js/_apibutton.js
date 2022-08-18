export default function toggleApiButton() {
  const apis = document.querySelectorAll('[data-js="api"]');

  apis.forEach(api => {
    const button = api.querySelector('[data-js="button"]');
    const link = api.querySelector('[data-js="link"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hidden');
    });
  });
}
