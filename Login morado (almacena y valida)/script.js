document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Verificar si el usuario existe
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);
  
    const message = document.getElementById("message");
  
    if (user && user.password === password) {
      message.textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
      message.style.color = "green";
    } else if (user) {
      message.textContent = "Contraseña incorrecta. Intenta nuevamente.";
      message.style.color = "red";
    } else {
      message.textContent = "No existe una cuenta con este correo.";
      message.style.color = "red";
    }
  });
  
  document.getElementById("registerBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const message = document.getElementById("message");
  
    if (!email || !password) {
      message.textContent = "Por favor, completa ambos campos para registrarte.";
      message.style.color = "red";
      return;
    }
  
    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Validar si el usuario ya existe
    if (users.find((user) => user.email === email)) {
      message.textContent = "El correo ya está registrado. Intenta iniciar sesión.";
      message.style.color = "orange";
      return;
    }
  
    // Registrar nuevo usuario
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    message.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
    message.style.color = "green";
  
    // Limpiar campos
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
  