import { getMethodName } from 'src/core/utils';

export default class DOMListener {
  constructor(root, listeners = []) {
    if (!root) {
      throw new Error('No root provided for DOMListener');
    }
    this.root = root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`${method} is not implemented in ${this.name}`);
      }
      this.root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      console.log(listener);
      this.root.off(listener);
    });
  }
}
