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
    <section id="hero" className=" relative z-5 min-h-screen overflow-hidden sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="div-hero-image relative">
          <img 
          src="/foto-Hero.png" 
          alt="Hero"
          className="hero-img"
          />

       <div className="overlay"></div>

         {/*  Hero Content */}
      <div className="max-w-3xl content px-5  lg:px-8 z-10">
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white mb-4">
              Lorem ipsum
            </h1> */}
            <div className='title-container'>
              <p className='text-lg sm:text-2xl lg:text-4xl tracking-wider text-white/90 max-w-2xl font-bold'>
                Consultoría estratégica 
                 y sistémica en factores humanos
              </p>
              
            </div>
            <div className="button-hero">
                <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("lista-servicios");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                id="border-2 border-white text- hover:bg-white hover:text-primary transition-smooth text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
              >
                Nuestros Servicios
              </Button>
              {/* <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent-light text-accent-foreground shadow-large hover:shadow-xl transition-smooth group text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
              >
                Agenda tu Consulta Gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button> */}
            
            </div>
          </div>
        </div>


      {/* Decorative Elements */}
    </section>
  );
};

export default Hero;