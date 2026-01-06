document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault(); 
        e.stopPropagation();

        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function () {
        dropdown.classList.remove('active');
    });

    dropdownMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});


// Better selectors using IDs
const signInItem = document.getElementById('signin-item');
const signUpItem = document.getElementById('signup-item');
const profileItem = document.getElementById('profile-item');

function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        signInItem.style.display = 'none';
        signUpItem.style.display = 'none';
        profileItem.style.display = 'block';
    } else {
        signInItem.style.display = 'block';
        signUpItem.style.display = 'block';
        profileItem.style.display = 'none';
    }
}