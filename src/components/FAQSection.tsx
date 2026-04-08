import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Faut-il un visa pour visiter le Cambodge ?",
    answer:
      "Oui, la plupart des voyageurs ont besoin d'un visa touristique pour entrer au Cambodge. Il peut être obtenu en ligne (e-visa) ou à l'arrivée à l'aéroport. Pensez à vérifier la validité de votre passeport (au moins 6 mois après la date de retour).",
  },
  {
    question: "Quelle est la meilleure période pour visiter le Cambodge ?",
    answer:
      "La meilleure période pour voyager au Cambodge s'étend de novembre à mars, pendant la saison sèche. Le climat est plus doux et idéal pour visiter les temples d'Angkor, Phnom Penh, Battambang ou le lac Tonlé Sap.",
  },
  {
    question: "Est-il possible d'avoir un guide francophone ?",
    answer:
      "Oui, tous nos circuits sont accompagnés de guides francophones officiels, certifiés par le ministère du Tourisme du Cambodge. Ils connaissent parfaitement la culture, l'histoire et les traditions locales.",
  },
  {
    question: "Quels types de circuits proposez-vous ?",
    answer:
      "Nous proposons des circuits privés et personnalisés, allant d'une journée à plusieurs semaines : visite des temples d'Angkor à Siem Reap, découverte du lac Tonlé Sap et des villages flottants, circuits culturels à Phnom Penh et Battambang, séjours combinés avec Kep, Kampot ou Kratie, voyages sur mesure à la demande.",
  },
  {
    question: "Le transport est-il inclus dans les circuits ?",
    answer:
      "Oui, le transport est inclus : Tuk Tuk, voiture privée, bateau local ou minibus selon le programme choisi. Tous nos véhicules sont confortables et climatisés.",
  },
  {
    question: "Les repas sont-ils inclus ?",
    answer:
      "Certains repas sont inclus selon le type de circuit. En général, le petit-déjeuner est prévu avec l'hébergement, et les déjeuners sont pris dans des restaurants locaux sélectionnés. Les dîners restent libres pour découvrir la gastronomie cambodgienne.",
  },
  {
    question: "Que comprend le prix du voyage ?",
    answer:
      "Le tarif inclut généralement : le guide francophone officiel, les transports mentionnés, les billets d'entrée pour les sites touristiques et de l'eau fraîche pendant les excursions. Les repas, boissons, pourboires et assurances ne sont pas inclus sauf mention contraire.",
  },
  {
    question: "Est-il possible d'adapter le programme ?",
    answer:
      "Oui, nos itinéraires sont entièrement personnalisables selon vos envies, votre temps de séjour et votre budget. Vous pouvez choisir la durée, les activités, le type d'hôtel et le rythme des visites.",
  },
  {
    question: "Proposez-vous des circuits familiaux ou en groupe ?",
    answer:
      "Absolument ! Nous organisons des voyages pour couples, familles, groupes d'amis ou circuits sur mesure avec activités adaptées à chacun.",
  },
  {
    question: "Comment réserver un circuit ?",
    answer:
      "Vous pouvez nous contacter directement via le formulaire du site, par WhatsApp au +855 12 929 279 ou par e-mail. Après avoir choisi votre itinéraire, nous vous enverrons une proposition personnalisée et un devis détaillé.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="faq"
      className={`py-16 sm:py-20 md:py-28 bg-white reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-cambodia-red mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
            Préparez votre<br />
            <span className="italic">voyage sereinement</span>
          </h2>
          <div className="h-px w-full bg-border mt-8" />
        </div>

        {/* FAQ list — ligne fine uniquement */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="font-display text-left text-lg sm:text-xl md:text-2xl font-medium text-foreground hover:no-underline hover:text-cambodia-red transition-colors py-6 sm:py-7 [&>svg]:text-cambodia-red/50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed pb-6 sm:pb-7 font-light">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQSection;
