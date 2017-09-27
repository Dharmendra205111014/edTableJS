
/**
 * @param {String} tableId
 * @param {Number} rowNum 
 * @param {Number} columnNum 
 * @param {Object} data
 */
var Column = function(tableId, rowNum, columnNum, data) {
    this.tableId = tableId;
    this.rowNum = rowNum;
    this.colNum = columnNum;
    this.data = data;
};

Column.prototype.createColumn = function() {
    var td = document.createElement('td');
    td.id = this.tableId+'_ROW_'+this.rowNum+'_COL_'+this.colNum;
    var self = this;
    td.addEventListener('click' , function(e) {
        self.updatedColumnData = this.innerHTML;
        self._updateColumn(e, this);
    });

    td.innerHTML = this.data ? this.data : '';
    return td;
};

Column.prototype._updateColumn = function(e, el) {
    var box= document.createElement('input');
    box.innerHTML = this.updatedColumnData;
    el.innerHTML = '';
    el.appendChild(box);
};

module.exports = Column;