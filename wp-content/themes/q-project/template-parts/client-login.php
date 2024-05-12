
<?php
/* Template Name: Client Login */
/* Template Post Type: page */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Header
get_header();
?>

<!-- Content -->
<body>
    <div class="container">
        <form id="login-form" method="post" class="flex">
            <label for="email">Email</label>
            <input type="email" placeholder="Enter Email" name="email" id="email" required>

            <label for="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password" id="password" required>
                
            <button type="submit">Login</button>
        </form>
    </div>
</body>

<!-- Script -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
    $(document).ready(function() {

        function isTokenExpired() {
            const expirationTimeFromStorage = localStorage.getItem('expirationTime');
            if (expirationTimeFromStorage !== null) {
                const currentTime = new Date().getTime();
                return currentTime > parseInt(expirationTimeFromStorage);
            }
            return true;
        }

        function refreshToken(email, password) {
            const body = JSON.stringify({
                email: email,
                password: password
            });

            $.ajax({
                url: 'https://symfony-skeleton.q-tests.com/api/v2/token',
                method: 'POST',
                contentType: 'application/json',
                data: body,
                success: function(data) {
                    const tokenKey = data.token_key;
                    const expirationTime = new Date(data.expires_at).getTime();

                    localStorage.setItem('accessToken', tokenKey);
                    localStorage.setItem('expirationTime', expirationTime);

                    // console.log('Token:', tokenKey);
                    // console.log('Expiration time:', new Date(expirationTime).toLocaleString());
                    alert('Successfully!');
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    alert('Bad login details!');
                }
            });
        }

        $('#login-form').submit(function(event) {
            event.preventDefault();

            if (!isTokenExpired()) {
                const tokenKeyFromStorage = localStorage.getItem('accessToken');
                const expirationTimeFromStorage = localStorage.getItem('expirationTime');

                // console.log('Token:', tokenKeyFromStorage);
                // console.log('Expiration time:', new Date(parseInt(expirationTimeFromStorage)).toLocaleString());

                alert('Token is still valid. Logging in...');
            } else {
                const email = $('#email').val();
                const password = $('#password').val();
                
                refreshToken(email, password);
            }
        });
    });
</script>


<!-- CSS -->
<link rel="stylesheet" href="/q/wp-content/themes/q-project/assets/css/client-login.css">

<!-- Footer -->
<?php 
get_footer();
?>