import React from 'react'; 
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const Hero = () => {
  // Función para hacer scroll suave a la sección de contacto
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen z-5 flex items-end overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 hero-image">
      </div>

      {/*  Hero Content */}
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Playfair_Display'] text-white mb-6 animate-fade-in">
            Transforma tu Negocio con
            <span className="block text-accent mt-2">Estrategias Probadas</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 max-w-2xl">
            Consultoría y coaching profesional para líderes y empresarios que buscan 
            alcanzar resultados extraordinarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-large hover:shadow-xl transition-smooth group text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
            >
              Agenda tu Consulta Gratuita
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white text- hover:bg-white hover:text-primary transition-smooth text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
            >
              Conoce Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent z-10"></div>
    </section>
  );
};

export default Hero;