'use strict';

const mySlides = [
  {
    src: 'https://youimg1.tripcdn.com/target/0ww4r12000a9rsoqeCF49_C_760_506.jpg',
    alt: 'place1',
    description: 'At first I will go threre. Its my hometown.',
  },
  {
    src: 'https://shackijkraj.com/wp-content/uploads/2018/10/11.jpg',
    alt: 'place2',
    description: 'Its a Ukrainian city too. Its called Bukovel.',
  },
  {
    src: 'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-12/Burj-Khalifa-Tower.jpg',
    alt: 'place2',
    description: 'Its the place in Dubai and I would like to visit it.',
  },
  {
    src: 'https://media.istockphoto.com/id/509288876/photo/tossa-de-mar-on-the-costa-brava-catalunya-spain.jpg?b=1&s=612x612&w=0&k=20&c=NvMd7DY5xpn7p93DgFw95zPAOzXeynIAhSybbcmgLPI=',
    alt: 'place3',
    description: 'Its a Spanish landscape, I would like to visit it too.',
  },
  {
    src: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/2/ba18db18dd9985885bef28c0cc9be7d1/',
    alt: 'place4',
    description: 'Its in Maldives.',
  },
  {
    src: 'https://c4.wallpaperflare.com/wallpaper/588/833/260/city-london-london-eye-big-ben-wallpaper-preview.jpg',
    alt: 'place5',
    description: 'Its London, the capital of the UK.',
  },
  {
    src: 'https://images7.alphacoders.com/124/1241931.jpg',
    alt: 'place6',
    description:
      'This place I would like to visit is located in the Netherlands',
  },
  {
    src: 'https://steamuserimages-a.akamaihd.net/ugc/1860562174067404939/5FBF107A894553C6DE963BC24FC10C727AC4011B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    alt: 'place7',
    description:
      'I will buy the most expensive tickets to visit burning Moscow.',
  },
  {
    src: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BpbmstbGFrZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==',
    alt: 'place8',
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
