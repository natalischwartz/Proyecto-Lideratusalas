export default function EjesAbordaje() {
  const ejes = [
    {
      title: "Consultoría Sistémica y Cambio Organizacional",
      desc: "Acompañar a instituciones y equipos a evolucionar.",
    },
    {
      title: "Desarrollo Personal y Coaching Transformacional",
      desc: "Enfoque en la persona como sistema Ontológico. ",
    },
    {
      title: "Liderazgo Consciente y Trabajo en Equipo",
      desc: "Desarrollar competencias para liderar equipos, aulas o proyectos.",
    },
    {
      title: "Factores Humanos y Competencias Profesionales",
      desc: "Aplicado a educación, salud, empresas o aviación.",
    },
    {
      title: "Aprendizaje Inmersivo y Metodologías Vivenciales",
      desc: "Transformar la experiencia del aprendizaje.",
    },
    {
      title: "Bienestar Integral y Salud Mental Organizacional",
      desc: "Un eje clave en el mundo actual. Estrés, burnout y gestión emocional.",
    },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-5 container">
      <div className="w-full max-w-7xl mx-auto px-6 py-5">
        {/* Título centrado */}
        <h2 className="text-center text-3xl font-semibold text-foreground mb-12">
          Ejes de abordaje
        </h2>
      </div>

      {/* Contenedor principal */}
      <div className=" ejes-animados flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
        {/* Timeline a la izquierda */}
        <div className="relative md:w-1/2" data-aos="fade-right">
          {/* Línea vertical con gradiente */}
          <div className="absolute left-2 top-0 w-[3px] h-full bg-gradient-to-r from-foreground to-chart2"></div>

          {/* Items */}
          <div className="flex flex-col gap-10 ml-10">
            {/* Cada eje */}
            {ejes.map((item, index) => (
              <div key={index} className="relative" data-aos="fade-right"
                data-aos-delay={index * 150}>
                {/* Burbuja */}
                <span className="absolute -left-10 top-1 w-5 h-5 bg-[#1E2A78] rounded-full ring-4 ring-white shadow-md"></span>

                <h3 className="text-lg font-semibold text-[#1C2434]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen a la derecha */}
        <img
          src="/foto-ejes.PNG"
          alt="Equipo Lidera tus Alas"
          className="w-full md:w-[40%] rounded-lg shadow-lg object-cover"
          data-aos="fade-up"
        />
      </div>
    </section>
  );
}
