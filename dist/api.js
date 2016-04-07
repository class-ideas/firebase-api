'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function urlFor(endpoint) {
  return this.rootURL + '/' + endpoint + '.json';
}

function resourceUrl(id) {
  return urlFor.call(this, this.resourceName + '/' + id);
}

var FirebaseAPI = function () {
  function FirebaseAPI(firebaseAppName, resourceName) {
    _classCallCheck(this, FirebaseAPI);

    this.appName = firebaseAppName;
    this.rootURL = 'https://' + this.appName + '.firebaseio.com';
    this.resourceName = resourceName;
    this.url = urlFor.call(this, this.resourceName);
  }

  _createClass(FirebaseAPI, [{
    key: 'all',
    value: function all() {
      return _axios2.default.get(this.url).then(_helpers.grabData).then(_helpers.injectIds);
    }
  }, {
    key: 'get',
    value: function get(id) {
      return _axios2.default.get(resourceUrl.call(this, id)).then(_helpers.grabData).then((0, _helpers.injectId)(id));
    }
  }, {
    key: 'post',
    value: function post(data) {
      return _axios2.default.post(this.url, data).then(_helpers.grabData).then((0, _helpers.injectPostResp)(data));
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
        var id = id.id;
      }
      return _axios2.default.delete(resourceUrl.call(this, id)).then(_helpers.injectDeleteResp);
    }
  }, {
    key: 'put',
    value: function put(data) {
      var id = data.id;
      var obj = Object.assign({}, data);
      delete obj.id;
      return _axios2.default.put(resourceUrl.call(this, id), obj).then(_helpers.grabData).then((0, _helpers.injectId)(id));
    }
  }]);

  return FirebaseAPI;
}();

exports.default = FirebaseAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQVFBLFNBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUN4QixTQUFVLEtBQUssT0FBTCxTQUFnQixrQkFBMUIsQ0FEd0I7Q0FBMUI7O0FBSUEsU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCO0FBQ3ZCLFNBQU8sa0JBQWdCLEtBQUssWUFBTCxTQUFxQixFQUFyQyxDQUFQLENBRHVCO0NBQXpCOztJQUlxQjtBQUNuQixXQURtQixXQUNuQixDQUFZLGVBQVosRUFBNkIsWUFBN0IsRUFBMkM7MEJBRHhCLGFBQ3dCOztBQUN6QyxTQUFLLE9BQUwsR0FBZSxlQUFmLENBRHlDO0FBRXpDLFNBQUssT0FBTCxnQkFBMEIsS0FBSyxPQUFMLG9CQUExQixDQUZ5QztBQUd6QyxTQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FIeUM7QUFJekMsU0FBSyxHQUFMLEdBQVcsa0JBQWEsS0FBSyxZQUFMLENBQXhCLENBSnlDO0dBQTNDOztlQURtQjs7MEJBUWI7QUFDSixhQUFPLGdCQUFNLEdBQU4sQ0FBVSxLQUFLLEdBQUwsQ0FBVixDQUNKLElBREksb0JBRUosSUFGSSxvQkFBUCxDQURJOzs7O3dCQU1GLElBQUk7QUFDTixhQUFPLGdCQUFNLEdBQU4sQ0FBVSx1QkFBa0IsRUFBbEIsQ0FBVixFQUNKLElBREksb0JBRUosSUFGSSxDQUVDLHVCQUFTLEVBQVQsQ0FGRCxDQUFQLENBRE07Ozs7eUJBTUgsTUFBTTtBQUNULGFBQU8sZ0JBQU0sSUFBTixDQUFXLEtBQUssR0FBTCxFQUFVLElBQXJCLEVBQ0osSUFESSxvQkFFSixJQUZJLENBRUMsNkJBQWUsSUFBZixDQUZELENBQVAsQ0FEUzs7Ozs0QkFNSixJQUFJO0FBQ1QsVUFBSSxRQUFPLCtDQUFQLEtBQWMsUUFBZCxFQUF3QjtZQUNwQixLQUFPLEdBQVAsR0FEb0I7T0FBNUI7QUFHQSxhQUFPLGdCQUFNLE1BQU4sQ0FBYSx1QkFBa0IsRUFBbEIsQ0FBYixFQUNKLElBREksMkJBQVAsQ0FKUzs7Ozt3QkFRUCxNQUFNO0FBQ1IsVUFBSSxLQUFLLEtBQUssRUFBTCxDQUREO0FBRVIsVUFBSSxNQUFNLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsSUFBbEIsQ0FBTixDQUZJO0FBR1IsYUFBTyxJQUFJLEVBQUosQ0FIQztBQUlSLGFBQU8sZ0JBQU0sR0FBTixDQUFVLHVCQUFrQixFQUFsQixDQUFWLEVBQWlDLEdBQWpDLEVBQ0osSUFESSxvQkFFSixJQUZJLENBRUMsdUJBQVMsRUFBVCxDQUZELENBQVAsQ0FKUTs7OztTQWxDUyIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgZ3JhYkRhdGEsXG4gIGluamVjdElkcyxcbiAgaW5qZWN0SWQsXG4gIGluamVjdFBvc3RSZXNwLFxuICBpbmplY3REZWxldGVSZXNwXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIHVybEZvcihlbmRwb2ludCkge1xuICByZXR1cm4gYCR7dGhpcy5yb290VVJMfS8ke2VuZHBvaW50fS5qc29uYDtcbn1cblxuZnVuY3Rpb24gcmVzb3VyY2VVcmwoaWQpIHtcbiAgcmV0dXJuIHRoaXM6OnVybEZvcihgJHt0aGlzLnJlc291cmNlTmFtZX0vJHtpZH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZWJhc2VBUEkge1xuICBjb25zdHJ1Y3RvcihmaXJlYmFzZUFwcE5hbWUsIHJlc291cmNlTmFtZSkge1xuICAgIHRoaXMuYXBwTmFtZSA9IGZpcmViYXNlQXBwTmFtZVxuICAgIHRoaXMucm9vdFVSTCA9IGBodHRwczovLyR7dGhpcy5hcHBOYW1lfS5maXJlYmFzZWlvLmNvbWA7XG4gICAgdGhpcy5yZXNvdXJjZU5hbWUgPSByZXNvdXJjZU5hbWU7XG4gICAgdGhpcy51cmwgPSB0aGlzOjp1cmxGb3IodGhpcy5yZXNvdXJjZU5hbWUpO1xuICB9XG5cbiAgYWxsKCkge1xuICAgIHJldHVybiBheGlvcy5nZXQodGhpcy51cmwpXG4gICAgICAudGhlbihncmFiRGF0YSlcbiAgICAgIC50aGVuKGluamVjdElkcyk7XG4gIH1cblxuICBnZXQoaWQpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXM6OnJlc291cmNlVXJsKGlkKSlcbiAgICAgIC50aGVuKGdyYWJEYXRhKVxuICAgICAgLnRoZW4oaW5qZWN0SWQoaWQpKTtcbiAgfVxuXG4gIHBvc3QoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KHRoaXMudXJsLCBkYXRhKVxuICAgICAgLnRoZW4oZ3JhYkRhdGEpXG4gICAgICAudGhlbihpbmplY3RQb3N0UmVzcChkYXRhKSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICBpZiAodHlwZW9mIGlkID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIHsgaWQgfSA9IGlkO1xuICAgIH1cbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHRoaXM6OnJlc291cmNlVXJsKGlkKSlcbiAgICAgIC50aGVuKGluamVjdERlbGV0ZVJlc3ApO1xuICB9XG5cbiAgcHV0KGRhdGEpIHtcbiAgICBsZXQgaWQgPSBkYXRhLmlkO1xuICAgIGxldCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKTtcbiAgICBkZWxldGUgb2JqLmlkO1xuICAgIHJldHVybiBheGlvcy5wdXQodGhpczo6cmVzb3VyY2VVcmwoaWQpLCBvYmopXG4gICAgICAudGhlbihncmFiRGF0YSlcbiAgICAgIC50aGVuKGluamVjdElkKGlkKSk7XG4gIH1cbn1cbiJdfQ==