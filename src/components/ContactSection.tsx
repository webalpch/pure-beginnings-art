import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageCircle, Mail, Phone, Clock, ShieldCheck, CreditCard, CalendarX2, Star } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Encode form data for Netlify
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.",
        variant: "destructive",
      });
    }
  };

  const _openWhatsApp = () => {
    const message = formData.message
      ? `Bonjour, je suis ${formData.name}. ${formData.message}`
      : "Bonjour, je souhaite obtenir des informations sur vos tours au Cambodge";
    window.open(`https://wa.me/+85512929279?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-cambodia-red mb-4">
            Organiser votre voyage
          </p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              Parlons de votre<br />
              <span className="italic">projet de voyage</span>
            </h2>
            {/* WhatsApp — action principale, en évidence */}
            <a
              href="https://wa.me/+85512929279?text=Bonjour, je souhaite organiser un tour au Cambodge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20b858] text-white text-sm sm:text-base font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Écrire sur WhatsApp</span>
              <span className="hidden sm:inline font-light opacity-80 text-sm">· Réponse sous 1h</span>
            </a>
          </div>
          <div className="h-px w-full bg-border mt-8" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Formulaire — colonne principale */}
          <div className="lg:col-span-3">
            <p className="font-sans text-sm text-muted-foreground font-light mb-6">
              Préférez l'email ? Décrivez votre projet et nous vous répondons sous 24h avec une proposition personnalisée.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="font-sans bg-muted/40 border-border focus:border-cambodia-red placeholder:text-muted-foreground/60"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="font-sans bg-muted/40 border-border focus:border-cambodia-red placeholder:text-muted-foreground/60"
                  required
                />
              </div>

              <Textarea
                name="message"
                placeholder="Décrivez votre projet : destinations, durée, nombre de personnes, envies particulières..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="font-sans bg-muted/40 border-border focus:border-cambodia-red placeholder:text-muted-foreground/60 resize-none"
                required
              />

              <Button type="submit" className="font-sans w-full sm:w-auto px-8 py-3 h-auto bg-espresso hover:bg-espresso/90 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Envoyer ma demande
              </Button>
            </form>
          </div>

          {/* Colonne infos + garanties */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Garanties */}
            <div>
              <p className="font-sans text-xs font-medium tracking-[0.15rem] uppercase text-muted-foreground mb-4">Nos engagements</p>
              <div className="space-y-3">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: "Guides certifiés Ministère du Tourisme" },
                  { icon: <CreditCard className="w-4 h-4 text-cambodia-red" />, text: "Paiement sur place, à votre arrivée" },
                  { icon: <CalendarX2 className="w-4 h-4 text-royal-blue" />, text: "Annulation gratuite jusqu'à 48h avant" },
                  { icon: <Star className="w-4 h-4 text-amber-500" />, text: "5.0 / 5 · 71 avis TripAdvisor" },
                  { icon: <Clock className="w-4 h-4 text-muted-foreground" />, text: "Disponible 7j/7 · 8h–20h (heure locale)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-foreground font-sans">
                    {item.icon}
                    <span className="font-light">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="border-t border-border pt-6">
              <p className="font-sans text-xs font-medium tracking-[0.15rem] uppercase text-muted-foreground mb-4">Nous joindre</p>
              <div className="space-y-2">
                <a href="https://wa.me/+85512929279" target="_blank" rel="noopener noreferrer"
                  className="font-sans flex items-center gap-2 text-sm text-foreground hover:text-cambodia-red transition-colors">
                  <MessageCircle className="w-4 h-4" /> +855 12 929 279 (WhatsApp)
                </a>
                <a href="tel:+85512929279"
                  className="font-sans flex items-center gap-2 text-sm text-foreground hover:text-cambodia-red transition-colors">
                  <Phone className="w-4 h-4" /> +855 12 929 279
                </a>
                <a href="mailto:info@saveursducambodge.com"
                  className="font-sans flex items-center gap-2 text-sm text-foreground hover:text-cambodia-red transition-colors">
                  <Mail className="w-4 h-4" /> info@saveursducambodge.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
