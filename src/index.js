import Excel from './components/excel/Excel';
import Table from './components/table/Table';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/ToolBar';
import Formula from './components/formula/Formula';

import './scss/index.scss';

const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
