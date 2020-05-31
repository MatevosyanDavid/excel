import ExcelComponent from 'src/core/ExcelComponent';

import { createTable } from './tableTemplate';

export default class Table extends ExcelComponent {
  static className = 'excel_table';

  constructor(root) {
    super(root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    console.log(event.target);
  }
}
