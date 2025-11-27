import { Lightbulb, Cog, Target, PlaneIcon } from "lucide-react";
import EjesAbordaje from "./EjesDeAbordaje";
import {Card} from "@/components/ui/card";

 const services = [
    // {
    //   icon: Lightbulb,
    //   title: "Qué Ofrecemos",
    //   color: "from-accent to-accent-light",
    //   items: [
    //     "Consultoría de RR.HH y empresarial",
    //     "Coaching para la vida",
    //     "Desarrollo de liderazgo",
    //     "Mentoring profesional personalizado",
    //     "Preparación de entrevistas",
    //     "Gestión del cambio organizacional",
    //     "Formación de directivos"
    //   ],
    // },
    {
      icon: PlaneIcon,
      title: "Cómo Trabajamos en Lidera Tus Alas",
      color: "from-primary to-primary-light",
      items: [
        "Diagnóstico Inicial",
        "Diseño a Medida",
        "Metodologías Prácticas",
        "Gestión y Seguimiento de los Procesos",
        "Integración en el Día a Día",
        "Evaluación y Mejora Continua",
      ],
    },
    {
      icon: Target,
      title: "Para Qué Sirve",
      color: "from-secondary to-secondary-light",
      items: [
        "Mejorar el rendimiento empresarial",
        "Desarrollar habilidades de liderazgo",
        "Optimizar procesos y operaciones",
        "Aumentar la productividad del equipo",
        "Alcanzar objetivos estratégicos",
        "Impulsar el crecimiento sostenible",
      ],
    },
  ];

const Services = () => {


    return(
         <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-chart2 mx-auto mb-6"></div>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
                  <Card className="p-6 sm:p-8 lg:p-10 shadow-medium">
                    <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
                      Diseñamos a medida espacios de formación, capacitación y acompañamiento en procesos individuales
                      y grupales, con distintos ejes de abordaje (individual, social y empresarial) para organizaciones,
                      empresas o líderes en progreso.
                      Usamos plataformas virtuales para nuestros encuentros, dinámicas vivenciales y propuestas
                      innovadoras.
                    </p>
                  </Card>
                </div>
        <EjesAbordaje/>
        </div>
        {/* Services */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" id="lista-servicios">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-large transition-smooth group"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-medium`}>
                <service.icon className="w-8 h-8 text-chart2" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>


        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-large transition-smooth group"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-medium`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] text-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div> */}

        {/* <div className="mt-12 sm:mt-16 text-center">
          <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Cada transformación comienza con una conversación. Agenda tu consulta gratuita y 
              descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
          </Card>
        </div> */}
      </div>
    </section>
    )
}


export default Services;