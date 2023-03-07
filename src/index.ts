import './styles/main.scss';
import Glide from '@glidejs/glide';

const glideSet: Partial<Glide.Options> = {
  type: 'carousel',
  focusAt: 'center',
  perView: 3,
  gap: 16,
  autoplay: 5000,
  hoverpause: true,
  breakpoints: {
    886: {
      perView: 2,
      focusAt: 1,
    },
    600: {
      perView: 1,
    },
  },
};

const glide1 = new Glide('#glide-1', glideSet);
const glide2 = new Glide('#glide-2', glideSet);

const closePopupBtn = document.querySelector('.close-popup');
const popup = document.getElementById('popup');
const glidesWrap = document.getElementById('glides-wrap');

let itMove = true;

glidesWrap?.addEventListener('mousedown', (e) => {
  if ((e.target as HTMLDivElement).closest('.product-card')) itMove = false;
});

glidesWrap?.addEventListener('mousemove', (e) => {
  if ((e.target as HTMLDivElement).closest('.product-card')) itMove = true;
});

glidesWrap?.addEventListener('mouseup', (e) => {
  if ((e.target as HTMLDivElement).closest('.product-card')) {
    if (itMove) return;
    popup?.classList.add('show');
    document.body.style.overflow = 'hidden';
    glide1.pause();
    glide2.pause();
  }
});

closePopupBtn?.addEventListener('click', () => {
  popup?.classList.remove('show');
  document.body.style.overflow = '';
  glide1.play();
  glide2.play();
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup?.classList.remove('show');
    document.body.style.overflow = '';
    glide1.play();
    glide2.play();
  }
});

glide1.mount();
glide2.mount();
