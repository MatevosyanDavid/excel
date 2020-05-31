import ExcelComponent from 'src/core/ExcelComponent';

import { createTable } from './tableTemplate';
import { resizeHandler } from './tableResize';
import { shouldResize } from './tableFunctions';

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
    if (shouldResize(event)) {
      resizeHandler(event, this.root);
    }
  }
}
