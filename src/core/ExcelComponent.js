import DOMListener from './DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor(root, options = {}) {
    super(root, options.listeners);
    this.name = options.name;
  }

  toHTML() {
    console.log(this);
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
