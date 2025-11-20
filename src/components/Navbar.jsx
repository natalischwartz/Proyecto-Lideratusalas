import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import logoImage from "@/assets/logo-lidera.png";

const Navbar = () => {
  // Estado para saber si el usuario ha hecho scroll (para cambiar el estilo de la barra)
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar la apertura/cierre del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para gestionar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Establece isScrolled a true si el desplazamiento vertical es mayor a 20px
      setIsScrolled(window.scrollY > 20);
    };

    // Añade el event listener al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Función de limpieza: elimina el event listener al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  // Función para hacer scroll suave a la sección deseada
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Cierra el menú móvil después de navegar
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo con Imagen */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="Logo de Lidera tus alas"
              className="h-10 sm:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Quiénes Somos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Servicios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Testimonios
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-gradient-to-r from-secondary to-primary hover:shadow-medium transition-smooth"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("hero")}
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
            >
              Quiénes Somos
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("services")}
            >
              Servicios
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonios
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-secondary to-primary"
              onClick={() => scrollToSection("contact")}
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
