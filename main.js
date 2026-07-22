function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // Empty Validation
    if (name === "" || email === "" || phone === "" || password === "") {
        alert("All fields are required!");
        return false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email!");
        return false;
    }

    // Phone Validation (11 digits)
    let phonePattern = /^[0-9]{11}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain 11 digits!");
        return false;
    }

    // Password Validation (Minimum 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}