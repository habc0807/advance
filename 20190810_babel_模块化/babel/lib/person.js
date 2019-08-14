"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _symbol = Symbol(); // 用symbol 做私有变量


var Person =
/*#__PURE__*/
function () {
  function Person() {
    _classCallCheck(this, Person);

    this[_symbol] = 'heihei';
  }

  _createClass(Person, [{
    key: "sayMyName",
    value: function sayMyName() {
      console.log(this[_symbol]);
    }
  }, {
    key: "changeMyName",
    value: function changeMyName(name) {
      this[_symbol] = name;
    }
  }]);

  return Person;
}();

module.exports = Person;