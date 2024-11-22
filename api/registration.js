//Post_axios
axios.post('/registration', {
  id: ' ',
  username: '',
  birthday: '',
  password: '',
  email: ' ',
  photo: ' '
})
.then((response) => {
  console.log(response);
}) 
.catch(error => {
  console.error(error);
});

// id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   autoIncrement: true,
// },
// username: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// password: {
//   type: DataTypes.STRING,
//   allowNull: false,
// },
// email: {
//   type: DataTypes.STRING,
//   allowNull: false,
//   unique: true,
// },
// birthdate: {
//   type: DataTypes.DATE,
//   allowNull: false,
// },
// photo: {
//   type: DataTypes.STRING,
//   allowNull: true,
// }


//Get_axios

const params = {
  id: ' ',
  username: '',
  birthday: '',
  password: '',
  email: ' ',
  photo: ' '
};

axios.get('https://api.example.com/', {params});


//Fetch_Post
let login = {
  id: ' ',
  username: '',
  birthday: '',
  password: '',
  email: ' ',
  photo: ' '
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
  id: ' ',
  username: '',
  birthday: '',
  password: '',
  email: ' ',
  photo: ' '
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
  id: ' ',
  username: '',
  birthday: '',
  password: '',
  email: ' ',
  photo: ' '
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