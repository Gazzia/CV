import type {Contact, Experience, Formation, Headline, Hobby, Mission, SkillGroup} from './types';

// Données exportées avec leurs types
export const contact: Contact = {
  phone: '0634394117',
  email: 'joseph.allain24@gmail.com',
  address: 'Région nantaise'
};

export const headline: Headline = {
  title: 'Développeur web fullstack',
  subtitle: 'Développeur dans la région Nantaise, en poste chez Kereis depuis 2021'
};

export const devSkillGroups: SkillGroup[] = [
  {
    groupTitle: 'Langages',
    items: [
      {
        icon: 'compouteur',
        name: 'HTML5, CSS/SASS responsive',
        rating: '5'
      },
      {
        icon: 'compouteur',
        name: 'Javascript, Typescript',
        rating: '5'
      },
      {
        icon: 'compouteur',
        name: 'Groovy',
        rating: '5'
      },
      {
        icon: 'compouteur',
        name: 'Java 8 <> 21',
        rating: '4'
      },
      {
        icon: 'compouteur',
        name: 'SQL (postgres)',
        rating: '4'
      }
    ]
  },
  {
    groupTitle: 'Front-end',
    items: [
      {
        icon: 'brick',
        name: 'Angular (❤️) v7 <> 19',
        rating: '5'
      },
      {
        icon: 'brick',
        name: 'Angular Material',
        rating: '4'
      },
      {
        icon: 'brick',
        name: 'Tailwind',
        rating: '4'
      },
      {
        icon: 'brick',
        name: 'Karma/Jasmine (test)',
        rating: '4'
      },
      {
        icon: 'brick',
        name: 'Svelte.js',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'Vue.js',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'Module Bundlers JS (Rollup, Snowpack..)',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'Electron',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'React',
        rating: '1'
      }
    ]
  },
  {
    groupTitle: 'Back-end',
    items: [
      {
        icon: 'brick',
        name: 'Grails',
        rating: '4'
      },
      {
        icon: 'brick',
        name: 'Micronaut',
        rating: '4'
      },
      {
        icon: 'brick',
        name: 'Quarkus',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'Spock (test)',
        rating: '3'
      },
      {
        icon: 'brick',
        name: 'Spring',
        rating: '2'
      },
      {
        icon: 'brick',
        name: 'Hibernate Envers',
        rating: '2'
      },
      {
        icon: 'brick',
        name: 'Hibernate',
        rating: '2'
      },
      {
        icon: 'brick',
        name: 'Maven, Gradle',
        rating: '2'
      }
    ]
  },
  {
    groupTitle: 'Tooling et plateformes',
    items: [
      {
        icon: 'data',
        name: 'Windows, Linux, MacOS'
      },
      {
        icon: 'data',
        name: 'IntelliJ Idea'
      },
      {
        icon: 'data',
        name: 'Jira'
      },
      {
        icon: 'data',
        name: 'Gitlab CI'
      },
      {
        icon: 'data',
        name: 'Google Firebase'
      },
      {
        icon: 'data',
        name: 'Docker'
      },
      {
        icon: 'data',
        name: 'Plateforme AWS'
      },
      {
        icon: 'data',
        name: 'Jenkins'
      },
      {
        icon: 'data',
        name: 'Figma'
      }
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    groupTitle: 'Soft skills',
    items: [
      {
        name: 'Pédagogie et écoute',
        description: '(important en équipe ou pour travailler avec les métiers!)'
      },
      {
        name: 'Curiosité, investissement dans les projets'
      },
      {
        name: 'Autonomie, implication'
      },
      {
        name: 'Esprit critique et auto-critique',
        description: '(toujours vérifier si la demande est absurde ou si ce que l\'on produit est absurde)'
      }
    ]
  },
  {
    groupTitle: 'Méthodes agiles'
  },
  {
    groupTitle: 'Langues',
    items: [
      {
        name: 'Anglais - Écrit et oral technique',
        description: '(J\'ai pu travailler avec un public international)'
      },
      {
        name: 'Espagnol - Écrit et oral simple'
      },
      {
        name: 'Italien - Écrit simple'
      },
      {
        name: 'Danois - Notions'
      },
      {
        name: 'Russe - Notions'
      },
      {
        name: 'Esperanto - Notions'
      }
    ]
  }
];

export const formations: Formation[] = [
  {
    name: 'Développement sécurisé',
    description: 'Zenika - Jan 2025'
  },
  {
    name: 'Angular avancé',
    description: 'Ib Segos - Avr 2024'
  },
  {
    name: 'Titre pro. développeur Web/Web mobile JS/Java',
    description: 'Simplon - Avr 2021 [Bac+2]'
  },
  {
    name: 'Certification aux méthodes agiles',
    description: 'CNCP - Fév 2021'
  },
  {
    name: 'Certification - Excellence en maîtrise qualité Web',
    description: 'Opquast - Déc 2020'
  },
  {
    name: 'L1 - Langues étrangères appliquées',
    description: 'Université de Nantes - 2016/2017'
  },
  {
    name: 'Bac. Economique et Social',
    description: 'Lycée Francois Rabelais (85200) - 2016'
  }
];

export const experiences: Experience[] = [
  {
    title: 'Ingénieur développement',
    employer: '@CBP',
    date: 'Octobre 2022'
  },
  {
    title: 'Développeur web',
    employer: '@Groupe Creative',
    date: 'Juin 2021'
  },
  {
    title: 'Consultant front & design',
    employer: '@Sumwhere',
    date: 'Jan. 2021'
  },
  {
    title: 'Stage dev. web',
    employer: '@Sumwhere'
  },
  {
    title: 'Petits boulots à la pelle',
    employer: 'Industrie, Livraison, Agriculture, Cuisine, Santé'
  }
];

export const loisirs: Hobby[] = [
  {
    title: 'Cinéma',
    descriptions: ['Mais seulement Shrek et Camping 3']
  },
  {
    title: 'Rando & voyages',
    descriptions: ['Un peu partout en Europe et au-delà']
  },
  {
    title: 'Musique',
    descriptions: ['Electro, Post-Punk, Techno, Classique, Jazz (pas difficile le gars)']
  },
  {
    title: 'Festivals',
    descriptions: ['Bénévole au festival de Dour en Belgique depuis quelques années']
  },
  {
    title: 'Lecture',
    descriptions: ['Romans graphiques et SF principalement']
  },
  {
    title: 'Dev',
    descriptions: [
      'J\'ai une tonne de projets perso à mon actif,',
      'rarement terminés mais toujours avec passion'
    ]
  }
];

export const missions: Mission[] = [
  {
    employer: 'Kereis',
    description: 'Déploiement chez un client dans le secteur des assurances en tant qu\'ingénieur en développement, pour un produit destiné à des filiales internationales.\n' +
      'Contextes techniques et fonctionnels nouveaux et complexes. \n' +
      'Migrations, améliorations techniques et fonctionnelles, ajout de fonctionnalités, extraction de données.\n' +
      'Démos en anglais et proximité générale avec le métier.\n' +
      'Technologies principales : Groovy, Grails, Micronaut, Angular',
    startDate: 'Juin 2021'
  }
];
