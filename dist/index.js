'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function factory(firebaseAppName) {
  return {
    resource: function resource(_resource) {
      return new _api2.default(firebaseAppName, _resource);
    }
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0I7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTLE9BQVQsQ0FBaUIsZUFBakIsRUFBa0M7QUFDL0MsU0FBTztBQUNMLGdDQUFTLFdBQVU7QUFDakIsYUFBTyxrQkFBZ0IsZUFBaEIsRUFBaUMsU0FBakMsQ0FBUCxDQURpQjtLQURkO0dBQVAsQ0FEK0M7Q0FBbEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlyZWJhc2VBUEkgZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmYWN0b3J5KGZpcmViYXNlQXBwTmFtZSkge1xuICByZXR1cm4ge1xuICAgIHJlc291cmNlKHJlc291cmNlKSB7XG4gICAgICByZXR1cm4gbmV3IEZpcmViYXNlQVBJKGZpcmViYXNlQXBwTmFtZSwgcmVzb3VyY2UpO1xuICAgIH1cbiAgfVxufVxuIl19