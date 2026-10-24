// Get the registration form
const studentForm = document.getElementById("studentForm");

// Get the message paragraph
const message = document.getElementById("message");

// Get the profile photo input
const photoInput = document.getElementById("profile_photo");

// Get the photo preview image
const photoPreview = document.getElementById("photoPreview");

console.log("Student Registration JavaScript loaded!");

// Profile photo preview
if (photoInput && photoPreview) {
    photoInput.addEventListener("change", function () {
        const file = photoInput.files[0];

        if (!file) {
            photoPreview.hidden = true;
            photoPreview.removeAttribute("src");
            return;
        }

        if (!file.type.startsWith("image/")) {
            message.textContent = "Please select an image file.";
            message.className = "error";
            photoInput.value = "";
            photoPreview.hidden = true;
            return;
        }

        const imageURL = URL.createObjectURL(file);

        photoPreview.src = imageURL;
        photoPreview.hidden = false;

        message.textContent = "";
        message.className = "";
    });
}

// Form validation
if (studentForm) {
    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document
            .getElementById("full_name").value.trim();

        const phone = document
            .getElementById("phone").value.trim();

        const dob = document
            .getElementById("dob").value.trim();

        const age = document
            .getElementById("dob").value;)

        const today = new Date().toISOString().split("T")[0];

        if (!fullName) {
            showMessage("Please enter your full name.", "error");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            showMessage("Enter a valid 10-digit phone number.", "error");
            return;
        }

        if (dob && dob > today) {
            showMessage("Date of birth cannot be in the future.", "error");
            return;
        }

        showMessage(
            "Form validation successful! Welcome, " + fullName + ".",
            "success"
        );

        console.log("Student form validated.");

        // This is a frontend demo.
        // Student data is not saved to the database yet.
    });
}

// Display a message
function showMessage(text, type) {
    if (!message) return;

    message.textContent = text;
    message.className = type;
}

// Reset form messages and photo preview
if (studentForm) {
    studentForm.addEventListener("reset", function () {
        if (message) {
            message.textContent = "";
            message.className = "";
        }

        if (photoPreview) {
            photoPreview.hidden = true;
            photoPreview.removeAttribute("src");
        }
    });
}