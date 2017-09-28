var column = require('./_column.js');

/**
 * 
 * @param {String} tableId 
 * @param {Number} rowNum 
 * @param {Number} colCount
 * @param {Object} data 
 */
var Row = function(tableId, rowNum, colCount, data) {
    this.tableId = tableId;
    this.rowNum = rowNum;
    this.colCount = colCount;
    this.columns = [];
    this.data = data;
}

Row.prototype.createRow = function() {
    var tr = document.createElement('tr');
    tr.id = this.tableId+'_ROW_'+this.rowNum;
    for(var i=0; i<this.colCount; i++) {
        var col = new column(this.tableId, this.rowNum, i, this.data[i]);
        tr.appendChild(col.createColumn());
        this.columns.push(col);
    }
    this.row = tr;
    return tr;
};


module.exports = Row;