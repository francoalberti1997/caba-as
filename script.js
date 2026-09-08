const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const galleries = {
  urqu: ['Cabañas Urqu/1.jpg', 'Cabañas Urqu/2.jpg', 'Cabañas Urqu/3.jpg', 'Cabañas Urqu/4.jpg', 'Cabañas Urqu/5.jpg', 'Cabañas Urqu/6.jpg', 'Cabañas Urqu/7.jpg'],
  yaku: ['Cabaña Yaku/1.jpg', 'Cabaña Yaku/2.jpg', 'Cabaña Yaku/3.jpg', 'Cabaña Yaku/4.jpg']
};
const modal = document.querySelector('.gallery-modal');
const modalImage = modal?.querySelector('img');
const modalCaption = modal?.querySelector('p');
let activeGallery = [];
let activeIndex = 0;
function showImage() {
  modalImage.src = activeGallery[activeIndex];
  modalCaption.textContent = `${activeIndex + 1} / ${activeGallery.length}`;
}
document.querySelectorAll('.gallery-trigger').forEach(button => button.addEventListener('click', () => {
  activeGallery = galleries[button.dataset.gallery]; activeIndex = 0; showImage(); modal.showModal();
}));
modal?.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal?.querySelector('.modal-prev').addEventListener('click', () => { activeIndex = (activeIndex - 1 + activeGallery.length) % activeGallery.length; showImage(); });
modal?.querySelector('.modal-next').addEventListener('click', () => { activeIndex = (activeIndex + 1) % activeGallery.length; showImage(); });
modal?.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.addEventListener('keydown', event => { if (!modal?.open) return; if (event.key === 'ArrowLeft') modal.querySelector('.modal-prev').click(); if (event.key === 'ArrowRight') modal.querySelector('.modal-next').click(); });
document.querySelector('#year').textContent = new Date().getFullYear();
