import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Animation on scroll
import AOS from 'aos';

// Inicializar AOS
AOS.init({
  // Opciones globales, ej:
  duration: 1000, // Duración de la animación en ms
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
