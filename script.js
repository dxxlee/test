

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const count  = document.querySelectorAll('.slide').length;
    const prev   = document.querySelector('.slider-prev');
    const next   = document.querySelector('.slider-next');
    const dots   = document.querySelectorAll('.slider-dot');
    let current  = 0;
  
    function update() {
      // сдвиг flex-контейнера
      slides.style.transform = `translateX(-${100 * current}%)`;
      // точка
      dots.forEach((d,i) => d.classList.toggle('active', i === current));
    }
  
    prev.addEventListener('click', () => {
      current = (current - 1 + count) % count;
      update();
    });
    next.addEventListener('click', () => {
      current = (current + 1) % count;
      update();
    });
    dots.forEach((d,i) => d.addEventListener('click', () => {
      current = i;
      update();
    }));
  
    update();
    setInterval(() => { current = (current + 1) % count; update(); }, 5000);
  });
  


  
  
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.sets-track');
  const prev  = document.querySelector('.sets-carousel .slider-prev');
  const next  = document.querySelector('.sets-carousel .slider-next');
  const items = Array.from(track.querySelectorAll('.sets-item'));

  // вычислим ширину одной карточки (+ gap)
  const style = getComputedStyle(track);
  const gap   = parseInt(style.gap) || 30;
  const cardWidth = items[0].getBoundingClientRect().width + gap;

  let currentIndex = 0;

  function updateButtons() {
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === items.length - 1;
  }

  prev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
      updateButtons();
    }
  });

  next.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      track.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
      updateButtons();
    }
  });

  // Инициализируем состояние кнопок
  updateButtons();
});

  