var row = require('./_row.js');

/**
 * 
 * @param {Object} config
 * @property {Number} config.nbRows
 * @property {Number} config.nbCols
 * @property {String} config.id - Table id
 * @property {Array} config.data - Two dimentional array
 * 
 */
var Table = function(config) {
    this.rows = [];
    this.id = config.id;
    this.nbRows = config.nbRows;
    this.nbCols = config.nbCols;
    this.data = config.data;
    this.table = null;
};

Table.prototype.init = function() {
    var t = document.createElement('table');
    t.id = this.id;
    var thead = document.createElement('thead');
    t.appendChild(thead);
    var tbody = document.createElement('tbody');
    for (var i=0; i<config.nbRows; i++) {
        var tr = new row(this.id, i, this.nbCols, this.data[i]);
        tbody.appendChild(tr.createRow());
        this.rows.push(tr);
    }
    t.appendChild(tbody);
    this.table = t;
    var self = this;
    document.body.addEventListener('click', function(e){
        if(e.target !== self.table && !self.hasChild(e.target)) {
            self.closeAllEditableCols.call(self);
        }
    });
    return this;
};

Table.prototype.display = function(targatId) {
    var targat = document.getElementById(targatId);
    if (targat && targat.tagName === 'DIV') {
        targat.appendChild(this.table);
    }
};

Table.prototype.hasChild = function(child) {
    if (child.parentNode === this.table) {
      return true;
    } else if (child.parentNode === null) {
      return false;
    } else {
      return this.hasChild(child.parentNode);
    }
  }

Table.prototype.closeAllEditableCols = function() {
    // find all columns which all in editMode
    var editModeCols = [];
    for (var i=0; i<this.rows.length; i++) {
        var cols = this.rows[i].columns;
        for (var j=0; j<cols.length; j++) {
            if (cols[j].editMode) {
                cols[j].stopEdit();
            }
        }
    }
};

module.exports = Table;