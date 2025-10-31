import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MessageCircle, Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais via WhatsApp.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const openWhatsApp = () => {
    const message = formData.message
      ? `Bonjour, je suis ${formData.name}. ${formData.message}`
      : "Bonjour, je souhaite obtenir des informations sur vos tours au Cambodge";
    window.open(`https://wa.me/+85511926262?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10 backdrop-blur-sm">
            Contactez-nous
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Prêt pour l'<span className="text-yellow-400">aventure</span> ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Notre équipe est disponible 7j/7 pour vous aider à planifier votre voyage au Cambodge. Contactez-nous via
            WhatsApp pour une réponse rapide !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Envoyez-nous un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Décrivez votre projet de voyage (destinations souhaitées, durée, nombre de personnes, budget approximatif...)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400 resize-none"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="hero" className="flex-1 bg-white text-royal-blue hover:bg-white/90">
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>

                <Button type="button" variant="whatsapp" onClick={openWhatsApp} className="flex-1">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Direct
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact rapide</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-white/80">+855 12 345 6789</div>
                    <div className="text-yellow-400 text-sm">Réponse en 24h</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Téléphone</div>
                    <div className="text-white/80">+855 12 929 279</div>
                    <div className="text-white/60 text-sm">Lun-Dim 8h-20h</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-dark-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-white/80">info@saveursducambodge.com</div>
                    <div className="text-white/60 text-sm">Réponse sous 24h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
