import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
              Lidera tus alas
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Transformando negocios y desarrollando líderes excepcionales desde 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Consultoría Estratégica</li>
              <li>Coaching Ejecutivo</li>
              <li>Desarrollo Organizacional</li>
              <li>Mentoring Profesional</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Buenos Aires, Argentina</li>
              <li>lideratusalas@gmail.com</li>
              <li>+54 9 11 4937 9204</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Lidera tus alas. Todos los derechos reservados.
            </p>
            <span className="text-sm text-primary-foreground/30">Developed by NataliSch</span>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://www.instagram.com/lideratusalas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="linkedin.com/in/lidera-tus-alas-43a36b211"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;