'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectDeleteResp = exports.injectPostResp = exports.injectId = exports.injectIds = exports.grabData = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var grabData = exports.grabData = function grabData(resp) {
  return resp.data;
};

var injectIds = exports.injectIds = function injectIds(data) {
  var fixed = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _utils.keyValIterator)(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var id = _step$value[0];
      var record = _step$value[1];

      fixed.push(Object.assign({}, record, { id: id }));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return fixed;
};

var injectId = exports.injectId = function injectId(id) {
  return function (record) {
    return Object.assign({}, record, { id: id });
  };
};

var injectPostResp = exports.injectPostResp = function injectPostResp(data) {
  return function (resp) {
    return Object.assign({}, data, { id: resp.name });
  };
};

var injectDeleteResp = exports.injectDeleteResp = function injectDeleteResp(resp) {
  return Object.assign({}, { status: resp.status, statusText: resp.statusText });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVPLElBQU0sOEJBQVcsU0FBWCxRQUFXO1NBQVEsS0FBSyxJQUFMO0NBQVI7O0FBRWpCLElBQU0sZ0NBQVksU0FBWixTQUFZLE9BQVE7QUFDL0IsTUFBSSxRQUFRLEVBQVIsQ0FEMkI7Ozs7OztBQUUvQix5QkFBMkIsMkJBQWUsSUFBZiwyQkFBM0Isb0dBQWlEOzs7VUFBdEMsb0JBQXNDO1VBQWxDLHdCQUFrQzs7QUFDL0MsWUFBTSxJQUFOLENBQVcsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFsQixFQUEwQixFQUFDLE1BQUQsRUFBMUIsQ0FBWCxFQUQrQztLQUFqRDs7Ozs7Ozs7Ozs7Ozs7R0FGK0I7O0FBSy9CLFNBQU8sS0FBUCxDQUwrQjtDQUFSOztBQVFsQixJQUFNLDhCQUFXLFNBQVgsUUFBVztTQUFNO1dBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixNQUFsQixFQUEwQixFQUFDLE1BQUQsRUFBMUI7R0FBVjtDQUFOOztBQUVqQixJQUFNLDBDQUFpQixTQUFqQixjQUFpQjtTQUFRLGdCQUFRO0FBQzVDLFdBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixJQUFsQixFQUF3QixFQUFDLElBQUksS0FBSyxJQUFMLEVBQTdCLENBQVAsQ0FENEM7R0FBUjtDQUFSOztBQUl2QixJQUFNLDhDQUFtQixTQUFuQixnQkFBbUIsT0FBUTtBQUN0QyxTQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBQyxRQUFRLEtBQUssTUFBTCxFQUFhLFlBQVksS0FBSyxVQUFMLEVBQXBELENBQVAsQ0FEc0M7Q0FBUiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5VmFsSXRlcmF0b3IgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdyYWJEYXRhID0gcmVzcCA9PiByZXNwLmRhdGE7XG5cbmV4cG9ydCBjb25zdCBpbmplY3RJZHMgPSBkYXRhID0+IHtcbiAgbGV0IGZpeGVkID0gW107XG4gIGZvciAobGV0IFsgaWQsIHJlY29yZCBdIG9mIGtleVZhbEl0ZXJhdG9yKGRhdGEpKSB7XG4gICAgZml4ZWQucHVzaChPYmplY3QuYXNzaWduKHt9LCByZWNvcmQsIHtpZH0pKTtcbiAgfVxuICByZXR1cm4gZml4ZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBpbmplY3RJZCA9IGlkID0+IHJlY29yZCA9PiBPYmplY3QuYXNzaWduKHt9LCByZWNvcmQsIHtpZH0pO1xuXG5leHBvcnQgY29uc3QgaW5qZWN0UG9zdFJlc3AgPSBkYXRhID0+IHJlc3AgPT4ge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge2lkOiByZXNwLm5hbWV9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGluamVjdERlbGV0ZVJlc3AgPSByZXNwID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtzdGF0dXM6IHJlc3Auc3RhdHVzLCBzdGF0dXNUZXh0OiByZXNwLnN0YXR1c1RleHR9KTtcbn1cbiJdfQ==