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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/link.component.ts":
/*!*****************************************!*\
  !*** ./src/component/link.component.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LinkComponent {
    constructor(urlList) {
        this.links = [];
        this.count = 0;
        this.parseLinks(urlList);
    }
    parseLinks(links) {
        let urls = links.match(/[^\r\n]+/g);
        urls.forEach(link => {
            this.links.push({ id: this.count, title: link, url: link });
            this.count++;
        });
    }
}
exports.LinkComponent = LinkComponent;


/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const link_component_1 = __webpack_require__(/*! ./component/link.component */ "./src/component/link.component.ts");
class Popup {
    constructor() {
        let okbutton = document.querySelector('.okbutton');
        console.log(okbutton);
        okbutton.addEventListener('click', (e) => { this.onOkClick(e); });
    }
    bindToLinkedList(urls) {
        let list = document.querySelector('.linklist');
        urls.links.forEach(x => {
            let newel = document.createElement('div');
            newel.innerText = x.url;
            list.appendChild(newel);
        });
    }
    onOkClick(e) {
        e.target.style.backgroundColor = "red";
        let ta = document.querySelector('#tadom');
        this.urls = new link_component_1.LinkComponent(ta.value);
        this.bindToLinkedList(this.urls);
        this.setBadgeCount(this.urls.count);
    }
    setBadgeCount(count) {
        chrome.browserAction.setBadgeBackgroundColor({
            "color": "#ff0000",
        });
        chrome.browserAction.setBadgeText({
            text: count.toString()
        });
    }
    getBackgroundData() {
        chrome.extension;
    }
}
exports.Popup = Popup;
let p = new Popup();
var background = chrome.extension.getBackgroundPage(); //do this in global scope for popup.js
// chrome..getBackgroundPage((x:any)=>{
//     console.log(x)
//     x.dothis();
// })
console.log("imm");
// let count = 0;
// $(function() {
//   const queryInfo = {
//     active: true,
//     currentWindow: true
//   };
//   chrome.tabs.query(queryInfo, function(tabs) {
//     $('#url').text(tabs[0].url);
//     $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
//   });
//   chrome.browserAction.setBadgeText({text: count.toString()});
//   $('#countUp').click(()=>{
//     chrome.browserAction.setBadgeText({text: (++count).toString()});
//   });
//   $('#changeBackground').click(()=>{
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {
//         color: '#555555'
//       },
//       function(msg) {
//         console.log("result message:", msg);
//       });
//     });
//   });
// });


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9saW5rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUNBQXlDO0FBQ3RFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUJBQW1CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix3Q0FBd0MsdUJBQXVCO0FBQy9EO0FBQ0EsMENBQTBDLDJCQUEyQjtBQUNyRSxNQUFNO0FBQ047QUFDQSwwQkFBMEIsa0NBQWtDO0FBQzVEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUkiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9wdXAudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBMaW5rQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHVybExpc3QpIHtcclxuICAgICAgICB0aGlzLmxpbmtzID0gW107XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJzZUxpbmtzKHVybExpc3QpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VMaW5rcyhsaW5rcykge1xyXG4gICAgICAgIGxldCB1cmxzID0gbGlua3MubWF0Y2goL1teXFxyXFxuXSsvZyk7XHJcbiAgICAgICAgdXJscy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2goeyBpZDogdGhpcy5jb3VudCwgdGl0bGU6IGxpbmssIHVybDogbGluayB9KTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGlua0NvbXBvbmVudCA9IExpbmtDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGxpbmtfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnQvbGluay5jb21wb25lbnRcIik7XHJcbmNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCBva2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5va2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9rYnV0dG9uKTtcclxuICAgICAgICBva2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHRoaXMub25Pa0NsaWNrKGUpOyB9KTtcclxuICAgIH1cclxuICAgIGJpbmRUb0xpbmtlZExpc3QodXJscykge1xyXG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtsaXN0Jyk7XHJcbiAgICAgICAgdXJscy5saW5rcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbmV3ZWwuaW5uZXJUZXh0ID0geC51cmw7XHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobmV3ZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25Pa0NsaWNrKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgIGxldCB0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWRvbScpO1xyXG4gICAgICAgIHRoaXMudXJscyA9IG5ldyBsaW5rX2NvbXBvbmVudF8xLkxpbmtDb21wb25lbnQodGEudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYmluZFRvTGlua2VkTGlzdCh0aGlzLnVybHMpO1xyXG4gICAgICAgIHRoaXMuc2V0QmFkZ2VDb3VudCh0aGlzLnVybHMuY291bnQpO1xyXG4gICAgfVxyXG4gICAgc2V0QmFkZ2VDb3VudChjb3VudCkge1xyXG4gICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjAwMDBcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBjb3VudC50b1N0cmluZygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRCYWNrZ3JvdW5kRGF0YSgpIHtcclxuICAgICAgICBjaHJvbWUuZXh0ZW5zaW9uO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9wdXAgPSBQb3B1cDtcclxubGV0IHAgPSBuZXcgUG9wdXAoKTtcclxudmFyIGJhY2tncm91bmQgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7IC8vZG8gdGhpcyBpbiBnbG9iYWwgc2NvcGUgZm9yIHBvcHVwLmpzXHJcbi8vIGNocm9tZS4uZ2V0QmFja2dyb3VuZFBhZ2UoKHg6YW55KT0+e1xyXG4vLyAgICAgY29uc29sZS5sb2coeClcclxuLy8gICAgIHguZG90aGlzKCk7XHJcbi8vIH0pXHJcbmNvbnNvbGUubG9nKFwiaW1tXCIpO1xyXG4vLyBsZXQgY291bnQgPSAwO1xyXG4vLyAkKGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnN0IHF1ZXJ5SW5mbyA9IHtcclxuLy8gICAgIGFjdGl2ZTogdHJ1ZSxcclxuLy8gICAgIGN1cnJlbnRXaW5kb3c6IHRydWVcclxuLy8gICB9O1xyXG4vLyAgIGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5SW5mbywgZnVuY3Rpb24odGFicykge1xyXG4vLyAgICAgJCgnI3VybCcpLnRleHQodGFic1swXS51cmwpO1xyXG4vLyAgICAgJCgnI3RpbWUnKS50ZXh0KG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpKTtcclxuLy8gICB9KTtcclxuLy8gICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6IGNvdW50LnRvU3RyaW5nKCl9KTtcclxuLy8gICAkKCcjY291bnRVcCcpLmNsaWNrKCgpPT57XHJcbi8vICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6ICgrK2NvdW50KS50b1N0cmluZygpfSk7XHJcbi8vICAgfSk7XHJcbi8vICAgJCgnI2NoYW5nZUJhY2tncm91bmQnKS5jbGljaygoKT0+e1xyXG4vLyAgICAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcclxuLy8gICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xyXG4vLyAgICAgICAgIGNvbG9yOiAnIzU1NTU1NSdcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgZnVuY3Rpb24obXNnKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgbWVzc2FnZTpcIiwgbXNnKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=