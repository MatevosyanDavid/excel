const codes = {
  A: 65,
  Z: 90,
  getColsCount() {
    return this.Z - this.A + 1;
  },
};

function toCell() {
  return (`
    <div class="cell" contenteditable></div>
  `);
}

function toColumn(string) {
  return (`
    <div class="column">
      ${string}
    </div>
  `);
}

function createRow(index, content) {
  return (`
    <div class="row">
      <div class="row-info">
        ${index}
      </div>
      <div class="row-data">
        ${content }
      </div>
    </div>
  `);
}

export function createTable(rowsCount = 15) {
  const rows = [];

  const cols = Array(codes.getColsCount()).fill('')
    .map((_, i) => toColumn(String.fromCharCode(i + codes.A)))
    .join('');

  rows.push(createRow('', cols));


  for (let i = 0; i < rowsCount; i++) {
    const cels = Array(codes.getColsCount()).fill('')
      .map(toCell)
      .join('');
    rows.push(createRow(i + 1, cels));
    console.log(cels);
  }
  return rows.join('');
}
