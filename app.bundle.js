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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Carousel */ \"./src/components/Carousel.js\");\n\n\n\n\nclass Controller {\n  constructor() {\n    this.model = new _Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.searchResults = [];\n    this.searchQuery = '';\n  }\n\n  handleSeachInput(e) {\n    const key = e.which || e.keyCode;\n    if (key === 13) {\n      this.processSearch(e.target.value);\n    }\n  }\n\n  handleSearchButton() {\n    this.processSearch(this.view.search.input.value);\n  }\n\n  processSearch(query) {\n    this.view.results.clear();\n    this.view.results.render();\n    this.model.getResults(query, true,\n      (data) => {\n        this.view.results.renderResultsItems(data.items);\n        this.carousel = null;\n        this.carousel = new _components_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.carousel.init();\n      });\n\n    window.addEventListener('loadMore', () => { this.handleLoadMore(); });\n    window.addEventListener('resize', () => { this.handleResize(); });\n  }\n\n  handleLoadMore() {\n    this.model.getResults(this.searchQuery, false,\n      (data) => {\n        this.view.results.renderResultsItems(data.items);\n        this.carousel.update();\n      });\n  }\n\n  handleResize() {\n    console.log('resize');\n    this.carousel = new _components_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.carousel.resize();\n  }\n\n  start() {\n    this.view.search.input.addEventListener('keypress', e => this.handleSeachInput(e));\n    this.view.search.button.addEventListener('click', () => { this.handleSearchButton(); });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Controller.js?");

/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nclass Model {\n  constructor() {\n    this.query = '';\n    this.nextPageToken = '';\n    this.results = [];\n  }\n\n  getResults(searchQuery, newInput = false, callback) {\n    if (searchQuery !== this.query) {\n      this.nextPageToken = '';\n      this.query = searchQuery;\n    }\n    if (newInput) this.nextPageToken = '';\n    const baseUrl = 'https://www.googleapis.com/youtube/v3/';\n    const apiKey = 'AIzaSyCLAmbrmF9fPfKPqDlGvDXgnpFUZwB9BeQ';\n    const resultrsPerRequest = 10;\n    fetch(`${baseUrl}search?key=${apiKey}&type=video&part=snippet&maxResults=${resultrsPerRequest}&q=${this.query}&pageToken=${this.nextPageToken}`)\n      .then(response => response.json())\n      .then((response) => {\n        console.log(response);\n        this.nextPageToken = response.nextPageToken;\n        fetch(`${baseUrl}videos?key=${apiKey}&id=${response.items.map(i => i.id.videoId).join(',')}&part=snippet,statistics`)\n          .then(result => result.json())\n          .then((data) => {\n            this.results.push(data.items);\n            callback(data);\n          })\n          .catch(err => console.error(err));\n      });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Model.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchBar */ \"./src/components/SearchBar.js\");\n/* harmony import */ var _components_ResultsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ResultsGrid */ \"./src/components/ResultsGrid.js\");\n\n\n\nclass View {\n  constructor() {\n    this.search = new _components_SearchBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.results = new _components_ResultsGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/View.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\n\n\nconst app = new _Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.start();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\nclass Carousel {\n  constructor() {\n    this.carousel = document.querySelector('.carousel');\n    this.viewport = document.querySelector('.viewport');\n\n    this.nextButton = document.querySelector('.next');\n    this.previousButton = document.querySelector('.previous');\n    this.paginationContainer = document.querySelector('.pagination-container');\n    this.card = document.querySelector('.card');\n\n    this.viewportWidth = this.viewport.offsetWidth;\n    this.cardWidth = this.card.offsetWidth;\n\n    this.currentPage = 0;\n    this.animationDuration = 250;\n    this.columnsPerPage = this.getColumnsCount();\n  }\n\n  init() {\n    this.setDimensions();\n    this.hideAndDisplayButtons();\n    this.generatePagination();\n\n    this.nextButton.addEventListener('click', e => this.handleNext(e));\n    this.previousButton.addEventListener('click', e => this.handlePrevious(e));\n\n    this.initSwipe();\n  }\n\n  update() {\n    this.setDimensions();\n    this.hideAndDisplayButtons();\n    this.generatePagination();\n  }\n\n  resize() {\n    const activeCardIndex = document.querySelector('.card.active').getAttribute('data-index');\n    this.currentPage = Math.floor(activeCardIndex / this.columnsPerPage);\n    console.log(this.currentPage);\n    this.setDimensions();\n    this.hideAndDisplayButtons();\n    this.generatePagination();\n    const fromX = this.slider.getBoundingClientRect().left;\n    this.animateCarousel(fromX, -(-(document.querySelector('.card.active').style.offsetLeft - this.cardMargin)));\n  }\n\n  setDimensions() {\n    this.cards = [...document.getElementsByClassName('card')];\n    this.slider = document.querySelector('#items');\n    this.cardsCount = this.cards.length;\n    this.pageCount = Math.ceil(this.cardsCount / this.columnsPerPage);\n\n    const cardsWidh = this.card.offsetWidth * this.columnsPerPage;\n    this.cardMargin = ((this.viewport.offsetWidth - cardsWidh) / (2 * this.columnsPerPage));\n    this.cards.forEach((card, index) => {\n      card.setAttribute('data-index', `${index}`);\n      card.style.margin = `${this.cardMargin}px`;\n    });\n    this.slider.style.width = `${this.pageCount * this.viewportWidth}px`;\n  }\n\n  hideAndDisplayButtons() {\n    if (this.currentPage === 0) this.previousButton.classList.add('hidden');\n    if (this.currentPage >= this.pageCount - 1) this.nextButton.classList.add('hidden');\n\n    if (this.currentPage > 0) this.previousButton.classList.remove('hidden');\n    if (this.currentPage < this.pageCount - 1) this.nextButton.classList.remove('hidden');\n  }\n\n  generatePagination() {\n    while (this.paginationContainer.firstChild) {\n      this.paginationContainer.removeChild(this.paginationContainer.firstChild);\n    }\n    const activeIndicator = document.querySelector('.indicator.active');\n    const arr = new Array(this.pageCount).fill();\n    arr.forEach((value, index) => {\n      const indicator = document.createElement('div');\n      indicator.className = 'indicator';\n      if (index === 0 && activeIndicator === null) indicator.classList.add('active');\n      indicator.setAttribute('page-index', `${index}`);\n      indicator.addEventListener('click', (e) => { this.handleIndicatorClick(e); });\n      this.paginationContainer.appendChild(indicator);\n    });\n\n    this.updatePagination();\n  }\n\n  updatePagination() {\n    const indicators = document.getElementsByClassName('indicator');\n    const activeIndicator = document.querySelector('.indicator.active');\n    const activeCard = document.querySelector('.card.active');\n\n    activeIndicator.classList.remove('active');\n    indicators[this.currentPage].classList.add('active');\n\n    if (activeCard === null) this.cards[this.currentPage * this.columnsPerPage].classList.add('active');\n\n    this.hideAndDisplayButtons();\n  }\n\n  getColumnsCount() {\n    const count = Math.floor(this.viewportWidth / this.cardWidth);\n    if ((this.viewportWidth - this.cardWidth * count) < 2 * count) {\n      return count - 1;\n    }\n    return count;\n  }\n\n  handleIndicatorClick(e) {\n    const clickedIndicator = e.target;\n    const activeIndicator = document.querySelector('.indicator.active');\n    const activeCard = document.querySelector('.card.active');\n    this.currentPage = Number(clickedIndicator.getAttribute('page-index'));\n\n    const fromX = this.slider.getBoundingClientRect().left;\n    activeIndicator.classList.remove('active');\n    clickedIndicator.classList.add('active');\n    activeCard.classList.remove('active');\n    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');\n    const leftStyle = document.querySelector('.card.active').offsetLeft;\n\n    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));\n\n    this.hideAndDisplayButtons();\n    this.checkForLoadMore();\n  }\n\n  handleNext() {\n    const fromX = this.slider.getBoundingClientRect().left;\n    console.log(this.currentPage);\n    this.cards[this.currentPage * this.columnsPerPage].classList.remove('active');\n    this.currentPage = this.currentPage + 1 >= this.pageCount\n      ? this.pageCount - 1\n      : this.currentPage + 1;\n    this.checkForLoadMore();\n    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');\n    const leftStyle = document.querySelector('.card.active').offsetLeft;\n\n    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));\n\n    this.hideAndDisplayButtons();\n    this.updatePagination();\n  }\n\n  handlePrevious() {\n    const fromX = this.slider.getBoundingClientRect().left;\n    console.log(this.currentPage);\n    this.cards[this.currentPage * this.columnsPerPage].classList.remove('active');\n    this.currentPage = this.currentPage - 1 < 0\n      ? 0\n      : this.currentPage - 1;\n    this.checkForLoadMore();\n    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');\n    const leftStyle = document.querySelector('.card.active').offsetLeft;\n\n    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));\n\n    this.hideAndDisplayButtons();\n    this.updatePagination();\n  }\n\n  initSwipe() {\n    const viewport = document.querySelector('.viewport');\n    viewport.addEventListener('mousedown', e => this.startSwipe(e), false);\n    viewport.addEventListener('touchstart', e => this.startSwipe(e), false);\n\n    viewport.addEventListener('mouseup', e => this.endSwipe(e), false);\n    viewport.addEventListener('touchend', e => this.endSwipe(e), false);\n\n    viewport.addEventListener('mousemove', e => this.swipeInProgress(e));\n    viewport.addEventListener('touchmove', e => this.swipeInProgress(e));\n  }\n\n  startSwipe(e) {\n    this.startX = e.pageX;\n    this.scrollLeft = this.slider.scrollLeft;\n  }\n\n  endSwipe(e) {\n    if (this.startX || this.startX === 0) {\n      const swipeLenth = e.pageX - this.startX;\n      const action = -Math.sign(swipeLenth);\n      if (action < 0) {\n        this.handlePrevious();\n      } else if (action > 0) {\n        this.handleNext();\n      }\n    }\n\n    delete this.startX;\n  }\n\n  swipeInProgress(e) {\n    e.preventDefault();\n    if (this.startX || this.startX === 0) {\n      const fromX = e.pageX - this.slider.offsetLeft;\n      const swipeLength = fromX - this.startX;\n      this.slider.scrollLeft = this.scrollLeft - swipeLength;\n    }\n  }\n\n  animateCarousel(from, to) {\n    this.slider.animate({\n      left: [`${from}px`, `${to}px`],\n    },\n    {\n      duration: this.animationDuration,\n      fill: 'forwards',\n    });\n  }\n\n  checkForLoadMore() {\n    console.log(`Page ${this.currentPage} of ${this.pageCount}`);\n    if (this.currentPage > this.pageCount - 3) window.dispatchEvent(new Event('loadMore'));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/Carousel.js?");

/***/ }),

/***/ "./src/components/ResultItem.js":
/*!**************************************!*\
  !*** ./src/components/ResultItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultItem; });\nclass ResultItem {\n  constructor(data) {\n    this.data = data;\n    this.innerHtml = `<div class=\"card\">\n                          <a href=\"https://www.youtube.com/watch?v=${this.data.id}\" target=\"_blank\">\n                              <img src=\"${this.data.snippet.thumbnails.high.url}\" class=\"thumbnail\">\n                              <p class=\"title\">${this.data.snippet.localized.title}</p>\n                          </a>\n                          <div class=\"info\">\n                              <a href=\"https://www.youtube.com/channel/${this.data.snippet.channelId}\" target=\"_blank\">\n                                  <span class=\"channel\"><i class=\"fas fa-tv\"></i>${this.data.snippet.channelTitle}</span>\n                              </a>\n                              <span class=\"wiews\"><i class=\"far fa-eye\"></i>${this.data.statistics.viewCount}</span>\n                              <span class=\"published\"><i class=\"far fa-calendar-alt\"></i>${new Date(this.data.snippet.publishedAt).toLocaleDateString()}</span>\n                              <span class=\"discription\">${this.data.snippet.description}</span>\n                          </div>\n                      </div>`;\n    const items = document.getElementById('items');\n    items.insertAdjacentHTML('beforeend', this.innerHtml);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/ResultItem.js?");

/***/ }),

/***/ "./src/components/ResultsGrid.js":
/*!***************************************!*\
  !*** ./src/components/ResultsGrid.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultsGrid; });\n/* harmony import */ var _ResultItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultItem */ \"./src/components/ResultItem.js\");\n\n\nclass ResultsGrid {\n  constructor() {\n    this.parentNode = document.getElementById('container');\n    this.innerHtml = `<div class=\"carousel\">\n                        <div class=\"pagination-container\">\n                        </div>\n                        <div class=\"viewport\">\n                            <div class=\"button next hidden\"></div>\n                            <div class=\"button previous hidden\"></div>\n                            <div id=\"items\"></div>\n                        </div>\n                      </div>`;\n  }\n\n  render() {\n    this.parentNode.insertAdjacentHTML('beforeend', this.innerHtml);\n  }\n\n  clear() {\n    this.container = document.getElementById('container');\n    this.carousel = document.querySelector('.carousel');\n    if (this.carousel === null) {\n      return;\n    }\n    this.container.removeChild(this.container.lastChild);\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  renderResultsItems(data) {\n    data.map(item => new _ResultItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/ResultsGrid.js?");

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchBar; });\nclass SearchBar {\n  constructor() {\n    this.innerHtml = `<div id=\"searchBar\">\n                        <input type=\"search\" id=\"search\" placeholder=\"Search\">\n                        <button id=\"searchButton\"><i class=\"fas fa-search\"></i></button>\n                      </div>`;\n    const container = document.createElement('div');\n    container.setAttribute('id', 'container');\n    document.body.appendChild(container);\n    container.insertAdjacentHTML('beforeend', this.innerHtml);\n    this.input = document.getElementById('search');\n    this.button = document.getElementById('searchButton');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/SearchBar.js?");

/***/ })

/******/ });