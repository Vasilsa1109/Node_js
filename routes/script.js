
function validatePassword2() {
    const passwordField = document.querySelector('.password'); 
    const password = passwordField.value; 
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;

    const errorLog = document.getElementById("errorMessage"); 

    if (!passwordPattern.test(password)) {
        errorLog.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
        return false; 
    }

    errorLog.innerHTML = ""; 
    alert('Данные отправлены'); 
    return true; 
}

function validatePassword() {
    const passwordField = document.getElementsByClassName('password')[0]; 
    const password = passwordField.value; 
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    
    const passwordRep = document.getElementById('pass2');
    const passwordRepeat = passwordRep.value;

    const error = document.getElementById("error-message"); 

    if (!passwordPattern.test(password)) {
        error.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
        return false; 
    }

    if (password !== passwordRepeat) {
        error.innerHTML = "Пароли не совпадают"; 
        return false; 
    }

    error.innerHTML = ""; 
    alert('Данные отправлены'); 
    return true; 
}

function clearForm() {
    document.getElementById('loginForm').reset();
}


function previewImage(event) {
    const imagePreviewDiv = document.getElementById('imagePreview');
    imagePreviewDiv.innerHTML = ""; 

    const file = event.target.files[0]; 

    if (file) {
        const reader = new FileReader(); 
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result; 
            img.style.maxWidth = '150px'; 
            img.style.maxHeight = '150px'; 
            imagePreviewDiv.appendChild(img); 
        
            const label = document.querySelector('label[for="file"]');
            label.style.display = 'none'; 
        }
        reader.readAsDataURL(file); 
    }
}


(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
          let value = e.target.dataset.num;
          if (value !== undefined) {
              screen.value += value;
          }
      });
  });
  equal.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "Please enter";
    } else {
        try {
            let answer = eval(screen.value);
            screen.value = answer;
        } catch (error) {
            screen.value = "Error";
        }
    }
  });
  clear.addEventListener('click', function(e) {
    screen.value = "";
  });
  })()


  // function validateEmail(email) {
//     const emailPattern =  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g ;
//     return emailPattern.test(email);
// }

//Создание сервера
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end();
// })
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

//Запросы
// AXIOS

// function getAxios() {
//     const url = '/Dz_proj/NodeJS/nodejs/login.html';
//     axios.get(url)
//         .then(response => {
//             console.log('GET:', response.data);
//         })
//         .catch(error => {
//             console.error('Error (GET):', error);
//         });
// }

// getAxios(); 

// function postAxios() {
//     const url = '/Dz_proj/NodeJS/nodejs/login.html';

//     axios.post(url)
//         .then(response => {
//             console.log('POST:', response.data);
//         })
//         .catch(error => {
//             console.error('Error (POST):', error);
//         });
// }

// postAxios(); 


// //JS
// function getData() {
//     const url = '/Dz_proj/NodeJS/nodejs/login.html'; 
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('GET request data:', data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// getData(); 

// function postData() {
//     const url = '/Dz_proj/NodeJS/nodejs/login.html'; 
//     const data = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     };

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('POST request data:', data);
//         })
//         .catch(error => {
//             console.error('Error during POST:', error);
//         });
// }

// postData();