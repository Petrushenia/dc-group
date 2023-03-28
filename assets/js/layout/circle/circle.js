class MouseCircle {
  constructor(width, height) {
    this.body = document.body;
    this.circleWidth = width;
    this.circleHeight = height;
    this.className = 'mouse-circle';
    this.div = document.createElement('div');
    this.circleLower = document.querySelectorAll('.lower');
    this.pageWidth = document.documentElement.scrollWidth;
    this.pageHeight = document.documentElement.scrollHeight;
    this.mousePosY;
    this.mousePosX;

    if (window.matchMedia('(min-width: 900px)').matches) {
      this.initCircle();
    }

    this.body.addEventListener('click', this.getPageSize);

    this.body.addEventListener('mousemove', (e) => {
      this.moveCircle(e);
      this.checkPosition(e);
    });

    window.addEventListener('scroll', this.setPositionByScroll);
  }

  moveCircle = (e) => {
    this.div.style.top = `${this.getPageY(e) - (this.circleWidth / 2)}px`;
    this.div.style.left = `${this.getPageX(e) - (this.circleHeight / 2)}px`;
  }

  getPageY = (e) => {
    this.mousePosY = e.clientY;
    return e.pageY;
  }

  getPageX = (e) => { 
    this.mousePosX = e.clientX;
    return e.pageX;
  }

  getPageSize = () => {
    this.pageWidth = document.documentElement.scrollWidth;
    this.pageHeight = document.documentElement.scrollHeight;
  }

  getBiggerCircle = () => {
    this.circleWidth = this.circleWidth * 2;
    this.circleHeight = this.circleHeight * 2;
    this.div.style.width = `${this.circleWidth}px`;
    this.div.style.height =`${this.circleHeight}px`;
  }

  getLowerCircle = () => {
    this.circleWidth = this.circleWidth / 2;
    this.circleHeight = this.circleHeight / 2;
    this.div.style.width = `${this.circleWidth}px`;
    this.div.style.height = `${this.circleHeight}px`;
  }

  setPositionByScroll = () => {
    this.div.style.top = `${(pageYOffset + this.mousePosY) - (this.circleWidth / 2)}px`;
  }

  checkPosition = (e) => {
    if ( e.pageX < this.circleWidth ) {
      this.div.style.left = '0px';
    }else if ( e.pageX > (this.pageWidth - this.circleWidth) ) {
      this.div.style.left = `${this.pageWidth - this.circleWidth}px`;
    }else if ( e.pageY > (this.pageHeight - this.circleHeight) ) {
      this.div.style.top = `${this.pageHeight - this.circleHeight}px`
    }
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
    this.div.className = this.className;
    this.div.style.width = `${this.circleWidth}px`;
    this.div.style.height = `${this.circleHeight}px`;
  }

  initCircle = () => {
    this.createCircle();
    this.shrinkCircle();
    this.enlargeCircle();
    this.body.appendChild(this.div);
  }
}

export const circle = new MouseCircle(26, 26);
