/**
 * Create the Section class for rendering a list of elements on a page
 * according to the following requirements:
 * It has an object with two properties (items and renderer)
 * as the first parameter of the constructor.
 * The items property serves as an array of data,
 * which you need to add on a page when initializing the class.
 * The renderer property is a
 * function responsible for creating and rendering data on a page.
 * The second parameter should be a CSS class selector
 * where you'll add the card elements.
 * It stores a public method that renders all elements on the page.
 * The renderer() function will render each element on a page.
 * It stores a public method named addItem()
 * that takes a DOM element and adds it to the container.
 * The Section class doesn't have markup.
 * It receives markup through the callback function and inserts it in the container
 */
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(this.renderer(item));
    });
  }

  addItem = (element) => {
    this.container.prepend(element);
  };
}
