let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// JavaScript Code for Sign-In Validation

// Select the sign-in button
const signUpButton = document.querySelector('.signup__button');

// Event listener for the sign-in button
signUpButton.addEventListener('click', () => {
    // Prompt user for their details
    const name = prompt('Enter your name:');
    const email = prompt('Enter your email address:');
    const password = prompt('Enter your password:');
    const confirmPassword = prompt('Confirm your password:');

    // Validate user input
    if (!name) {
        alert('Name is required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!password || password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If all validations pass
    alert('Sign-In Successful!');
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

