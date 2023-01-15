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
    this.body.classList.toggle('body-disscroll');
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
      this.body.classList.remove('body-disscroll');
      this.modal.classList.remove('show-modal');
      this.navPanel.classList.remove('show-panel');
    }
  }

  addMethodClose = () => {
    for (let element of this.navElements) {
      element.addEventListener('click', () => {
        this.body.classList.remove('body-disscroll');
        this.modal.classList.remove('show-modal');
        this.navPanel.classList.remove('show-panel');
      })
    }
  }
}

const burger = new Burger(document.querySelector('.header'));
