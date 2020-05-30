import Excel from 'src/components/excel/Excel';
import Table from 'src/components/table/Table';
import Header from 'src/components/header/Header';
import Toolbar from 'src/components/toolbar/ToolBar';
import Formula from 'src/components/formula/Formula';

import './scss/index.scss';

const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
