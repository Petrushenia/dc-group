class Burger {
  constructor(root) {
    this.root = root;
    this.body = document.body;
    this.burger = this.root.querySelector('.burger-menu');
    this.navPanel = this.root.querySelector('.nav');
    this.navElements = this.navPanel.children;
    this.modal = document.getElementById('modal');

    this.burger.addEventListener('click', () => {
      this.openMenu();
    })

    this.modal.addEventListener('click', this.closeMenu);

    this.addMethod();
  }

  openMenu = () => {
    this.toggleModal();
    this.body.classList.add('disscroll');
    this.navPanel.classList.add('show-panel');
  }

  toggleModal = () => {
    this.modal.classList.toggle('show-modal');
  }

  createModal = () => {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.addEventListener('click', this.closeMenu)
    this.addElement(this.body, this.modal);
  }

  addElement = (parent, element) => {
    parent.appendChild(element);
  }

  closeMenu = () => {
    this.modal.classList.remove('show-modal');
    this.body.classList.remove('disscroll');
    this.navPanel.classList.remove('show-panel');
  }

  addMethod = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
        for (let element of this.navElements) {
          element.addEventListener('click', () => {
          this.closeMenu();
        })
      }
    }
  }
}

const burger = new Burger(document.querySelector('.header'));

