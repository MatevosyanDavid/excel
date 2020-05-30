import ExcelComponent from 'src/core/ExcelComponent';
import { createTable } from './tableTemplate';

export default class Table extends ExcelComponent {
  static className = 'excel_table';

  toHTML() {
    return createTable(20);
  }
}
