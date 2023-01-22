class Review {
  constructor(root) {
    this.root = root;
    this.reviewCards = this.root.querySelectorAll('.review-card');
    this.buttonOpenReviews = this.root.querySelector('.all-reviews');
    this.reviewsBlock = this.root.querySelector('.review');
    this.modal = document.getElementById('modal');
    this.reviewModalWrapper = document.getElementById('review-modal-wrapper');
    this.reviewParent = document.getElementById('review-modal');
    this.textContainer = document.getElementById('text-container');
    this.closeModalButton = document.getElementById('close-menu');
    this.newReviewCard = null;

    this.reviewCards.forEach(card => card.addEventListener('click', this.openReview));

    this.reviewModalWrapper.addEventListener('click', (e) => {
      if (e.target == this.reviewModalWrapper) {
        this.bindMethod();
      }
    })

    this.buttonOpenReviews.addEventListener('click', this.showAllReview)

    this.closeModalButton.addEventListener('click', this.bindMethod)
  }

  openReview = (e) => {
    const reviewElements = this.getReviewElements(e);
    this.addElements(this.reviewParent, reviewElements);
    this.addElements(this.reviewModalWrapper, this.reviewParent);
    this.addElements(this.reviewParent, this.closeModalButton)
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
    this.reviewModalWrapper.classList.toggle('up-wrapper')
    document.body.classList.toggle('disscroll');
  }

  bindMethod = () => {
    this.toggleModal();
    this.removeElement(this.textContainer);
    this.removeElement(this.reviewParent);
  }

  showAllReview = () => {
    const reviewHeight = this.reviewCards[0].offsetHeight;
    const countReviewBlock = this.reviewCards.length;
    console.log(reviewHeight, countReviewBlock)
    this.reviewsBlock.style.height = `${(reviewHeight + 20) * countReviewBlock - 20}px`;
  }

  removeElement = (element) => {
    element.innerHTML = '';
  }
}

const review = new Review(document.querySelector('.reviews-container'));
