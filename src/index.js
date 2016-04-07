import FirebaseAPI from './api';

export default function factory(firebaseAppName) {
  return {
    resource(resource) {
      return new FirebaseAPI(firebaseAppName, resource);
    }
  }
}
