class Review {
  constructor(root) {
    this.root = root;
    this.modal = document.getElementById('modal');
    this.reviewWrapper = document.getElementById('review-modal-wrapper');
    this.reviewParent = document.querySelector('.review-modal');
    this.reviewCards = this.root.querySelectorAll('.review-card');
    this.textContainer = document.getElementById('text-container');
    this.closeButton = document.getElementById('close-menu');
    this.newReviewCard = null;

    this.reviewCards.forEach(card => card.addEventListener('click', this.openReview));

    this.reviewWrapper.addEventListener('click', (e) => {
      if (e.target == this.reviewWrapper) {
        this.toggleModal();
        this.removeElement(this.textContainer);
      }
    })

    this.closeButton.addEventListener('click', () => {
      this.toggleModal();
      this.removeElement(this.textContainer);
    })
  }

  openReview = (e) => {
    const reviewElements = this.getReviewElements(e);
    this.addElements(this.reviewParent, reviewElements);
    this.addElements(this.reviewWrapper, this.reviewParent);
    this.toggleModal();
  }

  getReviewElements = (e) => {
    const parent = e.target.closest('.review-card');
    const img = parent.querySelector('.avatar').cloneNode(true);
    const studentName = parent.querySelector('.student-name').cloneNode(true);
    const review = parent.querySelector('.review-text-content').cloneNode(true);
    this.addElements(this.textContainer, review)
    return [img, studentName, this.textContainer];
  }

  addElements = (parent, child) => {
    if (Array.isArray(child)) {
      child.forEach(element => parent.appendChild(element));
    }else {
      parent.appendChild(child);
    }
  }

  toggleModal = () => {
    this.modal.classList.toggle('show-modal');
    this.reviewWrapper.classList.toggle('up-wrapper')
    document.body.classList.toggle('disscroll');
  }

  removeElement = (element) => {
    element.innerHTML = '';
  }
}

const review = new Review(document.querySelector('.review'));