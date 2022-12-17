document.getElementById('btn-submit').addEventListener('click', function () {

    const emailAddress = document.getElementById('email');
    const emailValue = emailAddress.value;
    const password = document.getElementById('password');
    const passwordValue = password.value;

    if (emailValue === 'imruz2001@gmail.com' && passwordValue === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert("your information do not match")
    }
})


