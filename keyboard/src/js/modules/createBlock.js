function createBlock() {
  class Create {
    constructor(element, classElement, appendElement) {
      this.element = element;
      this.classElement = classElement;
      this.appendElement = appendElement;
    }

    createItem() {
      const item = document.createElement(this.element);
      item.classList.add(this.classElement);
      document.querySelector(this.appendElement).append(item);
    }
  }

  const mainElement = new Create('section', 'application', 'body');
  mainElement.createItem();

  const mainContainer = new Create('div', 'container', '.application');
  mainContainer.createItem();

  const mainTitle = new Create('h1', 'title', '.container');
  mainTitle.createItem();

  const mainWrapper = new Create('div', 'application__wrapper', '.container');
  mainWrapper.createItem();

  const mainTextArea = new Create('textarea', 'textarea', '.application__wrapper');
  mainTextArea.createItem();

  const mainKeyboard = new Create('div', 'keyboard', '.application__wrapper');
  mainKeyboard.createItem();

  const textWindow = new Create('p', 'window-text', '.application__wrapper');
  textWindow.createItem();

  const textLang = new Create('p', 'lang-text', '.application__wrapper');
  textLang.createItem();
}

export default createBlock;
