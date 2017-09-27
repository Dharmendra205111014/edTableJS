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
    return this;
};

Table.prototype.display = function(targatId) {
    var targat = document.getElementById(targatId);
    if (targat && targat.tagName === 'DIV') {
        targat.appendChild(this.table);
    }
}

module.exports = Table;