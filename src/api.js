import axios from 'axios';
import {
  grabData,
  injectIds,
  injectId,
  injectPostResp,
  injectDeleteResp
} from './helpers';

function urlFor(endpoint) {
  return `${this.rootURL}/${endpoint}.json`;
}

function resourceUrl(id) {
  return this::urlFor(`${this.resourceName}/${id}`);
}

export default class FirebaseAPI {
  constructor(firebaseAppName, resourceName) {
    this.appName = firebaseAppName
    this.rootURL = `https://${this.appName}.firebaseio.com`;
    this.resourceName = resourceName;
    this.url = this::urlFor(this.resourceName);
  }

  all() {
    return axios.get(this.url)
      .then(grabData)
      .then(injectIds);
  }

  get(id) {
    return axios.get(this::resourceUrl(id))
      .then(grabData)
      .then(injectId(id));
  }

  post(data) {
    return axios.post(this.url, data)
      .then(grabData)
      .then(injectPostResp(data));
  }

  delete(id) {
    if (typeof id === 'object') {
      var { id } = id;
    }
    return axios.delete(this::resourceUrl(id))
      .then(injectDeleteResp);
  }

  put(data) {
    let id = data.id;
    let obj = Object.assign({}, data);
    delete obj.id;
    return axios.put(this::resourceUrl(id), obj)
      .then(grabData)
      .then(injectId(id));
  }
}
