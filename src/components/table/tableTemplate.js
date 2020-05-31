const codes = {
  A: 65,
  Z: 90,
  getColsCount() {
    return this.Z - this.A + 1;
  },
};

function toCell(_, col) {
  return (`
    <div class="cell" contenteditable data-col="${col}"></div>
  `);
}

function toColumn(col, index) {
  return (`
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `);
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return (`
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index || ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `);
}

export function createTable(rowsCount = 15) {
  const rows = [];

  const cols = new Array(codes.getColsCount())
    .fill('')
    .map((_, i) => toColumn(String.fromCharCode(codes.A + i), i))
    .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = Array(codes.getColsCount()).fill('')
      .map(toCell)
      .join('');

    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
