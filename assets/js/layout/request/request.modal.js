class RequestModal {
  constructor(root) {
    this.root = root;
    this.constainer = this.root.querySelector('.modal-form-container');
    this.closeBtn = this.constainer.querySelector('.close-menu');
    this.openButtons = document.querySelectorAll('.contact-button-js');

    this.openButtons.forEach(button => {
      button.addEventListener('click', this.openModal);
    })

    this.root.addEventListener('click', (e) => {
      if (e.target == this.constainer) {
        this.closeModal();
      }
    })

    this.closeBtn.addEventListener('click', this.closeModal);

  }

  openModal = () => {
    this.root.classList.add('modal-form-visible');
    document.body.classList.add('disscroll');
  }

  closeModal = () => {
    this.root.classList.remove('modal-form-visible');
    document.body.classList.remove('disscroll');
  }
}

export const formModal = new RequestModal(document.querySelector('#modal-form'))