'use strict';

const mySlides = [
  {
    src: './../img/place1.jpg',
    alt: 'place1',
    description: 'At first I will go threre. Its my hometown.',
  },
  {
    src: './../img/place2.jpg',
    alt: 'place2',
    description: 'Its a Ukrainian city too. Its called Bukovel.',
  },
  {
    src: './../img/place3.jpg',
    alt: 'place3',
    description: 'Its the place in Dubai and I would like to visit it.',
  },
  {
    src: './../img/place4.jpg',
    alt: 'place4',
    description: 'Its a Spanish landscape, I would like to visit it too.',
  },
  {
    src: './../img/place5.jpeg',
    alt: 'place5',
    description: 'Its in Maldives.',
  },
  {
    src: './../img/place6.jpg',
    alt: 'place6',
    description: 'Its London, the capital of the UK.',
  },
  {
    src: './../img/place7.jpg',
    alt: 'place7',
    description:
      'This place I would like to visit is located in the Netherlands.',
  },
  {
    src: './../img/place8.jpeg',
    alt: 'place8',
    description:
      'I will buy the most expensive tickets to visit burning Moscow.',
  },
  {
    src: './../img/place9.jpg',
    alt: 'place9',
    description: 'Its the Bubblegum Lake which is located in Australia',
  },
];

const [prevBtn, nextBtn] = document.querySelectorAll('.btn');
const [prevSlide, currSlide, nextSlide] = document.querySelectorAll('.slides');

const mySlider = new Slider(mySlides, 2);

updateSlide(mySlider.currentSlide);

nextBtn.addEventListener('click', nextBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);

function nextBtnHandler() {
  mySlider.incSlideIndex();
  updateSlide(mySlider.currentSlide);
}

function prevBtnHandler() {
  mySlider.decSlideIndex();
  updateSlide(mySlider.currentSlide);
}

function updateSlide(index) {
  // update image for prev slide
  let prevIndex;
  prevIndex =
    index === 0 ? (prevIndex = mySlides.length - 1) : (prevIndex = index - 1);
  prevSlide.innerHTML = `<img src="${mySlides[prevIndex].src}" alt="${mySlides[prevIndex].alt}"/>`;

  // update image for current slide
  currSlide.innerHTML = `<img src="${mySlides[index].src}" alt="${mySlides[index].alt}"/><p>${mySlides[index].description}</p>`;

  // update image for next slide
  let nextIndex;
  nextIndex =
    index === mySlides.length - 1 ? (nextIndex = 0) : (nextIndex = index + 1);
  nextSlide.innerHTML = `<img src="${mySlides[nextIndex].src}" alt="${mySlides[nextIndex].alt}"/>`;

  // if image is not available
  currSlide.onerror = () => {
    currSlide.src =
      'https://st.depositphotos.com/2074779/2629/i/600/depositphotos_26292095-stock-photo-question-mark.jpg';
  };
}

// 4) Додати слайду опис (description).
// Advanced:
// Доробити анімацію появи наступного кадру в слайдері або додати з боків від основної картинки попередню та наступну за схемою.
// Приклад розташування 3-х картинок у слайдері у прикріпленому файлі.
