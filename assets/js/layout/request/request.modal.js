class RequestModal {
  constructor(root) {
    this.root = root;
    this.constainer = this.root.querySelector('.modal-form-container');
    this.closeBtn = this.constainer.querySelector('.close-menu')

    this.openButtons = document.querySelectorAll('.contact-button-js');

    this.openButtons.forEach(button => {
      button.addEventListener('click', this.showFormModal);
    })

    this.root.addEventListener('click', (e) => {
      if (e.target == this.constainer) {
        this.showFormModal();
      }
    })

    this.closeBtn.addEventListener('click', this.showFormModal);

  }

  showFormModal = () => {
    this.root.classList.toggle('modal-form-visible');
  }
}

export const formModal = new RequestModal(document.querySelector('#modal-form'))