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

// Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const rating = document.querySelector('input[name="rating"]:checked');
    const feedbackText = this.querySelector('.feedback-input').value.trim();
    if (!rating) {
        alert('Please select a star rating!');
        return;
    }
    // In real app: send to server via fetch/AJAX
    console.log('Feedback Submitted:', {
        rating: rating.value,
        message: feedbackText
    });
    // Show success message
    successMessage.classList.add('show');
    // Reset form
    this.reset();
    document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
    document.querySelectorAll('.rating-stars label').forEach(l => {
        l.style.color = 'rgba(0, 255, 255, 0.2)';
        l.style.textShadow = 'none';
        l.style.transform = 'scale(1)';
    });
    // Hide success message after 4 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);
});