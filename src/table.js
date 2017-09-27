/**
 * This file is not used any where
 */
const EMPTY_STRING = '';

var Table = function (config) {
    config = config || {};
    this.row = config.row || 0;
    this.column = config.column || 0;
    if (config.tableData && config.tableData instanceof Array) {
        this.tableData = config.tableData
    } else {
        this.tableData = [];
    }
    this.id = config.id || 'edTableId'
    this.table = null;
    this.editType = 'input';
    return this;
};

/**
 * This is chained method should be called as
 * new Table(config).init();
 */
Table.prototype.init = function() {
    var t = document.createElement('table');
    t.id = this.id;
    var thead = document.createElement('thead');
    t.appendChild(thead);
    var tbody = document.createElement('tbody');
    for (var i=0; i<this.row; i++) {
        tbody.appendChild(this._createRow(i));
    }
    t.appendChild(tbody);
    console.log("t is", t);
    this.table = t;
    return this;
};

Table.prototype.display = function(targatId) {
    var targat = document.getElementById(targatId);
    if (targat && targat.tagName === 'DIV') {
        targat.appendChild(this.table);
    }
};

Table.prototype._createRow = function(rowNum) {
    var tr = document.createElement('tr');
    tr.id = this.id+'_ROW_'+rowNum;
    for(var i=0; i<this.column; i++) {
        tr.appendChild(this._createColumn(rowNum, i));
    }
    return tr;
};

Table.prototype._createColumn = function(rowNum, colNum) {
    var td = document.createElement('td');
    td.id = this.id+'_ROW_'+rowNum+'_COL_'+colNum;
    var self = this;
    td.addEventListener('click' , function(e){
        self._updateColumn(e, element);
    });
    if (rowNum < this.tableData.length && typeof this.tableData[rowNum] === 'object')
    td.innerHTML = this.tableData[rowNum][colNum] ? this.tableData[rowNum][colNum] : EMPTY_STRING;
    return td;
};

Table.prototype._updateColumn = function(e) {
    console.log(this.id);
    var box;
    if (this.editType === 'input') {
        box = document.createElement('input');
    } else {
        box = document.createElement('input');
    }
    box.innerHTML = ;
    this.appendChild(box);
};

Table.prototype._getEditBox = function() {
    var box;
    if (this.editType === 'input') {
        box = document.createElement('input');
    } else {
        box = document.createElement('input');
    }
};

module.exports = Table;