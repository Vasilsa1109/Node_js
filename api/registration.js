//Post_axios
axios.post('/registration', {
  name: '',
  surname: '',
  dateOfbirth: '',
  password: '',
  rewritedPassword: ''
})
.then((response) => {
  console.log(response);
}) 
.catch(error => {
  console.error(error);
});


//Get_axios

const params = {
  name: '',
  surname: '',
  dateOfbirth: '',
  password: '',
  rewritedPassword: ''
};

axios.get('https://api.example.com/', {params});


//Fetch_Post
let login = {
  name: '',
  surname: '',
  dateOfbirth: '',
  password: '',
  rewritedPassword: ''
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(login)
});

let result = await response.json();
alert(result.massage);

//Fetch_Get

fetch('https:://example.com/ajax.php')
.then(response => {
  return response.json();
})
.then (data => {
  console.dir(data);
});

//Post_Js

const https = require('https');
const data = JSON.stringify ({
  name: '',
  surname: '',
  dateOfbirth: '',
  password: '',
  rewritedPassword: ''
});
const options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Lenght': data.length,
  }
}
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on ('data', (d) => {
    process.stdout.write(d)
  })
})
req.on('error', (error) => {
  console.error(error)
})
req.write(data)
req.end()


//Js_Get

const https = require('https');
const data2 = JSON.stringify ({
  name: '',
  surname: '',
  dateOfbirth: '',
  password: '',
  rewritedPassword: ''
});
const options2 = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}
const req2 = https.request(options2, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on ('data', (someData) => {
    process.stdout.write(someData);
  })
})
req2.on('error', (error) => {
  console.error(error);
})
req2.write(data2);
req2.end();