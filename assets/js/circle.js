class MouseCircle {
  constructor() {
    this.circle = document.createElement('div');
    this.body = document.body;
    this.circleLower = document.querySelectorAll('.lower');
    this.mousePosY;
    this.mousePosX;

    if (window.matchMedia('(min-width: 900px)').matches) {
      this.initCircle();
    }
  }

  moveCircle = (e) => {
    this.circle.style.top = `${this.getPageY(e) - (this.circle.offsetWidth / 2)}px`;
    this.circle.style.left = `${this.getPageX(e) - (this.circle.offsetWidth / 2)}px`;
  }

  getPageY = (e) => {
    this.mousePosY = e.clientY;
    return e.pageY;
  }

  getPageX = (e) => { 
    this.mousePosX = e.clientX
    return e.pageX;
  }

  setPosition = () => {
    this.circle.style.top = `${(pageYOffset + this.mousePosY) - (this.circle.offsetWidth / 2)}px`
  }

  getBigger = () => {
    this.circle.style.width = '26px';
    this.circle.style.height = '26px';
  }

  getLower = () => {
    this.circle.style.width = '12px';
    this.circle.style.height = '12px';
  }

  enlargeCircle = () => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseover', this.getLower)
    })
  }

  shrinkCrcle = () => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseout', this.getBigger)
    })
  }

  initCircle = () => {
    this.circle.className = 'mouse-circle';
    this.body.appendChild(this.circle);
    this.body.addEventListener('mousemove', (e) => {
      this.moveCircle(e);
    })
    window.addEventListener('scroll', this.setPosition)
    this.shrinkCrcle();
    this.enlargeCircle();
    
  }
}

const mouseCircle = new MouseCircle();