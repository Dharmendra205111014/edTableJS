
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
        if (!self.editMode) {
            self.editMode = true;
            self.updatedColumnData = this.innerHTML;
            self._updateColumn(e, this);
        }
    });

    td.innerHTML = this.data ? this.data : '';
    this.column = td;
    return td;
};

Column.prototype._updateColumn = function(e, el) {
    var box= document.createElement('input');
    box.value = this.updatedColumnData;
    el.innerHTML = '';
    el.appendChild(box);
};

Column.prototype.stopEdit = function() {
    var data = this.column.firstElementChild.value;
    this.column.removeChild(this.column.firstElementChild);
    this.column.innerHTML = data;
    delete this.editMode;
};

module.exports = Column;