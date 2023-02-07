import { mainModal } from "./main.modal.js";

class Burger {
  constructor(root) {
    this.root = root;
    this.modal = mainModal;
    this.body = document.body;
    this.burger = this.root.querySelector('.burger-menu');
    this.navPanel = this.root.querySelector('.nav');
    this.navElements = this.navPanel.children;

    this.initBurger();
  }

  openMenu = () => {
    this.modal.toggleModal();
    this.body.classList.add('disscroll');
    this.navPanel.classList.add('open-panel');
  }

  closeMenuByModal = () => {
    this.modal.modal.addEventListener('click', this.closeMenu)
  }

  openModalByClick = () => {
    this.burger.addEventListener('click', () => {
      this.openMenu();
    })
  }

  closeMenu = () => {
    this.modal.modal.classList.remove('open-modal')
    this.body.classList.remove('disscroll');
    this.navPanel.classList.remove('open-panel');
  }

  closeMenuByItem = () => {
    for (let element of this.navElements) {
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

const burger = new Burger(document.querySelector('.header'));