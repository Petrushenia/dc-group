class Burger {
  constructor(root) {
    this.root = root;
    this.body = document.body;
    this.burger = this.root.querySelector('.burger-menu');
    this.navPanel = this.root.querySelector('.nav');
    this.navElements = this.navPanel.children;
    this.modal = null;

    this.burger.addEventListener('click', () => {
      this.toggleNav();
    })

    this.body.addEventListener('click', this.closeMenu);
    this.addMethodClose();
  }

  toggleNav = () => {
    this.showModal();
    this.navPanel.classList.toggle('show-panel');
    this.body.classList.toggle('body-disscroll')
  }

  createModal = () => {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.body.append(this.modal)
  }

  showModal = () => {
    if(!this.modal) {
      this.createModal()
    }
    this.modal.classList.toggle('show-modal')
  }

  closeMenu = (e) => {
    const target = e.target;
    if (target == this.modal) {
      this.toggleNav();
    }
  }

  addMethodClose = () => {
    for (let element of this.navElements) {
      element.addEventListener('click', this.toggleNav)
    }
  }
}

class MouseCircle {
  constructor(circle) {
    this.circle = circle;
    this.body = document.body;
    this.mousePosY;
    this.mousePosX;

    this.circleLower = document.querySelectorAll('.lower');

    this.body.addEventListener('mousemove', (e) => {
      this.move(e);
    })

    window.addEventListener('scroll', () => {
      this.savePos()
    })

    this.addListenerOver();
    this.addListenerOut();;
  }

  move = (e) => {
    this.getPageX(e);
    this.getPageY(e);
    this.circle.style.top = `${this.getPageY(e) - (this.circle.offsetWidth / 2)}px`;
    this.circle.style.left = `${this.getPageX(e) - (this.circle.offsetWidth / 2)}px`;
  }

  getLower = () => {
    this.circle.style.width = '12px';
    this.circle.style.height = '12px';
  }

  getPageY = (e) => {
    this.mousePosY = e.clientY;
    return e.pageY;
  }

  getPageX = (e) => { 
    this.mousePosX = e.clientX
    return e.pageX;
  }

  savePos = () => {
    this.circle.style.top = `${Math.abs((pageYOffset + this.mousePosY) - (this.circle.offsetWidth / 2))}px`
  }

  getBigger = () => {
    this.circle.style.width = '26px';
    this.circle.style.height = '26px';
  }

  addListenerOver = (e) => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseover', this.getLower)
    })
  }

  addListenerOut = () => {
    this.circleLower.forEach(element => {
      element.addEventListener('mouseout', this.getBigger)
    })
  }
}

const burger = new Burger(document.querySelector('.header'));
const mouseCircle = new MouseCircle(document.querySelector('.mouse-circle'));