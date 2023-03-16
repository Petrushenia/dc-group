class MouseCircle {
  constructor() {
    this.body = document.body;
    this.circle = {
      width: '26',
      div: document.createElement('div')
    };

    this.circleLower = document.querySelectorAll('.lower');
    this.pageWidth = document.documentElement.scrollWidth;
    this.pageHeight = document.documentElement.scrollHeight;
    this.mousePosY;
    this.mousePosX;

    if (window.matchMedia('(min-width: 900px)').matches) {
      this.initCircle();
    }
  }

  moveCircle = (e) => {
    this.circle.div.style.top = `${this.getPageY(e) - (this.circle.width / 2)}px`;
    this.circle.div.style.left = `${this.getPageX(e) - (this.circle.width / 2)}px`;
  }

  getPageY = (e) => {
    this.mousePosY = e.clientY;
    return e.pageY;
  }

  getPageX = (e) => { 
    this.mousePosX = e.clientX
    return e.pageX;
  }

  setPositionByScroll = () => {
    this.circle.div.style.top = `${(pageYOffset + this.mousePosY) - (this.circle.width / 2)}px`
  }

  checkPosition = (e) => {
    if (this.mousePosX < this.circle.width) {
      this.circle.div.style.left = '0px';
    }else if (this.mousePosX > (this.pageWidth - this.circle.width)) {
      this.circle.div.style.left = `${this.pageWidth - this.circle.width}px`
    }else if (e.pageY > (this.pageHeight - this.circle.width)) {
      this.circle.div.style.top = `${this.pageHeight - this.circle.width}px`
    }
  }

  getBiggerCircle = () => {
    this.circle.width = 26;
    this.circle.div.style.width = `${this.circle.width}px`;
    this.circle.div.style.height =`${this.circle.width}px`;
  }

  getLowerCircle = () => {
    this.circle.width = this.circle.width / 2;
    this.circle.div.style.width = `${this.circle.width}px`;
    this.circle.div.style.height = `${this.circle.width}px`;
  }

  enlargeCircle = () => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseover', this.getLowerCircle)
    })
  }

  shrinkCircle = () => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseout', this.getBiggerCircle)
    })
  }

  createCircle = () => {
    this.circle.div.className = 'mouse-circle';
    this.circle.div.style.width = `${this.circle.width}px`;
    this.circle.div.style.height = `${this.circle.width}px`;
  }

  initCircle = () => {
    this.createCircle();
    this.body.appendChild(this.circle.div);
    this.body.addEventListener('mousemove', (e) => {
      this.moveCircle(e);
      this.checkPosition(e);
    })
    window.addEventListener('scroll', this.setPositionByScroll)
    this.shrinkCircle();
    this.enlargeCircle();
  }
}

const mouseCircle = new MouseCircle();
