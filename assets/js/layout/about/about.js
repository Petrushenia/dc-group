import { toggleDiv } from "../../functions/functions.js";

class About {
  constructor(root) {
    this.root = root;
    this.textBlock = root.querySelector('.about-us-text');
    this.showButton = root.querySelector('.about-us-button');

    this.showButton.addEventListener('click', () => {
      toggleDiv(this.textBlock, 'show-text')
    })
  }
}


export const about = new About(document.querySelector('.about-us'))
