import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Tour {
  id: string;
  title: string;
  image: string;
  duration: string;
  price: string;
  participants: string;
  description: string;
  highlights: string[];
  includes: string[];
}

export const tours: Tour[] = [
  {
    id: "option-a-1-jour",
    title: "Option A: pour une journée à Siem Reap",
    image: "/lovable-uploads/angkor-wat-approach.jpg",
    duration: "1 jour",
    price: "90€ (1-3 pers) / 120€ (4-8 pers)",
    participants: "1-8 personnes",
    description: "Le matin à 8h nous visitons le temple d'Angkor à l'entrée Est qui est hors de masse de touristes. Puis nous sortons par l'entrée principale. Ensuite nous allons visiter la grande cité Angkor Thom qui comprend le temple Bayon, le temple Baphoun, la terrasse des éléphants et la terrasse du roi lépreux. L'après-midi nous allons visiter le temple Taphrom qui a beaucoup de racines des arbres. Fin de nos services.",
    highlights: [
      "Temple d'Angkor Wat (entrée Est, hors masse touristique)",
      "Grande cité Angkor Thom complète",
      "Temple Bayon avec ses visages sculptés",
      "Temple Baphoun restauré",
      "Terrasse des éléphants",
      "Terrasse du roi lépreux",
      "Temple Ta Prohm envahi par les racines"
    ],
    includes: [
      "Guide francophone officiel certifié",
      "Transport en Tuk Tuk",
      "Eau fraîche",
      "Supplément lever de soleil: +25€"
    ]
  },
  {
    id: "option-b-2-jours",
    title: "Option B : Circuit 2 jours à Siem Reap",
    image: "/lovable-uploads/ta-prohm-tree-ruins.jpg",
    duration: "2 jours",
    price: "Dépend des itinéraires choisis",
    participants: "3-5 personnes",
    description: `Itinéraire 1 :

Jour 1 : Temples de Ta Prohm, Takeo (temple-montagne inachevé) et Angkor Thom. Après-midi : visite du grand temple Angkor Wat.

Jour 2 : Marché local et excursion en bateau vers le village flottant de Kampong Pluk sur le lac Tonlé Sap, le plus grand lac d'Asie du Sud-Est.

75€/personne (base 3 pers.) | 65€/personne (base 5 pers.)

Itinéraire 2 :

Jour 1 : Ta Prohm, Takeo, Tanei (petit temple isolé dans la jungle), Angkor Thom. Après-midi : Angkor Wat.

Jour 2 : Grand circuit : Preah Khan (vaste complexe monastique), Neak Pean (petite île circulaire avec bassin sacré), Tasom, Mebon Oriental (temple au milieu d'un ancien réservoir). Découverte du village traditionnel de Preah Dak. Après-midi : temples de Prè Rup (temple-montagne en briques) et Kravan (célèbre pour ses bas-reliefs en briques).

60€/personne (base 3 pers.) | 45€/personne (base 5 pers.)

Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk, eau fraîche (+ bateau pour l'itinéraire 1).
Non inclus : Billets d'entrée d'Angkor (62€/pers./jour), repas, pourboires.`,
    highlights: [
      "2 itinéraires différents au choix",
      "Temples incontournables : Ta Prohm, Takeo, Angkor Wat, Angkor Thom",
      "Itinéraire 1 : Village flottant Kampong Pluk + lac Tonlé Sap",
      "Itinéraire 2 : Grand circuit + village traditionnel Preah Dak",
      "Prix flexibles selon le nombre de participants",
      "Supplément lever du soleil : +25€"
    ],
    includes: [
      "Guide francophone officiel",
      "Tuk Tuk",
      "Eau fraîche",
      "Bateau pour l'itinéraire 1",
      "Non inclus : Billets d'entrée d'Angkor (62€/pers./jour), repas, pourboires"
    ]
  },
  {
    id: "option-c-2-jours",
    title: "Option C : Siem Reap - 2 Jours Circuit Classique",
    image: "/lovable-uploads/9d959f27-0e40-4801-a4f1-8bf27246eeaf.png",
    duration: "2 jours",
    price: "180€ pour 2 personnes",
    participants: "2 personnes",
    description: `Jour 1 : Angkor Wat, Ta Prohm et Angkor Thom (Bayon, Baphuon, Terrasses).

Jour 2 : Grand circuit : Preah Khan, Neak Pean, Tasom, Mebon Oriental, Prè Rup.

180€ (2 pers.) | Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, repas, pourboires.`,
    highlights: [
      "Temple Angkor Wat majestueux",
      "Temple Ta Prohm mystérieux",
      "Angkor Thom et ses merveilles",
      "Grand circuit: Preah Khan, Neak Poan",
      "Temples Tasom et Mebon Oriental",
      "Temple Prè Rup au coucher du soleil"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk", "Eau fraîche", "Supplément lever de soleil: +25€"]
  },
  {
    id: "option-d-3-jours",
    title: "Option D : Circuit 3 jours à Siem Reap",
    image: "/lovable-uploads/b51c812d-5a61-4266-95cb-a4d9f1c78a09.png",
    duration: "3 jours",
    price: "330€ (1-4 personnes)",
    participants: "1-4 personnes",
    description: `Option D : Circuit 3 jours à Siem Reap

Jour 1 : Grand circuit (Preah Khan, Neak Poan, Tasom, Mebon Oriental), village de Preah Dak, temples Prè Rup et Kravan.

Jour 2 : Marché local, village flottant de Kampong Pluk et lac Tonlé Sap. Après-midi : temple montagne Bakong, premier temple de style angkorien.

Jour 3 : Angkor Wat, Ta Prohm et Angkor Thom (Bayon, Baphuon, Phimeanakas, Terrasses).

330€ (1-4 pers.) | Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk (J1 & J3), voiture (J2), bateau et billet du Tonlé Sap, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, repas, pourboires.`,
    highlights: [
      "Grand circuit des temples",
      "Village authentique Preah Dak",
      "Marché local et village de pêcheurs",
      "Lac Tonlé Sap, plus grand lac d'Asie du Sud-Est",
      "Premier temple montagne: Bakong",
      "Trio incontournable: Angkor Wat, Ta Prohm, Angkor Thom"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk jours 1 et 3", "Voiture jour 2", "Bateau et billet lac Tonlé Sap", "Eau fraîche", "Supplément lever de soleil: +25€"]
  },
  {
    id: "option-e-3-jours-kulen",
    title: "Option E : Circuit 3 jours à Siem Reap",
    image: "/lovable-uploads/a3e679fa-ae39-4436-87c7-5af329d32319.png",
    duration: "3 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option E : Circuit 3 jours à Siem Reap

Jour 1 : Groupe de Roluos (anciens temples pré-angkoriens : Lolei, Preah Ko, Bakong) + village flottant du Tonlé Sap.

Jour 2 : Lever du soleil + Angkor Wat, Ta Prohm, Angkor Thom (Bayon, Baphuon, Terrasses).

Jour 3 : Excursion à Phnom Kulen, montagne sacrée des Khmers : rivière aux 1000 lingas, Bouddha couché taillé dans la roche, cascades naturelles. Après-midi : visite du temple de Banteay Srei, surnommé « la citadelle des femmes » pour ses fines sculptures en grès rose.

Tarif sur demande

Inclus : Guide francophone officiel, Tuk Tuk (J2), voiture (Tonlé Sap & Phnom Kulen), billets d'entrée au lac et à Phnom Kulen, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, repas, pourboires.`,
    highlights: [
      "Temples du groupe de Rolous",
      "Lever de soleil magique à Angkor Wat",
      "Montagne sacrée Phnom Kulen",
      "Rivière aux milles lingas sculptés",
      "Statue de Bouddha géante sur roche",
      "Baignade dans les cascades",
      "Banteay Srei, joyau en grès rose"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk J2", "Billet lac Tonlé Sap", "Voiture pour lac et Phnom Kulen", "Billet Phnom Kulen", "Eau fraîche"]
  },
  {
    id: "option-f-3-jours",
    title: "Option F : Circuit 3 jours à Siem Reap",
    image: "/lovable-uploads/faea70f3-f441-49ae-9a9f-e4a3113b66aa.png",
    duration: "3 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option F : Circuit 3 jours à Siem Reap

Jour 1 : Découverte du grand circuit avec les temples Preah Khan (vaste complexe monastique), Neak Poan (bassin sacré), Tasom et Mebon Oriental. L'après-midi, visite du village traditionnel de Preah Dak, puis des temples de Prè Rup et Kravan.

Jour 2 : Visite du marché local puis excursion en bateau au village flottant de Kampong Pluk sur le lac Tonlé Sap. Après-midi : découverte du temple montagne Bakong.

Jour 3 : Exploration d'Angkor Wat, du temple mystérieux de Ta Prohm et de la cité d'Angkor Thom (Bayon, Baphuon, Phimeanakas et Terrasses).

Tarif sur demande | Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk (J1 & J3), voiture (J2), bateau pour le Tonlé Sap, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, repas, pourboires.`,
    highlights: [
      "Grand circuit avec temples Preah Khan et Neak Poan",
      "Village traditionnel de Preah Dak",
      "Temples Prè Rup et Kravan",
      "Marché local authentique",
      "Village flottant Kampong Pluk",
      "Temple montagne Bakong",
      "Trio incontournable: Angkor Wat, Ta Prohm, Angkor Thom"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk J1 & J3", "Voiture J2", "Bateau pour le Tonlé Sap", "Eau fraîche", "Supplément lever de soleil: +25€"]
  },
  {
    id: "option-g-4-jours",
    title: "Option G : Circuit 4 jours à Siem Reap",
    image: "/lovable-uploads/countryside-cattle.jpg",
    duration: "4 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option G : Circuit 4 jours à Siem Reap

Jour 1 : Grand circuit : Preah Khan, Neak Poan, Tasom, Mebon Oriental. Puis visite du village de Preah Dak et des temples Prè Rup et Kravan.

Jour 2 : Marché local et village flottant de Tonlé Sap. Après-midi : temple montagne Bakong.

Jour 3 : Angkor Wat, Ta Prohm et Angkor Thom (Bayon, Baphuon, Terrasses).

Jour 4 : Matinée à la ferme de lotus et découverte d'une petite entreprise familiale d'épices cambodgiennes.

Tarif sur demande | Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk (J1, J3, J4), voiture (J2), bateau pour le Tonlé Sap, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, repas, billet de la ferme de lotus, pourboires`,
    highlights: [
      "Grand circuit avec Preah Khan et Neak Poan",
      "Village traditionnel de Preah Dak",
      "Marché local authentique",
      "Village flottant du Tonlé Sap",
      "Temple montagne Bakong",
      "Ferme de lotus traditionnelle",
      "Entreprise familiale d'épices cambodgiennes"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk J1, J3, J4", "Voiture J2", "Bateau pour le Tonlé Sap", "Eau fraîche", "Supplément lever de soleil: +25€"]
  },
  {
    id: "option-h-5-jours",
    title: "Option H : Circuit 5 jours à Siem Reap",
    image: "/lovable-uploads/farmer-rice-field.jpg",
    duration: "5 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option H : Circuit 5 jours à Siem Reap

Jour 1 : Grand circuit : Preah Khan, Neak Poan, Tasom, Mebon Oriental. Puis visite du village Preah Dak et des temples Prè Rup et Kravan.

Jour 2 : Marché local et village authentique hors de Siem Reap. Après-midi : excursion en bateau au village de pêcheurs.

Jour 3 : Angkor Wat, Ta Prohm et Angkor Thom (Bayon, Baphuon, Terrasses).

Jour 4 : Excursion à Phnom Kulen : rivière aux 1000 lingas, Bouddha géant, cascades, puis visite de Banteay Srei.

Jour 5 : Découverte de la campagne de Krabei Real, cours de cuisine et déjeuner avec les villageois. Après-midi : visite d'un atelier d'épices.

Tarif sur demande | Supplément lever du soleil : +25€

Inclus : Guide francophone officiel, Tuk Tuk (J1-J3 & J5), voiture pour Phnom Kulen, cours de cuisine et repas chez l'habitant, billet Phnom Kulen, eau fraîche.
Non inclus : Billets d'entrée d'Angkor, autres repas, pourboires.`,
    highlights: [
      "Grand circuit avec Preah Khan et Neak Poan",
      "Village traditionnel Preah Dak",
      "Village authentique hors de Siem Reap",
      "Excursion en bateau village de pêcheurs",
      "Montagne sacrée Phnom Kulen",
      "Cours de cuisine avec villageois",
      "Atelier d'épices traditionnel"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk J1-J3 & J5", "Voiture pour Phnom Kulen", "Cours cuisine et repas chez habitant", "Billet Phnom Kulen", "Eau fraîche"]
  },
  {
    id: "option-i-6-jours",
    title: "Option I : Circuit 6 jours Cambodge (Siem Reap & Phnom Penh)",
    image: "/lovable-uploads/b659861e-07e5-43e8-9d2d-2c3a399f637f.png",
    duration: "6 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option I : Circuit 6 jours Cambodge (Siem Reap & Phnom Penh)

Jour 1 : Arrivée à Siem Reap et transfert à l'hôtel.

Jour 2 : Grand circuit : Preah Khan, Neak Poan, Mebon Oriental, Prè Rup.

Jour 3 : Angkor Wat, Ta Prohm et Angkor Thom.

Jour 4 : Route vers Phnom Penh (6h) avec arrêt au village flottant du Tonlé Sap.

Jour 5 : Visite de Phnom Penh : Palais Royal, Pagode d'Argent, Musée national, Wat Phnom.

Jour 6 : Phnom Penh : Monument de l'Indépendance, Musée S21, marché russe.

Tarif sur demande

Inclus : Guide francophone officiel, Tuk Tuk, voiture climatisée, billets d'entrée (Angkor, Tonlé Sap, Phnom Penh).
Non inclus : Hôtels, repas, assurances, pourboires.`,
    highlights: [
      "Grand circuit des temples d'Angkor",
      "Temple Angkor Wat et Angkor Thom",
      "Village flottant du lac Tonlé Sap",
      "Palais Royal de Phnom Penh",
      "Pagode d'Argent et Musée National",
      "Monument de l'Indépendance",
      "Musée du génocide S21",
      "Marché Russe authentique"
    ],
    includes: ["Guide francophone officiel", "Tuk Tuk", "Voiture climatisée", "Billets d'entrée (Angkor, Tonlé Sap, Phnom Penh)"]
  },
  {
    id: "option-j-7-jours",
    title: "Option J: Circuit 7 jours au Cambodge",
    image: "/lovable-uploads/603c3419-969c-425a-be2d-1ba728fc8c48.png",
    duration: "7 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option J: Circuit 7 jours au Cambodge

J1 - Phnom Penh visite
Départ de l'hôtel à 8h, nous commençons à visiter le Palais Royal avec la salle de trône, la salle de la réception royale et la pagode d'argent. Puis nous visitons le musée national et la pagode Ounaloam. L'après-midi visite le musée génocide S21.
Retour à l'hôtel.

J2 - Phnom Penh - Kratie (242km, 5h)
Départ de Phnom Penh à 8h. Direction vers le bord du Mékong, Kratie. Sur le chemin, visitons la spécialité de la région (marché des insectes, les tarentules, les grillons, les sauterelles, les vers de soie…). Puis un petit arrêt pour Kampong Cham, ensuite direction vers Kratie au bord du Mékong.
Dormir chez l'habitant sur l'île Koh Trong, possible.

J3 - Kratie - Siem Reap (335km, 5h)
Après le petit déjeuner, une petite balade autour de l'île pour voir les activités quotidiennes des habitants. Ensuite visitons les dauphins de l'eau douce Irrawaddy dans le Mékong à Kampi. Direction vers Siem Reap.
Nuit à l'hôtel.

J4 - Siem Reap visite 40km
Départ de l'hôtel à 8h, nous prenons la route pour visiter les temples qui sont dans le grand circuit (Preah Khan, Neak Poan, Mebon Oriental). L'après-midi visite le petit temple en brique Prè Rup.
Retour à l'hôtel.

J5 - Siem Reap visite 30km
Départ de l'hôtel à 8h. Direction vers le site d'Angkor. Vous commencez à visiter le temple Angkor Wat et Ta Prohm. L'après-midi visitez la grande cité Angkor Thom (Bayon, Baphoun et les terrasses).
Tour en ballon captif si la météo nous permet.
Nuit à l'hôtel.

J6 - Siem Reap visite 50km
Après le petit déjeuner à l'hôtel, direction vers le site d'Angkor, Siem Reap. Une petite expérience de faire une balade à pied sur la montagne sacrée pour voir les sculptures gravées dans la rivière depuis le 11ème siècle. Ensuite visitez un ancien temple Banteay Srei.
Arrivée à Siem Reap.
Nuit à l'hôtel.

J7 - Siem Reap - Tonlé Sap 50km
Départ de l'hôtel à 8h. Direction vers le village des pêcheurs sur le lac Tonlé Sap. En saison de pluie les maisons sont dans l'eau et en saison sèche les maisons sont sur pilotis.
Retour à Siem Reap.
Fin de nos services.`,
    highlights: [
      "Palais Royal et Pagode d'Argent à Phnom Penh",
      "Musée national et musée génocide S21",
      "Marché des insectes et spécialités régionales",
      "Nuit chez l'habitant sur l'île Koh Trong (possible)",
      "Observation des dauphins Irrawaddy du Mékong",
      "Grand circuit des temples d'Angkor",
      "Angkor Wat et Ta Prohm",
      "Tour en ballon captif (selon météo)",
      "Montagne sacrée avec sculptures du 11ème siècle",
      "Temple Banteay Srei",
      "Village flottant du lac Tonlé Sap"
    ],
    includes: [
      "Guide francophone officiel",
      "Voiture climatisée tout le long du circuit",
      "Dormir et dîner chez l'habitant au J2",
      "Billet d'entrée pour voir les dauphins",
      "Billet d'entrée pour le site d'Angkor",
      "Billet d'entrée pour le lac Tonlé Sap avec son village des pêcheurs",
      "Non inclus: Assurances, hôtels, repas, autres dépenses, pourboires"
    ]
  },
  {
    id: "option-k-7-jours-phnom-penh",
    title: "Option K : Itinéraire Siem Reap & Phnom Penh – 7 jours",
    image: "/lovable-uploads/pier-beach-cambodia.jpg",
    duration: "7 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option K : Itinéraire Siem Reap & Phnom Penh – 7 jours

Jour 1 – Départ de Paris
Vol international en direction du Cambodge.

Jour 2 – Arrivée à Siem Reap
Arrivée à l'aéroport de Siem Reap et accueil par notre équipe. Tour de ville en tuk-tuk et installation à votre hébergement. Temps libre pour repos et découverte personnelle de la ville.

Jour 3 – Les temples du Nord d'Angkor
Départ pour la découverte des temples de la région nord : Prè Rup, Banteay Samrè et Banteay Srei, surnommé la citadelle des femmes. Visite d'un village local producteur de sucre de palme. Dans l'après-midi, découverte du village ancien de Preah Dak et des temples Neak Poan et Preah Khan.

Jour 4 – Lever du soleil sur Angkor Wat et la grande cité
Tôt le matin, départ pour admirer le lever du soleil sur Angkor Wat. Après le petit-déjeuner, exploration des temples mythiques : Angkor Wat, Ta Prohm, Bayon, Baphuon, la Terrasse des Éléphants et la Terrasse du Roi Lépreux.

Jour 5 – Vie locale et village des pêcheurs
Excursion au lac Tonlé Sap pour découvrir les villages flottants et la vie des pêcheurs cambodgiens. Retour en ville pour la visite d'un atelier d'artisanat et d'une école de danse traditionnelle.

Jour 6 – Route vers Phnom Penh
Départ en bus pour Phnom Penh (environ 5 heures de route). Plusieurs arrêts en chemin pour profiter du paysage cambodgien. Arrivée dans la capitale dans l'après-midi et installation.

Jour 7 – Découverte de Phnom Penh
Visite du Palais Royal, de la Pagode d'Argent et du Musée National. Dans l'après-midi, balade sur la colline de Madame Penh et au marché central.

Jour 8 – Derniers instants et départ vers le Vietnam
Tour de ville en cyclo-pousse et visite du musée S21, témoin poignant de l'histoire du Cambodge. Temps libre avant le transfert vers la gare routière pour le départ vers Saigon.
Fin de nos services.`,
    highlights: [
      "Vol international depuis Paris",
      "Tour de ville en tuk-tuk à Siem Reap",
      "Temples du Nord : Prè Rup, Banteay Samrè, Banteay Srei",
      "Village producteur de sucre de palme",
      "Lever du soleil sur Angkor Wat",
      "Temples mythiques : Angkor Wat, Ta Prohm, Bayon, Baphuon",
      "Villages flottants du lac Tonlé Sap",
      "Atelier d'artisanat et école de danse traditionnelle",
      "Palais Royal et Pagode d'Argent de Phnom Penh",
      "Tour en cyclo-pousse et musée S21"
    ],
    includes: [
      "Guide francophone pendant tout le circuit",
      "Transports et entrées aux sites mentionnés",
      "Non inclus : Assurances et pourboires, boissons et dépenses personnelles"
    ]
  },
  {
    id: "option-l-circuit-culturel-8-jours",
    title: "Option L : Circuit culturel Cambodge – 8 jours",
    image: "/lovable-uploads/angkor-wat-approach.jpg",
    duration: "8 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option L : Circuit culturel Cambodge – 8 jours

Jour 1 – Départ international
Envol pour le Cambodge.

Jour 2 – Arrivée à Phnom Penh
Accueil à l'aéroport et transfert vers votre hébergement. Promenade détente le long du quai Sisowath et premier contact avec la capitale.

Jour 3 – Patrimoine de Phnom Penh
Visite du Palais Royal et de la Pagode d'Argent, puis du Musée National. Balade au marché russe pour découvrir l'artisanat local.

Jour 4 – Vers Kampong Thom et Sambor Prei Kuk
Route vers Kampong Thom avec arrêt dans un village traditionnel. Exploration du site archéologique de Sambor Prei Kuk, ancien royaume pré-angkorien. Continuation vers Siem Reap.

Jour 5 – Les temples majeurs d'Angkor
Journée consacrée à la découverte d'Angkor Thom, du Bayon, de la Terrasse des Éléphants et d'Angkor Wat. Coucher de soleil sur le site.

Jour 6 – La campagne cambodgienne et Banteay Srei
Excursion à la citadelle des femmes, Banteay Srei, et découverte de la campagne environnante. Visite d'un village producteur de sucre de palme et rencontre avec les habitants.

Jour 7 – Lac Tonlé Sap et vie flottante
Balade en bateau sur le lac Tonlé Sap, où les habitants vivent dans des maisons sur pilotis. Retour à Siem Reap pour un moment libre.

Jour 8 – Départ
Temps libre avant votre transfert à l'aéroport.
Fin de nos services.`,
    highlights: [
      "Vol international vers le Cambodge",
      "Promenade le long du quai Sisowath",
      "Palais Royal et Pagode d'Argent",
      "Musée National et marché russe",
      "Site archéologique de Sambor Prei Kuk",
      "Angkor Thom, Bayon et Angkor Wat",
      "Coucher de soleil sur Angkor",
      "Banteay Srei et campagne cambodgienne",
      "Village producteur de sucre de palme",
      "Balade en bateau sur le lac Tonlé Sap",
      "Maisons sur pilotis"
    ],
    includes: [
      "Guide francophone privé",
      "Transports et droits d'entrée aux sites",
      "Non inclus : Assurances, pourboires, et dépenses personnelles"
    ]
  },
  {
    id: "option-m-aventure-10-jours",
    title: "Option M : Aventure et Découverte du Cambodge – 10 jours",
    image: "/lovable-uploads/palm-beach-cambodia.jpg",
    duration: "10 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option M : Aventure et Découverte du Cambodge – 10 jours

Jour 1 – Départ international
Vol en direction du Cambodge.

Jour 2 – Arrivée à Phnom Penh
Accueil à l'aéroport et transfert vers votre hébergement. Temps libre pour une première découverte de la capitale.

Jour 3 – Phnom Penh historique
Visite du Palais Royal, de la Pagode d'Argent et du Musée National. Après-midi consacrée à la mémoire du pays avec la visite du musée S21 et des champs de la mort de Choeung Ek.

Jour 4 – Route vers Kampot
Trajet vers Kampot, charmante ville coloniale. Balade sur les quais et promenade dans les plantations de poivre, renommées mondialement.

Jour 5 – Kep et l'océan
Excursion à Kep pour découvrir le marché aux crabes et les paysages maritimes. Possibilité de baignade et d'exploration de l'île du Lapin.

Jour 6 – Kampot – Phnom Penh – Siem Reap
Retour vers Phnom Penh puis vol ou bus vers Siem Reap. Installation et soirée libre.

Jour 7 – Les merveilles d'Angkor Thom
Visite de la grande cité d'Angkor Thom, du Bayon, de Baphuon et de la Terrasse des Éléphants. Coucher de soleil sur le site.

Jour 8 – Angkor Wat et Ta Prohm
Découverte du temple d'Angkor Wat, chef-d'œuvre de l'architecture khmère, et du temple envahi par la jungle, Ta Prohm.

Jour 9 – Lac Tonlé Sap et vie locale
Balade en bateau sur le lac Tonlé Sap et rencontre avec les habitants des villages flottants. Temps libre l'après-midi pour découverte personnelle ou achats souvenirs.

Jour 10 – Départ
Temps libre avant transfert à l'aéroport.
Fin de nos services.`,
    highlights: [
      "Vol international vers le Cambodge",
      "Palais Royal et Pagode d'Argent",
      "Musée S21 et champs de la mort de Choeung Ek",
      "Kampot et ses plantations de poivre",
      "Marché aux crabes de Kep",
      "Exploration de l'île du Lapin",
      "Angkor Thom et le Bayon",
      "Temple d'Angkor Wat",
      "Ta Prohm envahi par la jungle",
      "Villages flottants du lac Tonlé Sap"
    ],
    includes: [
      "Guide francophone privé",
      "Transports et entrées aux sites mentionnés",
      "Non inclus : Assurances, pourboires et dépenses personnelles"
    ]
  },
  {
    id: "option-n-cambodge-laos-11-jours",
    title: "Option N : Beautés du Cambodge et du Laos – 11 jours",
    image: "/lovable-uploads/fishing-boat-tonle-sap.jpg",
    duration: "11 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option N : Beautés du Cambodge et du Laos – 11 jours

Jour 1 – Départ international
Vol en direction du Cambodge.

Jour 2 – Arrivée à Phnom Penh
Accueil à l'aéroport et transfert à votre hébergement. Balade libre dans la capitale.

Jour 3 – Phnom Penh historique
Visite du Palais Royal, de la Pagode d'Argent et du Musée National. Après-midi consacrée à la découverte du musée S21 et des champs de la mort de Choeung Ek.

Jour 4 – Vers Kratie, terre des dauphins
Route vers Kratie, charmante petite ville en bord du Mékong. En fin de journée, sortie en bateau pour observer les dauphins d'eau douce d'Irrawaddy.

Jour 5 – De Kratie à Siem Reap
Trajet vers Siem Reap avec arrêts dans des villages authentiques. Installation et soirée libre.

Jour 6 – Angkor Thom et Ta Prohm
Exploration de la cité d'Angkor Thom, du Bayon, de la Terrasse des Éléphants et de Ta Prohm, le temple envahi par la jungle.

Jour 7 – Angkor Wat et coucher de soleil
Visite du majestueux Angkor Wat et observation du coucher de soleil sur le site.

Jour 8 – Tonlé Sap et frontière laotienne
Balade en bateau sur le lac Tonlé Sap avant de prendre la route vers la frontière du Laos.

Jour 9 – 4000 îles (Si Phan Don)
Découverte de la région des 4000 îles, ses cascades et la vie paisible au bord du Mékong.

Jour 10 – Chutes de Khone Phapheng
Exploration des plus grandes chutes d'eau d'Asie du Sud-Est avant de rejoindre Pakse.

Jour 11 – Départ
Transfert à l'aéroport pour votre vol de retour.
Fin de nos services.`,
    highlights: [
      "Vol international vers le Cambodge",
      "Palais Royal et Pagode d'Argent",
      "Musée S21 et champs de la mort de Choeung Ek",
      "Observation des dauphins d'Irrawaddy à Kratie",
      "Villages authentiques cambodgiens",
      "Angkor Thom et le Bayon",
      "Temple d'Angkor Wat",
      "Ta Prohm envahi par la jungle",
      "Lac Tonlé Sap",
      "Région des 4000 îles au Laos",
      "Chutes de Khone Phapheng"
    ],
    includes: [
      "Guide francophone privé",
      "Transports et entrées aux sites",
      "Non inclus : Assurances, pourboires et dépenses personnelles"
    ]
  },
  {
    id: "option-o-itineraire-13-jours",
    title: "Option O : Itinéraire 13 jours / 12 nuits au Cambodge",
    image: "/lovable-uploads/angkor-wat-approach.jpg",
    duration: "13 jours / 12 nuits",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option O : Itinéraire 13 jours / 12 nuits au Cambodge

Jour 1 – Arrivée à Siem Reap
Accueil à l'aéroport à 9h40 et transfert vers votre hébergement. Tour de ville en tuk-tuk et visite du musée Team House. Soirée d'accueil avec dîner-spectacle.

Jour 2 – Lever du soleil sur Angkor
Découverte du lever du soleil sur le parc d'Angkor : Angkor Wat, Angkor Thom, Preah Khan et Banteay Srei.
Visite des ateliers d'artisanat local.
Déjeuner inclus, soirée libre.

Jour 3 – Excursion à Preah Vihear (230 km)
Route vers le nord pour visiter le temple hindouiste de Preah Vihear (IXe–XIIe siècle). Ascension en 4x4 jusqu'au sommet de la montagne Dangrèk (500 m d'altitude). Exploration des sanctuaires reliés par chaussées et escaliers. Retour à Siem Reap en fin d'après-midi.
Déjeuner pique-nique, dîner libre.

Jour 4 – Réserve ornithologique de Prek Toal
Excursion en bateau vers le village des pêcheurs de Prek Toal, l'une des plus grandes réserves d'oiseaux d'Asie du Sud-Est. Observation ornithologique et découverte du village flottant.
Déjeuner chez l'habitant, dîner libre.

Jour 5 – Siem Reap → Battambang (170 km)
Départ pour Battambang. Visite du temple en ruine de Banteay Chhmar. À l'arrivée, balade dans la vieille ville coloniale et observation du vol des chauves-souris au coucher du soleil.
Déjeuner inclus, dîner libre.

Jour 6 – Vie locale à Battambang
Visite du marché coloré et découverte des productions artisanales : galettes de riz, chips de banane, alcool de riz, gâteaux de riz gluant, etc.
L'après-midi, visite d'une ancienne maison coloniale et d'une pagode. Expérience du célèbre « train en bambou » et spectacle de cirque local en soirée.
Déjeuner inclus, dîner libre.

Jour 7 – Battambang → Phnom Penh (291 km)
Route vers Phnom Penh avec plusieurs arrêts en chemin. Visite de la colline royale et d'un atelier d'orfèvres avant d'arriver dans la capitale.
Déjeuner inclus, dîner libre.

Jour 8 – Découverte de Phnom Penh
Visite du Palais Royal, de la Pagode d'Argent et du Musée National des Beaux-Arts.
L'après-midi, découverte de la colline de Madame Penh et de la pagode Wat Ounalom.
Déjeuner inclus, dîner libre.

Jour 9 – Phnom Penh → Kratie (240 km)
Départ vers Kratie avec arrêt à Skun (dégustation d'insectes) et découverte de Kampong Cham (plantations et vergers). Observation des dauphins d'eau douce du Mékong à l'arrivée.
Déjeuner inclus, dîner libre.

Jour 10 – Vie locale à Kratie
Balade à vélo autour de l'île de Koh Trong et cours de cuisine chez l'habitant. Après-midi libre pour détente.
Dîner libre.

Jour 11 – Kratie → Phnom Penh (240 km)
Retour à Phnom Penh. Tour de ville en tuk-tuk dans l'après-midi.
Déjeuner inclus, dîner libre.

Jour 12 – Journée libre à Phnom Penh
Temps libre pour vos découvertes personnelles ou la détente.
Repas libres.

Jour 13 – Départ vers le Vietnam
Transfert à l'aéroport pour votre vol international.
Fin de nos services.`,
    highlights: [
      "Lever du soleil sur Angkor Wat",
      "Temple hindouiste de Preah Vihear",
      "Réserve ornithologique de Prek Toal",
      "Vieille ville coloniale de Battambang",
      "Train en bambou et spectacle de cirque",
      "Palais Royal et Pagode d'Argent",
      "Observation des dauphins du Mékong à Kratie",
      "Cours de cuisine chez l'habitant",
      "Balade à vélo sur l'île de Koh Trong",
      "Découverte de Kampong Cham"
    ],
    includes: [
      "Transferts et transports mentionnés",
      "Droits d'entrée sur les sites et excursions",
      "Déjeuners mentionnés au programme",
      "Spectacles culturels à Siem Reap et Battambang",
      "Non inclus : Assurances, pourboires et dépenses personnelles"
    ]
  },
  {
    id: "option-p-circuit-familial-16-jours",
    title: "Option P : Circuit familial 16 jours au Cambodge",
    image: "/lovable-uploads/countryside-cattle.jpg",
    duration: "16 jours",
    price: "2 050€ par personne",
    participants: "Groupe privé",
    description: `Option P : Circuit familial 16 jours au Cambodge

Jour 1 – Arrivée à Siem Reap
Accueil à l'aéroport à 9h00 et transfert à votre hébergement. Tour de ville en tuk-tuk et temps libre pour la détente.
Repas libres.

Jour 2 – Découverte d'Angkor en tuk-tuk (50 km)
Départ à 8h pour la visite du site d'Angkor : Angkor Wat, Ta Prohm, Angkor Thom (Bayon, Baphuon, Phimeanakas, Terrasse des Éléphants et du Roi Lépreux).
Déjeuner inclus, dîner libre.

Jour 3 – Temples et villages d'Angkor (80 km)
Visite du temple Preah Khan, de Neak Poan, Mébon Oriental et du village de Preah Dak.
L'après-midi, découverte du temple en grès rose de Banteay Srei.
Déjeuner inclus, dîner libre.

Jour 4 – Campagne et lac Tonlé Sap (40 km)
Excursion à vélo à travers la campagne cambodgienne : paysages verdoyants, maisons traditionnelles et rencontres avec les habitants. Participation à la préparation d'un repas local et déjeuner convivial chez l'habitant.
L'après-midi, visite du village des pêcheurs sur pilotis au bord du lac Tonlé Sap.
Déjeuner inclus, dîner libre.

Jour 5 – Siem Reap → Battambang (170 km, 3h)
Route vers Battambang, surnommée le grenier à riz du pays. En chemin, visite d'une ferme de soie et d'un ancien temple angkorien.
À l'arrivée, balade dans la ville coloniale.
Déjeuner inclus, dîner libre.

Jour 6 – Vie locale à Battambang
Découverte des ateliers artisanaux (galettes de riz, chips de banane, etc.) et visite d'une pagode.
Excursion sur le train en bambou et observation du vol des chauves-souris à la grotte de Phnom Sampov au coucher du soleil.
Déjeuner inclus, dîner libre.

Jour 7 – Battambang → Phat Sanday (200 km, 4h)
Route vers la province de Kampong Chhnang. Visite d'un atelier de sculpture sur pierre.
Navigation en bateau jusqu'à Phat Sanday, installation chez l'habitant et excursion sur le lac Tonlé Sap et la forêt inondée.
Déjeuner inclus. Dîner et nuit chez l'habitant.

Jour 8 – Phat Sanday → Oudong → Kratie (270 km)
Après le petit déjeuner, route vers Oudong et visite d'une belle pagode au pied de la colline.
Poursuite du voyage vers Kratie, avec arrêts au marché des insectes et à Kampong Cham.
Observation des dauphins d'eau douce du Mékong à Kampi, puis traversée en bac vers l'île de Koh Trong.
Déjeuner inclus. Dîner et nuit chez l'habitant.

Jour 9 – Kratie → Mondulkiri (215 km, 3h30)
Balade à vélo sur l'île de Koh Trong, puis route vers la région montagneuse de Mondulkiri.
Découverte des paysages de la montagne Dos Kramom et de la forêt.
Déjeuner inclus, dîner libre.

Jour 10 – Mondulkiri et les éléphants
Petite randonnée dans les montagnes, rencontre avec les éléphants et moment privilégié pour les nourrir.
Pique-nique au bord de la rivière et baignade possible.
Retour au village pour échanger avec les habitants Bunongs.
Déjeuner pique-nique, dîner libre.

Jour 11 – Mondulkiri → Phnom Penh (370 km, 6h)
Route vers la capitale du Cambodge.
Arrivée en fin d'après-midi et balade pédestre le long du Palais Royal.
Déjeuner inclus, dîner libre.

Jour 12 – Découverte de Phnom Penh
Visite du Palais Royal, de la Pagode d'Argent et du Musée National.
L'après-midi, visite du musée S21 retraçant l'histoire du génocide (1975–1979).
Balade en bateau sur le Mékong au coucher du soleil.
Déjeuner inclus, dîner libre.

Jour 13 – Phnom Penh → Kep / Kampot (152 km, 2h30)
Route vers le sud du pays jusqu'à Kep.
Visite d'une plantation de poivre et cours de cuisine locale.
L'après-midi, découverte du marché aux crabes et des salines traditionnelles.
Déjeuner inclus, dîner libre.

Jour 14 – Kep → Koh Rong Sanloem (130 km, 3h)
Route vers Sihanoukville puis bateau rapide jusqu'à l'île paradisiaque de Koh Rong Sanloem.
Repas libres.

Jour 15 – Journée libre à Koh Rong Sanloem
Détente sur la plage ou activités au choix.
Repas libres.

Jour 16 – Retour à Phnom Penh et départ
Transfert retour vers la capitale pour le vol de nuit.
Repas libres.
Fin de nos services.`,
    highlights: [
      "Circuit familial complet de 16 jours",
      "Temples d'Angkor : Angkor Wat, Ta Prohm, Angkor Thom",
      "Excursion à vélo dans la campagne cambodgienne",
      "Train en bambou à Battambang",
      "Nuits chez l'habitant à Phat Sanday et Koh Trong",
      "Observation des dauphins du Mékong",
      "Rencontre avec les éléphants à Mondulkiri",
      "Découverte de la région montagneuse",
      "Palais Royal et Pagode d'Argent",
      "Plantation de poivre à Kampot",
      "Détente sur l'île de Koh Rong Sanloem"
    ],
    includes: [
      "Transferts et transports mentionnés",
      "Droits d'entrée sur les sites",
      "Déjeuners et dîners mentionnés",
      "Activités locales et rencontres avec les habitants",
      "Exclus : Guide accompagnateur, repas libres, assurances, pourboires"
    ]
  },
];

type FilterKey = "tous" | "1j" | "2-3j" | "4-7j" | "7j+";

const filters: { key: FilterKey; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "1j",   label: "1 jour" },
  { key: "2-3j", label: "2–3 jours" },
  { key: "4-7j", label: "4–7 jours" },
  { key: "7j+",  label: "7 jours +" },
];

const getDurationKey = (duration: string): FilterKey => {
  const n = parseInt(duration);
  if (n === 1) return "1j";
  if (n <= 3) return "2-3j";
  if (n <= 7) return "4-7j";
  return "7j+";
};

const popularTourIds = new Set(["option-a-1-jour", "option-b-2-jours", "option-k-7-jours-phnom-penh"]);

const ToursSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("tous");
  const navigate = useNavigate();

  const filtered = activeFilter === "tous"
    ? tours
    : tours.filter((t) => getDurationKey(t.duration) === activeFilter);

  const openWhatsApp = () => {
    window.open("https://wa.me/+85512929279?text=Bonjour, je souhaite créer un itinéraire sur-mesure au Cambodge", "_blank");
  };

  return (
    <section id="tours" className="py-16 sm:py-20 md:py-28 bg-[hsl(35,40%,96%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.2rem] uppercase text-cambodia-red mb-4">
            Nos Expériences
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              {tours.length} circuits<br />
              <span className="italic">privés et personnalisés</span>
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-xs font-light pb-1">
              De 1 jour à 16 jours — devis gratuit, sans engagement, réponse sous 1h.
            </p>
          </div>
          <div className="h-px w-full bg-border mt-6" />
        </div>

        {/* Filtres durée */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={cn(
                "font-sans px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                activeFilter === f.key
                  ? "bg-espresso text-white border-espresso"
                  : "bg-white text-foreground border-border hover:border-espresso/40 hover:text-foreground"
              )}
            >
              {f.label}
              <span className={cn("ml-1.5 text-xs opacity-60")}>
                ({f.key === "tous" ? tours.length : tours.filter(t => getDurationKey(t.duration) === f.key).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grille de tours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {filtered.map((tour) => {
            const isPopular = popularTourIds.has(tour.id);
            return (
              <div
                key={tour.id}
                onClick={() => navigate(`/tours/${tour.id}`)}
                className={cn(
                  "group cursor-pointer bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant",
                  isPopular ? "border-cambodia-red/30 shadow-sm" : "border-border shadow-sm hover:border-cambodia-red/20"
                )}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44 sm:h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Badges image */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full font-sans">
                      <Clock size={10} />
                      {tour.duration}
                    </span>
                    {isPopular && (
                      <span className="bg-cambodia-red text-white text-xs font-semibold px-2.5 py-1 rounded-full font-sans">
                        Populaire
                      </span>
                    )}
                  </div>

                  {/* Prix sur l'image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="font-sans text-white/80 text-xs font-light">
                      <Users size={10} className="inline mr-1" />Groupe privé
                    </span>
                    <span className="font-sans text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {tour.price === "Tarif sur demande" || tour.price === "Dépend des itinéraires choisis"
                        ? "Devis gratuit"
                        : "À partir de " + tour.price.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-lg font-medium text-foreground leading-snug mb-3 group-hover:text-cambodia-red transition-colors line-clamp-2">
                    {tour.title}
                  </h3>

                  <div className="flex items-center justify-between text-cambodia-red text-sm font-medium group-hover:gap-2 transition-all font-sans">
                    <span>Voir le programme</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA sur-mesure */}
        <div className="bg-espresso rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.15rem] uppercase text-white/40 mb-2">Sur mesure</p>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-white mb-1">
              Votre itinéraire <span className="italic">idéal</span> n'est pas dans la liste ?
            </h3>
            <p className="font-sans text-white/60 text-sm font-light">
              Devis gratuit · Réponse sous 1h · Aucun engagement
            </p>
          </div>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={openWhatsApp}
            className="font-sans text-base px-7 py-3.5 h-auto whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Créer mon itinéraire
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ToursSection;