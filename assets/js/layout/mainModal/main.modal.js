class MainModal {
  constructor(root) {
    this.root = root;
    this.modal = this.root.querySelector('#modal');

    this.modal.addEventListener('click', this.toggleModal)
  }

  toggleModal = () => {
    this.modal.classList.toggle('open-modal');
  }
}

export const mainModal = new MainModal(document.body)