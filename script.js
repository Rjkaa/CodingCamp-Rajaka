  // Greet user
  let userName = prompt("Masukkan nama Anda:");
  if(userName) {
    document.getElementById("username").innerText = userName;
  }

  // Handle Contact Form
  document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("userMessage").value;

    if(name && email && message) {
      document.getElementById("output").innerHTML = `
        <h3>Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `;
    } else {
      alert("Please fill all fields!");
    }
  });
