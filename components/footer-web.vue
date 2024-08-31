<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h4>KuboMovies</h4>
          <p>&copy; 2024 KuboMovies. Todos los derechos reservados.</p>
          <strong>Andrea Camargo Ruiz</strong><br>
          <strong>Desarrolladora Full Stack Junior</strong>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>
  
        <div class="footer-section links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Populares</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
          </ul>
        </div>
  
        <div class="footer-section contact">
          <h4>Contacto</h4>
          <p>Email: <a href="mailto:contacto@kubomovies.com">contactanos@kubomovies.com</a></p>
          <p>Teléfono: <a href="tel:+123456789">+57 000 000 0000</a></p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--p-toolbar-background);
    color: #9e9e9e;
    text-align: center;
    font-family: sans-serif;
    border: 1px solid var(--p-toolbar-border-color);
    border-radius: 11px;

  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    margin: 1rem;
  }
  
  .footer-section h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .footer-section p {
    margin: 0.5rem 0;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 0.5rem 0;
  }
  
  .footer-section ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .social-icons {
    margin-top: 1rem;
  }
  
  .social-icons a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  .social-icons a:hover {
    color: #ddd;
  }
  </style>
  