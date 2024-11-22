function displayImage(event) {
  const files = event.target.files;
  const container = document.getElementById("imageContainer");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = `Uploaded Image ${i + 1}`;
      img.onclick = function () {
        previewImage(img);
      };
      container.appendChild(img);
    };

    reader.readAsDataURL(file);
  }
}

function previewImage(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = imgElement.src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function saveCollection() {}

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username to search for
    const searchUsername = document
      .getElementById("searchUsername")
      .value.trim()
      .toLowerCase();

    // Example list of existing users (can be replaced with a backend call)
    const existingUsers = ["billy", "john", "sarah", "emily"];

    // Check if the user exists in the list
    if (existingUsers.includes(searchUsername)) {
      // Redirect to the user's page if found
      window.location.href = `./${searchUsername}`;
    } else {
      // If user not found, show an alert (or handle it differently)
      alert("User not found. Please try another username.");
    }
  });

//User Registration
async function registerUser(username, email, password) {
  const response = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    alert("Registration successful!");
  } else {
    alert(data.message || "Registration failed.");
  }
}

//User Login
async function loginUser(email, password) {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.access_token);
    alert("Login successful!");
  } else {
    alert(data.message || "Login failed.");
  }
}
