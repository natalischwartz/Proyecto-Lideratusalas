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

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

     try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: formData.name,
        email: formData.email,
        telefono: `${countryCode} ${formData.phone}`,
        mensaje: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      toast({
        title: "Error",
        description: data.error || "Error al enviar el mensaje",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Error de conexión con el servidor",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }

  
};




  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
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
            <form  className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
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
                  value={formData.email}
                  onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu negocio y cómo podemos ayudarte..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-foreground to-primary hover:shadow-large transition-smooth text-base sm:text-lg py-6"
              >
                {isSubmitting ?(
                  "Enviando..."
                ) : (
                  <>
                  Enviar Mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );

}

export default Contact;