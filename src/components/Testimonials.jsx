import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import logoJust from "@/assets/logo_just.png";
import logoMacro from "@/assets/logo_macro.png";
import logoUCA from "@/assets/logo_UCA.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "lorem ipsum",
      role: "CEO, Just",
      image: logoJust,
      text: "El coaching ejecutivo transformó completamente mi enfoque de liderazgo. En solo 6 meses, logramos aumentar la productividad de nuestro equipo en un 40% y mejorar significativamente el clima laboral.",
    },
    {
      name: "lorem ipsum",
      role: "Director General, Banco Macro",
      image: logoMacro,
      text: "La consultoría estratégica que recibimos fue exactamente lo que necesitábamos. Su equipo nos ayudó a identificar oportunidades que no veíamos y a implementar cambios que generaron resultados inmediatos.",
    },
    {
      name: "lorem ipsum",
      role: "Fundadora, Universidad Católica Argentina",
      image: logoUCA,
      text: "Como emprendedora, el mentoring personalizado me dio las herramientas y la confianza para escalar mi negocio. Hoy tenemos tres veces más clientes y un equipo increíble gracias a su guía.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-chart2 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-large transition-smooth group relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-smooth" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-contain mr-4 ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-base sm:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a más de <span className="font-bold text-primary">200+ empresas</span> que han 
            transformado su forma de hacer negocios con nuestra ayuda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;