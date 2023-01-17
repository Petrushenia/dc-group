class Review {
  constructor(root) {
    this.root = root;
    this.body = document.body;
    this.modal = document.getElementById('modal');
    this.reviewCards = this.root.querySelectorAll('.review-card');
    this.newReviewCard = null;

    this.reviewCards.forEach(card => card.addEventListener('click', this.openReview))
  }

  openReview = (e) => {
    const parent = e.target.closest('.review-card');
    const img = parent.querySelector('.avatar').cloneNode(true);
    const studentName = parent.querySelector('.student-name').cloneNode(true);
    const review = parent.querySelector('.review-text-content').cloneNode(true);
    console.log(img, studentName, review)
    // this.modal.classList.add('show-modal');
    // this.newReviewCard = e.target.closest('.review-card').cloneNode(true);
    // this.body.classList.add('disscroll')
    // this.modal.append(this.newReviewCard);
  }
}

const review = new Review(document.querySelector('.review'));