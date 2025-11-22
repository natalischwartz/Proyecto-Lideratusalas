import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";

const Contact = () => {

     const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+54");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countryCodes = [
    { code: "+34", iso: "ES", country: "España" },
  { code: "+1",  iso: "US", country: "Estados Unidos" },
  { code: "+52", iso: "MX", country: "México" },
  { code: "+54", iso: "AR", country: "Argentina" },
  { code: "+56", iso: "CL", country: "Chile" },
  { code: "+57", iso: "CO", country: "Colombia" },
  { code: "+51", iso: "PE", country: "Perú" },
  { code: "+58", iso: "VE", country: "Venezuela" },
  { code: "+593", iso: "EC", country: "Ecuador" },
  { code: "+598", iso: "UY", country: "Uruguay" },
  ];

 return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-foreground mb-4">
            Comenzá tu transformación hoy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart2 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda tu consulta gratuita y descubri cómo podemos ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8 shadow-medium">
            <form  className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  
                  
                  placeholder="Tu nombre"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  
              
                  placeholder="tu@email.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                 <div className="flex gap-2 mt-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue>
                            <span className="flex items-center gap-2">
                            <ReactCountryFlag 
                               countryCode={countryCodes.find(c => c.code === countryCode)?.iso}
                                svg
                                style={{ width: "1.2em", height: "1.2em" }}
                             />
                                <span>{countryCode}</span>
                            </span>
                        </SelectValue>
                    </SelectTrigger>

                    <SelectContent>
                    {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                                <span className="flex items-center gap-2">
                                <ReactCountryFlag 
                                countryCode={item.iso}
                                svg
                                style={{ width: "1.2em", height: "1.2em" }}
                                />
                                    <span>{item.code}</span>
                                </span>
                            </SelectItem>
                            ))}
                    </SelectContent>
                </Select>

                 
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"

                    placeholder="11 1234 5678"
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
          
              
                  placeholder="Contanos sobre tu negocio y cómo podemos ayudarte..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-foreground to-primary hover:shadow-large transition-smooth text-base sm:text-lg py-6"
              >
                    Enviar Mensaje
                    <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          {/* <div className="space-y-6">
            <Card className="p-6 sm:p-8 hover:shadow-medium transition-smooth">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Email</h3>
                  <a
                    href="mailto:contacto@consultoriapro.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    lideratusalas@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-medium transition-smooth">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Teléfono</h3>
                  <a
                    href="tel:+34900000000"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                   +54 9 11 4937 9204
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-medium transition-smooth">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Buenos Aires, Argentina
                    <br />
                    Atención online y presencial
                  </p>
                </div>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );

}

export default Contact;