import { $ } from '../../core/Dom';

export default class Excel {
  constructor(selector, { components = [] }) {
    this.element = $(selector);
    this.components = components;
  }

  getRoot() {
    const root = $.create('div', 'excel');
    this.components = this.components.map(Component => {
      const el = $.create('div', Component.className);
      const component = new Component(el);
      // if (component.name) {
      //   window['c' + component.name] = component;
      // }
      el.html(component.toHTML());
      root.append(el);
      return component;
    });

    return root;
  }

  render() {
    this.element.append(this.getRoot());
    this.components.forEach(element => {
      element.init();
    });
  }
}
