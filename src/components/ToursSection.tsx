import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Clock, Users, MapPin, Star, MessageCircle } from "lucide-react";

interface Tour {
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

const tours: Tour[] = [
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
      "Hébergements avec petit-déjeuner",
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
      "Hébergements avec petit-déjeuner",
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
      "Hébergements avec petit-déjeuner",
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
      "Hébergements avec petit-déjeuner",
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
      "Hébergements avec petits-déjeuners",
      "Transferts et transports mentionnés",
      "Droits d'entrée sur les sites et excursions",
      "Déjeuners mentionnés au programme",
      "Spectacles culturels à Siem Reap et Battambang",
      "Non inclus : Assurances, pourboires et dépenses personnelles"
    ]
  },
  {
    id: "option-p-splendeurs-cambodge-9-jours",
    title: "Option P : Splendeurs du Cambodge – 9 jours",
    image: "/lovable-uploads/countryside-cattle.jpg",
    duration: "9 jours",
    price: "Tarif sur demande",
    participants: "Groupe privé",
    description: `Option P : Splendeurs du Cambodge – 9 jours

Jour 1 – Départ international
Vol en direction du Cambodge.

Jour 2 – Arrivée à Phnom Penh
Accueil à l'aéroport et transfert vers votre hébergement. Promenade libre le long du quai Sisowath.

Jour 3 – Trésors de Phnom Penh
Visite du Palais Royal, de la Pagode d'Argent et du Musée National. Après-midi dédiée à la découverte du marché central et des ruelles animées de la capitale.

Jour 4 – Route vers Battambang
Départ pour Battambang, une des plus charmantes villes du pays. En chemin, visite d'une pagode et de villages traditionnels. Balade libre en soirée.

Jour 5 – Battambang authentique
Exploration des campagnes environnantes en tuk-tuk : rizières, pagodes et artisans locaux. Expérience du train de bambou typique de la région.

Jour 6 – En route vers Siem Reap
Transfert vers Siem Reap avec arrêts dans des villages et à la pagode d'Ek Phnom. Installation à votre arrivée.

Jour 7 – Les merveilles d'Angkor Thom
Visite du Bayon, de la Terrasse des Éléphants et du Palais Royal. Coucher de soleil sur Angkor.

Jour 8 – Angkor Wat et Ta Prohm
Exploration du temple emblématique d'Angkor Wat et du mystérieux Ta Prohm. Balade au village de Preah Dak pour rencontrer les habitants.

Jour 9 – Lac Tonlé Sap et départ
Balade en bateau sur le lac Tonlé Sap avant transfert à l'aéroport.
Fin de nos services.`,
    highlights: [
      "Vol international vers le Cambodge",
      "Palais Royal et Pagode d'Argent",
      "Musée National et marché central",
      "Route vers Battambang",
      "Villages traditionnels et pagodes",
      "Train de bambou typique",
      "Rizières et artisans locaux",
      "Pagode d'Ek Phnom",
      "Angkor Thom et le Bayon",
      "Temple d'Angkor Wat",
      "Temple Ta Prohm",
      "Village de Preah Dak",
      "Lac Tonlé Sap"
    ],
    includes: [
      "Hébergements avec petit-déjeuner",
      "Guide francophone privé",
      "Transports et entrées aux sites",
      "Non inclus : Assurances, pourboires et dépenses personnelles"
    ]
  },
];

const ToursSection = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const openWhatsApp = (tourTitle: string) => {
    const message = `Bonjour, je souhaite réserver le tour "${tourTitle}". Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/+85511926262?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="tours" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-royal-blue border-royal-blue">
            Nos Expériences
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Découvrez nos <span className="text-cambodia-red">Tours</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Choisissez parmi nos expériences soigneusement conçues pour vous faire vivre 
            l'authenticité du Cambodge. Chaque tour est personnalisable selon vos envies.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => setSelectedTour(tour)}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight">
                    {tour.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-cambodia-red text-sm font-semibold">
                    <Clock size={14} />
                    {tour.duration}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={14} />
                    Groupe privé
                  </div>
                  <div className="text-lg font-bold text-royal-blue">
                    {tour.price}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-royal-blue group-hover:text-white transition-colors"
                >
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={() => openWhatsApp("plusieurs tours")}
            className="text-lg px-8 py-4 h-auto"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Créer mon itinéraire sur-mesure
          </Button>
        </div>
      </div>

      {/* Tour Detail Modal */}
      <Dialog open={!!selectedTour} onOpenChange={() => setSelectedTour(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 lg:mx-auto my-4 sm:my-8 w-[calc(100vw-1rem)] sm:w-full">
          {selectedTour && (
            <>
              {/* Mobile drag indicator */}
              <div className="block sm:hidden w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-4 -mt-2"></div>
              
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-royal-blue">
                  {selectedTour.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 sm:space-y-6">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Clock size={16} className="text-cambodia-red" />
                    <span className="font-medium">{selectedTour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Users size={16} className="text-cambodia-red" />
                    <span className="font-medium">{selectedTour.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <MapPin size={16} className="text-cambodia-red" />
                    <span className="font-medium">Cambodge</span>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-cambodia-red">
                  {selectedTour.price}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-4 border-b border-border pb-2">
                      Description du circuit
                    </h4>
                    <div className="space-y-4">
                      {selectedTour.description.split('\n\n').map((paragraph, index) => {
                        const trimmedParagraph = paragraph.trim();
                        
                        // Check if paragraph looks like a main title (short and ends with :)
                        if (trimmedParagraph.length < 80 && trimmedParagraph.endsWith(':')) {
                          return (
                            <h5 key={index} className="font-bold text-foreground text-base mt-6 mb-3 text-cambodia-red border-l-4 border-cambodia-red pl-4">
                              {trimmedParagraph}
                            </h5>
                          );
                        }
                        
                        // Check if it's an itinerary item (starts with "Jour")
                        if (trimmedParagraph.startsWith('Jour ')) {
                          return (
                            <div key={index} className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-4 border-cambodia-red">
                              <div className="font-semibold text-foreground mb-2 text-cambodia-red">
                                {trimmedParagraph.split(':')[0]}:
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {trimmedParagraph.split(':').slice(1).join(':').trim()}
                              </p>
                            </div>
                          );
                        }
                        
                        // Check if it's pricing info
                        if (trimmedParagraph.includes('€') || trimmedParagraph.includes('Tarif')) {
                          return (
                            <div key={index} className="bg-secondary/30 p-4 rounded-lg border border-border">
                              <div className="flex items-start gap-2">
                                
                                <div className="font-medium text-foreground">
                                  {trimmedParagraph.split('\n').map((line, lineIndex) => (
                                    <div key={lineIndex} className={lineIndex > 0 ? "mt-1" : ""}>
                                      {line.trim()}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        
                        // Skip "Inclus" or "Non inclus" as it's already shown below
                        if (trimmedParagraph.includes('Inclus :') || trimmedParagraph.includes('Non inclus :')) {
                          return null;
                        }
                        
                        // Check if it's an itinerary option (contains "Itinéraire")
                        if (trimmedParagraph.includes('Itinéraire ')) {
                          return (
                            <div key={index} className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                              <h6 className="font-bold text-amber-700 dark:text-amber-300 mb-3 flex items-center gap-2">
                                <span>🗺️</span> {trimmedParagraph.split('\n')[0]}
                              </h6>
                              <div className="space-y-2 text-sm text-muted-foreground">
                                {trimmedParagraph.split('\n').slice(1).map((line, lineIndex) => {
                                  const trimmedLine = line.trim();
                                  if (trimmedLine) {
                                    return (
                                      <p key={lineIndex} className="leading-relaxed">
                                        {trimmedLine}
                                      </p>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            </div>
                          );
                        }
                        
                        // Regular paragraph
                        if (trimmedParagraph) {
                          // Function to make city names and important places bold
                          const formatTextWithBoldPlaces = (text: string) => {
                            const places = [
                              'Phnom Penh', 'Siem Reap', 'Battambang', 'Kratie', 'Kampot', 'Kep',
                              'Angkor Wat', 'Angkor Thom', 'Ta Prohm', 'Bayon', 'Baphuon', 
                              'Preah Khan', 'Banteay Srei', 'Phnom Kulen', 'Tonlé Sap',
                              'Chau Doc', 'Kampong Pluk', 'Koh Trong', 'Preah Dak',
                              'Palais Royal', 'Pagode d\'Argent', 'Musée National'
                            ];
                            
                            let formattedText = text;
                            places.forEach(place => {
                              const regex = new RegExp(`\\b${place}\\b`, 'gi');
                              formattedText = formattedText.replace(regex, `**${place}**`);
                            });
                            
                            // Split by ** to create bold spans
                            const parts = formattedText.split('**');
                            return parts.map((part, index) => 
                              index % 2 === 1 ? <strong key={index} className="font-bold text-foreground">{part}</strong> : part
                            );
                          };

                          return (
                            <p key={index} className="text-muted-foreground leading-relaxed">
                              {formatTextWithBoldPlaces(trimmedParagraph)}
                            </p>
                          );
                        }
                        
                        return null;
                      })}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3">Points forts :</h4>
                  <ul className="space-y-2">
                    {selectedTour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cambodia-red font-bold mt-0.5 flex-shrink-0">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3">Inclus :</h4>
                  <ul className="space-y-2">
                    {selectedTour.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={() => openWhatsApp(selectedTour.title)}
                  className="w-full text-lg py-4 h-auto"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Réserver ce tour via WhatsApp
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToursSection;