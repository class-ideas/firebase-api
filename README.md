# Firebase API

Experimental API that creates a restful abstraction around a firebase
resource.

## Install
```shell
npm install firebase-api --save
```

## Usage
```javascript
import firebaseAPI from 'firebase-api';

const users = firebaseAPI('my-firebase-app').resource('users');

// create a user
users.post({first: 'Tyler', last: 'Durden'}).then(user => {
  console.log(user); // {name: "Tyler", last: "Durden", id: "-KEgqfTd8GnnSSO204ss"}
});

// get a user
users.get('-KEgqfTd8GnnSSO204ss').then(user => {
  console.log(user); // {name: "Tyler", last: "Durden", id: "-KEgqfTd8GnnSSO204ss"}
});

// get all users
users.all().then(data => {
  console.log(data); // [{name: "Tyler", last: "Durden", id: "-KEgqfTd8GnnSSO204ss"}, ...]
});

// update a user
users.put({first: 'Cornelius', last: 'Durden', id: '-KEgqfTd8GnnSSO204ss'}).then(user => {
  console.log(user); // {name: "Cornelius", last: "Durden", id: "-KEgqfTd8GnnSSO204ss"}
});

// delete a user
users.delete('-KEgqfTd8GnnSSO204ss').then(resp => {
  console.log(resp); // {status: 200, statusText: "OK"}
});
```
