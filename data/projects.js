/**
 * Données statiques des projets.
 *
 * Champs :
 *   slug            — identifiant URL
 *   projectName     — nom affiché
 *   year            — année
 *   description     — courte description (liste projets)
 *   longDescription — texte long (page détail)
 *   client          — nom du client ("" si perso)
 *   tech            — tableau de technos
 *   link            — URL externe ("" si aucun)
 *   images          — tableau de chemins dans /public/
 *   captions        — textes associés à chaque image (même longueur qu'images, optionnel)
 *   collabs         — tableau de logins GitHub
 */

export const projects = [
  {
    slug: 'projecttrak',
    projectName: 'ProjectTrak',
    year: '2026',
    description: "Application de gestion de projets avec Kanban, SQLite et gestion d'équipe.",
    longDescription: "ProjectTrak est une application fullstack de gestion de projets conçue pour les équipes. Elle propose un tableau Kanban interactif, une gestion fine des permissions par équipe, un suivi d'activité et une API REST. L'ensemble est containerisé avec Docker pour un déploiement simplifié.",
    client: '',
    tech: ['Next.js', 'TypeScript', 'SQLite', 'Docker'],
    link: 'https://github.com/Emjy/ProjectTrak',
    images: [],
    captions: [],
    collabs: [],
  },
  {
    slug: 'financetrack',
    projectName: 'FinanceTrack',
    year: '2026',
    description: "Application de suivi de finances personnelles — tableaux de bord et catégorisation.",
    longDescription: "FinanceTrack permet de suivre ses dépenses et revenus avec des tableaux de bord visuels, une catégorisation automatique par ML et des graphiques d'évolution mensuels. Le backend Python analyse les patterns de dépenses pour proposer des insights personnalisés.",
    client: '',
    tech: ['React', 'Express', 'SQLite', 'Python'],
    link: 'https://github.com/Emjy/FinanceTrack',
    images: [
      '/projects/financeTrak1.png',
      '/projects/financeTrak2.png',
      '/projects/financeTrak3.png',
      '/projects/financeTrak4.png',
    ],
    captions: [
      "Vue d'ensemble du dashboard — solde, dépenses du mois et graphique d'évolution.",
      "Catégorisation automatique des transactions avec suggestions ML.",
      "Analyse mensuelle détaillée par catégorie et comparaison avec le mois précédent.",
      "Historique complet et export des données en CSV.",
    ],
    collabs: [],
  },
  {
    slug: 'r2',
    projectName: 'R2',
    year: '2026',
    description: "Refonte complète et développement de mini-jeux interactifs pour un site e-commerce.",
    longDescription: "Refonte complète du site e-commerce R2, incluant une nouvelle identité visuelle, une expérience mobile-first avec React Native, et l'intégration de mini-jeux interactifs pour gamifier l'expérience d'achat. Le back-office reste sur WordPress avec une API headless.",
    client: 'R2',
    tech: ['React', 'React Native', 'Next.js', 'WordPress'],
    link: '',
    images: [],
    captions: [
      "Page d'accueil après refonte — nouvelle identité visuelle et navigation repensée.",
      "Mini-jeu de fidélité intégré à la fiche produit pour booster l'engagement.",
      "Vue mobile native — expérience fluide sur iOS et Android.",
      "Back-office WordPress headless connecté via API REST.",
    ],
    collabs: [],
  },
  {
    slug: 'alveelia',
    projectName: 'Alveelia',
    year: '2025',
    description: "Refonte UI/UX et gamification d'une plateforme de cybersécurité.",
    longDescription: "Mission de refonte UI/UX complète de la plateforme Alveelia, spécialisée dans la formation en cybersécurité. Intégration d'un système de gamification (points, badges, niveaux), création d'un design system avec Storybook, et migration vers Next.js avec TypeScript.",
    client: 'Alveelia',
    tech: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Storybook'],
    link: '',
    images: [],
    captions: [
      "Nouveau dashboard apprenant — progression, badges et modules en cours.",
      "Design system Storybook — composants documentés et réutilisables.",
      "Système de gamification — niveaux, points XP et classement.",
      "Vue mobile responsive — accès aux formations en déplacement.",
    ],
    collabs: [],
  },
  {
    slug: 'space-odyssey',
    projectName: 'Space Odyssey',
    year: '2025',
    description: "Plateforme d'exploration de phénomènes astronomiques — Voie lactée, objets célestes.",
    longDescription: "Space Odyssey est une plateforme interactive d'exploration de l'univers. Elle permet de visualiser la Voie Lactée, d'explorer des objets célestes en 3D et de consulter des données astronomiques en temps réel via des APIs scientifiques. Projet réalisé en formation.",
    client: '',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://space-odyssey-frontend.vercel.app',
    images: [ '/projects/spaceOdyssey1.png', '/projects/spaceOdyssey2.png', '/projects/spaceOdyssey3.png', '/projects/spaceOdyssey4.png', '', '', '/projects/spaceOdyssey1.png' ],
    captions: [
      "Vue panoramique de la Voie Lactée — navigation interactive par secteur.",
      "Vue du système solaire en 3D — exploration des planètes et de leurs caractéristiques.",
      "Zoom sur les planètes — données scientifiques et images haute résolution.",
      "Suivi des objets célestes en temps réel — Exemple avec une des lunes de Mars.",
    ],
    collabs: [],
  },
  {
    slug: 'parenthese',
    projectName: 'Parenthèse',
    year: '2025',
    description: "Site vitrine pour la location d'un espace privatisé — développé pour un client.",
    longDescription: "Site vitrine développé pour un client souhaitant louer son espace privatisé pour des événements. Design épuré et élégant, formulaire de réservation intégré, galerie photo optimisée et déploiement continu via Vercel.",
    client: 'Parenthèse',
    tech: ['Next.js', 'TypeScript', 'CSS'],
    link: 'https://parenthese-front.vercel.app',
    images: [],
    captions: [
      "Page d'accueil — ambiance chaleureuse et appel à l'action épuré.",
      "Galerie photo de l'espace — lumière naturelle, capacités et configuration.",
      "Formulaire de réservation — sélection de date et type d'événement.",
      "Page tarifs et prestations — transparence et simplicité.",
    ],
    collabs: [],
  },
  {
    slug: 'gottaphish',
    projectName: 'GottaPhish',
    year: '2024',
    description: "Refonte frontend et intégration LLM d'une plateforme SaaS de cybersécurité.",
    longDescription: "GottaPhish est une plateforme SaaS de simulation de phishing et de formation à la cybersécurité. J'ai piloté la refonte complète du frontend React/Next.js, l'intégration de fonctionnalités LLM pour la génération de campagnes, la conception d'une API GraphQL et la maintenance du backend Go.",
    client: 'GottaPhish',
    tech: ['React', 'Next.js', 'Go', 'GraphQL', 'Python', 'Vite'],
    link: '',
    images: [],
    captions: [
      "Dashboard administrateur — suivi des campagnes de phishing en temps réel.",
      "Générateur de campagnes assisté par LLM — personnalisation par secteur et cible.",
      "Analytics détaillés — taux de clic, comportements et rapport de vulnérabilité.",
      "Module de formation — contenu adaptatif déclenché après simulation.",
    ],
    collabs: ['thib-d', 'polatrk'],
  },
  {
    slug: 'portfolio',
    projectName: 'Portfolio',
    year: '2024',
    description: 'Portfolio personnel — Next.js 15, React 19, p5.js.',
    longDescription: "Ce portfolio a été conçu pour refléter mon identité de développeur : moderne, épuré, interactif. Il repose sur Next.js 15 avec App Router, React 19, un fond de particules p5.js avec interaction souris, des animations Framer Motion et un design system CSS custom.",
    client: '',
    tech: ['Next.js', 'React', 'p5.js', 'CSS Modules', 'Framer Motion'],
    link: '',
    images: [],
    captions: [
      "Page d'accueil — fond particules interactif et hero centré.",
      "Page projets — grille de cards avec slideshow et overlay au hover.",
      "Page à propos — bio storytelling, nuage d'icônes et grille de compétences.",
      "Page contact — formulaire épuré avec feedback d'envoi.",
    ],
    collabs: [],
  },
];
