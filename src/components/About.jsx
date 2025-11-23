import photo1 from "../assets/Ivana-foto.PNG"
import photo2 from "../assets/Paula-foto.PNG"
import photo3 from "../assets/Valeria-foto.PNG"
import { Card } from "@/components/ui/card";

const About = () =>{

   const values = [
    {
      image: photo1,
      title: "Ivana Wowczuk",
      description: "Lic. en Relaciones Laborales | Coach ontológico, vocacional y organizacional | Facilitadora en FF.HH y Gestión de la seguridad en aviación | Master Trainer en TeamStepps | Docente de la Universidad Provincial de Ezeiza | Docente de Programa para Empresas UCA.",
    },
    {
      image: photo2,
      title: "Paula Rodriguez Carletti",
      description: "Lic. en Turismo | Facilitadora en FF.HH, CRM, TEM Y SMS | Coach ontológico Profesional y Liderazgo | Tripulante de Cabina de Pasajeros | Jefa de Cabina del área internacional | Asistencia social a grupos vulnerables y de bajos recursos (Asociación Civil Pequeños Pasos)",
    },
    {
      image: photo3,
      title: "Valeria V. Pereyra",
      description: "Lic. en Psicología | Consultora psicológica | Especialización en Desarrollo Personal | Facilitadora en FF.HH. | Comisario de a bordo - Area internacional | Consultoría de FF.HH y Gestión de la seguridad.",
    },
  ];


     return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-subtle " data-aos="fade-right">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Quiénes somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-chart2 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-2">Expertas en Potenciar el Factor Humano</p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-7 md:leading-normal lg:leading-relaxed">
           Somos un equipo de profesionales, multidisciplinario, formadas académicamente en el ámbito de la <strong>Psicología, el Turismo, las Relaciones Laborales, el Counseling y el Coaching Ontológico Organizacional.</strong>  Además nos desempeñamos actualmente como Tripulantes de Cabina de Pasajeros con más de 20 años en el área y estamos vinculadas al área de Capacitación en <strong>Factores Humanos y Soft Skills (Habilidades blandas).</strong> 
          </p>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-large transition-smooth group"
            >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full border border-gray-400 flex items-center justify-center group-hover:scale-110 transition-smooth overflow-hidden">
              <img 
                  src={value.image} 
                  alt={value.title} 
                  className="object-cover w-full h-full" 
              />
            </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
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

