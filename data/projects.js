/**
 * Données statiques des projets.
 * Pour ajouter un projet : copier un objet, remplir les champs, ajouter en tête de liste.
 *
 * Champs :
 *   slug        — identifiant URL (minuscules, tirets, sans espaces)
 *   projectName — nom affiché
 *   year        — année (string)
 *   description — courte description (1 ligne, affichée dans la liste)
 *   tech        — tableau de technos affichées en tags
 *   link        — URL externe (optionnel, "" si aucun)
 *   image       — chemin dans /public/images/projects/ (optionnel, gradient sinon)
 *   collabs     — tableau de collaborateurs (optionnel)
 */

export const projects = [
  {
    slug: 'projecttrak',
    projectName: 'ProjectTrak',
    year: '2026',
    description: "Application de gestion de projets avec Kanban, SQLite et gestion d'équipe.",
    tech: ['Next.js', 'TypeScript', 'SQLite', 'Docker'],
    link: 'https://github.com/Emjy/ProjectTrak',
    images: [],
    collabs: [],
  },
  {
    slug: 'financetrack',
    projectName: 'FinanceTrack',
    year: '2026',
    description: "Application de suivi de finances personnelles — tableaux de bord et catégorisation.",
    tech: ['React', 'Express', 'SQLite', 'Python'],
    link: 'https://github.com/Emjy/FinanceTrack',
    images: [],
    collabs: [],
  },
  {
    slug: 'r2',
    projectName: 'R2',
    year: '2026',
    description: "Refonte complète et développement de mini-jeux interactifs pour un site e-commerce.",
    tech: ['React', 'React Native', 'Next.js', 'WordPress'],
    link: '',
    images: [],
    collabs: [],
  },
  {
    slug: 'alveelia',
    projectName: 'Alveelia',
    year: '2025',
    description: "Refonte UI/UX et gamification d'une plateforme de cybersécurité.",
    tech: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Storybook'],
    link: '',
    images: [],
    collabs: [],
  },
  {
    slug: 'space-odyssey',
    projectName: 'Space Odyssey',
    year: '2025',
    description: "Plateforme d'exploration de phénomènes astronomiques — Voie lactée, objets célestes.",
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://space-odyssey-frontend.vercel.app',
    images: [],
    collabs: [],
  },
  {
    slug: 'parenthese',
    projectName: 'Parenthèse',
    year: '2025',
    description: "Site vitrine pour la location d'un espace privatisé — développé pour un client.",
    tech: ['Next.js', 'TypeScript', 'CSS'],
    link: 'https://parenthese-front.vercel.app',
    images: [],
    collabs: [],
  },
  {
    slug: 'gottaphish',
    projectName: 'GottaPhish',
    year: '2024',
    description: "Refonte frontend et intégration LLM d'une plateforme SaaS de cybersécurité.",
    tech: ['React', 'Next.js', 'Go', 'GraphQL', 'Python', 'Vite'],
    link: '',
    images: [],
    collabs: ['thib-d', 'polatrk'],
  },
  {
    slug: 'portfolio',
    projectName: 'Portfolio',
    year: '2024',
    description: 'Portfolio personnel — Next.js 15, React 19, p5.js.',
    tech: ['Next.js', 'React', 'p5.js', 'CSS Modules'],
    link: '',
    images: [],
    collabs: [],
  },
];
