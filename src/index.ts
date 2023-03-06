import './styles/main.scss';
import Glide from '@glidejs/glide';

const glideSet: Partial<Glide.Options> = {
  type: 'carousel',
  focusAt: 'center',
  startAt: 0,
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

const glide1 = new Glide('#glide-1', glideSet).mount();

const glide2 = new Glide('#glide-2', glideSet).mount();

[...document.getElementsByClassName('product-card')].map((openPopupBtn) => {
  let flag = 1;
  openPopupBtn?.addEventListener(
    'mousedown',
    function () {
      flag = 0;
    },
    false
  );
  openPopupBtn?.addEventListener(
    'mousemove',
    function () {
      flag = 1;
    },
    false
  );
  openPopupBtn?.addEventListener(
    'mouseup',
    function () {
      if (flag === 0) {
        popup?.classList.add('show');
        glide1.pause();
        glide2.pause();
      }
    },
    false
  );
});

const closePopupBtn = document.querySelector('.close-popup');
const popup = document.getElementById('popup');

closePopupBtn?.addEventListener('click', () => {
  popup?.classList.remove('show');
  glide1.play();
  glide2.play();
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup?.classList.remove('show');
    glide1.play();
    glide2.play();
  }
});

console.log('Hello, world!');
