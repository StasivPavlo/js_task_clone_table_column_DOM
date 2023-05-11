'use strict';

const table = document.querySelector('table');
const tr = [...table.rows];

tr.forEach(item => {
  const children = item.cells;
  const position = children[1].cloneNode(true);

  children[children.length - 1].before(position);
});
