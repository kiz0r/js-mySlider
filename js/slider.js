'use strict';

class Slider {
  constructor(slides, currentSlideIndex) {
    this.slides = slides;
    this.currentSlideIndex = currentSlideIndex;
  }

  set currentSlideIndex(v) {
    if (typeof v !== 'number') {
      throw TypeError();
    }
    if (v < 0 || v >= this.slides.length || !Number.isInteger(v)) {
      throw RangeError();
    }
    this._currentSlideIndex = v;
  }

  get currentSlideIndex() {
    return this._currentSlideIndex;
  }

  incSlideIndex() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  decSlideIndex() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  get currentSlide() {
    return this.currentSlideIndex;
  }

  get prevSlide() {
    return this.slides[this._currentSlideIndex - 1];
  }

  get nextSlide() {
    return this.slides[this._currentSlideIndex + 1];
  }
}
