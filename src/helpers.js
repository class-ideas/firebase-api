import { keyValIterator } from './utils';

export const grabData = resp => resp.data;

export const injectIds = data => {
  let fixed = [];
  for (let [ id, record ] of keyValIterator(data)) {
    fixed.push(Object.assign({}, record, {id}));
  }
  return fixed;
}

export const injectId = id => record => Object.assign({}, record, {id});

export const injectPostResp = data => resp => {
  return Object.assign({}, data, {id: resp.name});
}

export const injectDeleteResp = resp => {
  return Object.assign({}, {status: resp.status, statusText: resp.statusText});
}
