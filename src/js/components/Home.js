import {templates} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
    thisHome.initCarousel();
  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homePage(element);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initCarousel() {

    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, { // eslint-disable-line
      cellAlign: 'left',
      contain: true,
      autoPlay: 2700,
      wrapAround: true,
      adaptiveHeight: true,
      prevNextButtons: false,
      draggable: '>1',
    });
  }
}

export default Home;