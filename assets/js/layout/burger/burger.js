import { mainModal } from "../mainModal/main.modal.js";

class Burger {
  constructor(root) {
    this.root = root;
    this.body = document.body;
    this.burger = this.root.querySelector('.burger-menu');
    this.nav = this.root.querySelector('.nav');
    this.navItems = [this.root.querySelector('.nav-items'), this.root.querySelector('.nav-contacts')];
    Object.setPrototypeOf(this, mainModal);

    this.initBurger();

  }

  openMenu = () => {
    this.toggleModal();
    this.body.classList.add('disscroll');
    this.nav.classList.add('open-panel');
  }

  closeMenuByModal = () => {
    this.modal.addEventListener('click', this.closeMenu);
  }

  openModalByClick = () => {
    this.burger.addEventListener('click', () => {
      this.openMenu();
    })
  }

  closeMenu = () => {
    this.modal.classList.remove('open-modal')
    this.body.classList.remove('disscroll');
    this.nav.classList.remove('open-panel');
  }

  closeMenuByItem = () => {
    const navElements = [...this.navItems[0].children, ...this.navItems[1].children]
    for (let element of navElements) {
          element.addEventListener('click', () => {
          this.closeMenu();
      })
    }  
  }

  initBurger = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.closeMenuByItem();
      this.closeMenuByModal();
      this.openModalByClick();
    }  
  }
}

export const burger = new Burger(document.querySelector('.header'));