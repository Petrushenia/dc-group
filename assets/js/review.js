import { mainModal } from "./main.modal.js";

class Review {
  constructor(root) {
    this.root = root;
    this.reviewCards = this.root.querySelectorAll('.review-card');
    this.openReviewsButton = this.root.querySelector('.show-reviews-button');
    this.reviewsBlock = this.root.querySelector('.review');
    this.modal = mainModal;
    this.reviewModalWrapper = document.getElementById('review-modal-wrapper');
    this.reviewParent = document.querySelector('#review-modal');
    this.textContainer = document.querySelector('#text-container');
    this.closeReviewButton = document.getElementById('close-menu');
    this.newReviewCards= null;

    this.reviewCards.forEach(card => card.addEventListener('click', this.openReview));

    this.reviewModalWrapper.addEventListener('click', (e) => {
      if (e.target == this.reviewModalWrapper) {
        this.closeReview();
      }
    })

    this.openReviewsButton.addEventListener('click', this.showAllReviews);
    
    this.closeReviewButton.addEventListener('click', () => {
      this.toggleReview();
      this.closeReview();
    })
  }

  openReview = (e) => {
    const reviewElements = this.getReviewElements(e);
    this.addElements(this.reviewParent, reviewElements);
    this.addElements(this.reviewModalWrapper, this.reviewParent);
    this.addElements(this.reviewParent, this.closeReviewButton)
    this.toggleReview();
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

  toggleReview = () => {
    this.modal.toggleModal();
    this.reviewModalWrapper.classList.toggle('up-wrapper')
    document.body.classList.toggle('disscroll');
  }

  closeReview = () => {
    [this.textContainer, this.reviewParent].forEach(element => this.removeElement(element));
  }

  showAllReviews = () => {
    this.reviewsBlock.classList.toggle('open-reviews');
    this.buttonOpenReviews.classList.toggle('close');
  }

  removeElement = (element) => {
    element.innerHTML = '';
  }
}

const review = new Review(document.querySelector('.reviews-container'));
