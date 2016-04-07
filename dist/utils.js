'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyValIterator = keyValIterator;

require('babel-polyfill');

var _marked = [keyValIterator].map(regeneratorRuntime.mark);

function keyValIterator(obj) {
  var prop;
  return regeneratorRuntime.wrap(function keyValIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(obj);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 7;
            break;
          }

          prop = _context.t1.value;
          _context.next = 5;
          return [prop, obj[prop]];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQUVpQjs7QUFGakI7O2VBRWlCOztBQUFWLFNBQVUsY0FBVixDQUEwQixHQUExQjtNQUNJOzs7OztnREFBUTs7Ozs7Ozs7QUFBUjs7aUJBQ0QsQ0FBRSxJQUFGLEVBQVEsSUFBSSxJQUFKLENBQVI7Ozs7Ozs7Ozs7OztDQUZIIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbioga2V5VmFsSXRlcmF0b3IgKG9iaikge1xuICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgIHlpZWxkIFsgcHJvcCwgb2JqW3Byb3BdIF07XG4gIH1cbn1cbiJdfQ==