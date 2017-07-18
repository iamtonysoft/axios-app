
var axios = require('axios');

var root = 'https://jsonplaceholder.typicode.com';
// Make a request
axios.get(root + '/users')
  .then(function (response) {
    var data = JSON.stringify(response.data, null, "\t");
    document.body.innerHTML = data;
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });