import 'babel-polyfill';

export function* keyValIterator (obj) {
  for (let prop in obj) {
    yield [ prop, obj[prop] ];
  }
}
