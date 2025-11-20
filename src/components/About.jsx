import { Target, Users, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () =>{

   const values = [
    {
      icon: Target,
      title: "Enfoque Personalizado",
      description: "Cada cliente es único. Adaptamos nuestras estrategias a tus necesidades específicas.",
    },
    {
      icon: Users,
      title: "Experiencia Comprobada",
      description: "Más de 15 años ayudando a empresas y líderes a alcanzar sus objetivos.",
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "Nos enfocamos en lograr resultados concretos y cuantificables para tu negocio.",
    },
    {
      icon: Award,
      title: "Excelencia Garantizada",
      description: "Comprometidos con los más altos estándares de calidad en cada proyecto.",
    },
  ];


     return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-chart2 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo de consultores y coaches profesionales dedicados a transformar 
            empresas y desarrollar líderes excepcionales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <Card className="p-6 sm:p-8 lg:p-10 shadow-medium">
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Con más de 15 años de experiencia en el sector empresarial, hemos ayudado a 
              cientos de organizaciones a superar sus desafíos más complejos y alcanzar 
              nuevos niveles de éxito.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Nuestra filosofía se basa en la creencia de que cada empresa tiene un potencial 
              único por descubrir. A través de metodologías probadas y un enfoque personalizado, 
              trabajamos codo a codo contigo para convertir tu visión en realidad.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-large transition-smooth group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-foreground to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

