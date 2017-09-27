/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(1);
//console.log(t);
(function(t){
    window['edTable'] = t;
}(t));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var row = __webpack_require__(2);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var column = __webpack_require__(3);

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
    return tr;
};


module.exports = Row;

/***/ }),
/* 3 */
/***/ (function(module, exports) {


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

/***/ })
/******/ ]);