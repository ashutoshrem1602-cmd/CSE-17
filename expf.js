document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
    document.getElementById("registerForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
});
