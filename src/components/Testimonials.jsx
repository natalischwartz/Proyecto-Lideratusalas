import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import logoJust from "@/assets/logo_just.png";
import logoMacro from "@/assets/logo_macro.png";
import logoUCA from "@/assets/logo_UCA.jpg";
import logoPoen from "@/assets/logo_poen.png";
import logoNanotek from "@/assets/nanoteksa_logo.jpg";
import logoLaAnonima from "@/assets/logo_anonima.jpg"
import logoOmint from "@/assets/logo_omint.jpg";
import logoUPE from "@/assets/logo_UPE.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Just",
      image: logoJust,
    },
    {
      name: "Banco Macro",
      image: logoMacro,
    },
    {
      name: "Universidad Católica Argentina",
      image: logoUCA,
    },
     {
      name: "Supermercados La Anónima",
      image: logoLaAnonima,
    },
     {
      name: "Grupo Omint",
      image: logoOmint,
    },
     {
      name: "Laboratorio Poen",
      image: logoPoen,
    },
     {
      name: "Nanotek S.A.",
      image: logoNanotek,
    },
    {
      name: "Universidad Provincial de Ezeiza",
      image: logoUPE,
    },

  ];

   return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Nuestros clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-chart2 mx-auto mb-6"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 sm:p-8 hover:shadow-large transition-smooth group relative h-full">
                  <div className="relative z-10">
                    <div className="flex items-center flex-col
                    gap-4 justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );

 
};

export default Testimonials;