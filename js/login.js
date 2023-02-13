// Checking Validation(not right)
document.getElementById('btn-submit').addEventListener('click', function () {
    // get email
    const emailInput = document.getElementById('email-address');
    const email = emailInput.value;
    // get password
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    // Do not validate user on client site
    // ! !! This is not the right way to validate user 
    if (email === 'notRight@validation.com' && password === 'notsecure') {
        window.location.href = 'bank.html';
    }
    else {
        alert('User address not valid !');
    }
})

