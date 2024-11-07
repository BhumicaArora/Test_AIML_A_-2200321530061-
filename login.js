<div id="loginError"class="alert">Loginfailed.</div>
         function validateLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username !== 'admin' || password !== 'password123') {
                document.getElementById('loginError').style.display = 'block';
            } else {
                alert('Login successfully');
            }
        }
