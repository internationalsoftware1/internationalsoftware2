import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

window.register = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Kayıt başarılı!');
        })
        .catch(error => {
            alert(error.message);
        });
}

window.login = function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Giriş Başarılı');
        })
        .catch(error => {
            alert(error.message);
        });
}

window.logout = function () {
    signOut(auth)
        .then(() => {
            alert('Çıkış yapıldı');
        })
        .catch(error => {
            alert(error.message);
        });
}
