export default class Fullscreen {
  constructor(container, cb) {
    this.container = container;
    // Fullscreen button, with dash border icon inset.
    this.elt = document.createElement('div');
    this.elt.setAttribute('class', 'fullscreen-control');
    this.dash = document.createElement('div');
    this.dash.setAttribute('class', 'fullscreen-dash');
    this.elt.appendChild(this.dash);
    this.container.appendChild(this.elt);
    this.cb = cb;
    this.content = container;
    this.origPosition = this.container.style.position;
    this.origWidth = this.container.offsetWidth;
    this.origHeight = this.container.offsetHeight;
    this.origMargin = this.container.style.margin;
    this.fs = (this.origWidth == window.innerWidth
               && this.origHeight == window.innerHeight);
    if (this.fs) {
      this.dash.display = 'none';
      return;
    }
    this.elt.onclick = () => {
      this.toggle();
    }
  }


  isFullscreen() {
    return this.fs;
  }


  makeFullscreen() {
    if (this.isFullscreen()) {
      return;
    }
    this.toggle();
  }


  toggle() {
    if (this.isFullscreen()) {
      this.container.style.position = this.origPosition;
      this.container.style.margin = this.origMargin;
      this.container.style.width = this.origWidth + 'px';
      this.container.style.height = this.origHeight + 'px';
      this.dash.setAttribute('class', 'fullscreen-dash');
      this.fs = false;
      if (this.cb) {
        this.cb();
      }
    } else {
      this.container.style.position = 'absolute';
      this.container.style.margin = '0';
      this.container.style.width = window.innerWidth + 'px';
      this.container.style.height = window.innerHeight + 'px';
      this.dash.setAttribute('class', 'fullscreen-dash-zoomed');
      this.fs = true;
      if (this.cb) {
        this.cb();
      }
    }
  }
}
