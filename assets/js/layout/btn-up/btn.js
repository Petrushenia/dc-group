class ButtonUp {
  constructor(root) {
    this.root = root;
    this.scrolling = false;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300 && !this.scrolling) {
        this.showBtn();
      }else if (window.scrollY <= 300 && this.scrolling) {
        this.hideBtn();
      }
    })

    this.root.addEventListener('click', this.scrollUp)
  }

  showBtn = () => {
    this.root.classList.remove('btn-hide');
    this.scrolling = true;
  }

  hideBtn = () => {
    this.root.classList.add('btn-hide');
    this.scrolling = false;
  }

  scrollUp = () => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
      }
    );
  }
}


export const btnUp = new ButtonUp(document.querySelector('#btn-up'))