function contentText() {
  class Content {
    constructor(element, text) {
      this.element = element;
      this.text = text;
    }

    createContent() {
      const item = document.querySelector(this.element);
      item.innerText = this.text;
    }
  }

  const textHello = new Content('.title', 'DarkSidr Virtual Keyboard');
  textHello.createContent();

  const textWindow = new Content('.window-text', 'DarkSidr Virtual Keyboard');
  textWindow.createContent();

  const textLang = new Content('.lang-text', 'DarkSidr Virtual Keyboard DarkSidr Virtual Keyboard');
  textLang.createContent();
}

export default contentText;
