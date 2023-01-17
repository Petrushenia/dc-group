class Review {
  constructor(root) {
    this.root = root;
    this.body = document.body;
    this.modal = document.getElementById('modal');
    this.reviewWrapper = document.getElementById('review-modal-wrapper');
    this.reviewParent = document.querySelector('.review-modal');
    this.reviewCards = this.root.querySelectorAll('.review-card');
    this.newReviewCard = null;

    this.reviewCards.forEach(card => card.addEventListener('click', this.openReview));
    this.reviewWrapper.addEventListener('click', (e) => {
      if (e.target == this.reviewWrapper) {
        this.toggleModal();
        this.removeElement(this.reviewParent);
      }
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
    return [img, studentName, review]
  }

  addElements = (parent, element) => {
    if (Array.isArray(element)) {
      element.forEach(el => parent.appendChild(el));
    }else  {
      parent.appendChild(element);
    }
  }

  toggleModal = () => {
    this.modal.classList.toggle('show-modal');
    this.reviewWrapper.classList.toggle('up-wrapper')
    this.body.classList.toggle('disscroll');
  }

  removeElement = (element) => {
    element.innerHTML = '';
  }
}

const review = new Review(document.querySelector('.review'));