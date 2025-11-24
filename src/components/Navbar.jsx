import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logoImage from "@/assets/logo-lidera.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook para detectar el scroll de la ventana
  useEffect(() => {
    const handleScroll = () => {
      // Establece isScrolled en true si el scroll vertical es mayor a 20 píxeles
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Función de limpieza para remover el listener cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // Función para el scroll suave a la sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Cierra el menú móvil después de hacer clic en un enlace
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoImage} alt="Logo de Lidera tus alas" className="h-16 sm:h-18 w-auto" />
          </div>

          {/* Lidera tus Alas */}
          <div className="logo-medio">
             <h1 className="text-xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Lidera tus Alas
              </h1>
          </div>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Los botones usan la función scrollToSection directamente */}
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
              Quienes somos
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
              Nuestros clientes 
            </Button>
            {/* Botón de Contacto destacado */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-gradient-to-r from-foreground to-primary hover:shadow-medium transition-smooth"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button (Sheet de Shadcn/ui) */}
          <div className="md:hidden">
            {/* Controla la apertura/cierre del Sheet con el estado isMobileMenuOpen */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle menu"
                >
                  <Menu /> {/* Icono de hamburguesa */}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    Lidera tus Alas
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-2">
                  {/* Links del menú móvil - Todos llaman a scrollToSection y cierran el menú */}
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
                    Quienes somos
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
                    Nuestros clientes
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-foreground to-primary mt-4"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contacto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;