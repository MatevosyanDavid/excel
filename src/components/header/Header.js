import ExcelComponent from 'src/core/ExcelComponent';

export default class Header extends ExcelComponent {
  static className = 'excel_header';

  toHTML() {
    return (`
      <input type="text" class="input" value="New Table" />
      <div>
        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
        <div class="button">
          <span class="material-icons">delete</span>
        </div>
      </div>
    `);
  }
}
