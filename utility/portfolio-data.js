const portfolioData = {
  portfolio: {
    stacks: [
      {
        id: 'frontend',
        name: 'Frontend',
        languages: [
          {
            id: 'javascript',
            name: 'Javascript',
            imageSrc: 'images/projects/ability-design.png',
            imageAlt: 'Featured CSS image',
            items: [
              {
                name: 'ReactJs',
                href: '#',
                color: '',
                items: [
                  {
                    name: 'NextJs',
                    href: '#',
                    color: ''
                  },
                  {
                    name: 'Material UI',
                    href: '#',
                    color: ''
                  }    
                ]
              },
              {
                name: 'VueJs',
                href: '#',
                color: '',
                items: [
                  {
                    name: 'NuxtJs',
                    href: '#',
                    color: ''
                  },
                  {
                    name: 'BootstrapVue',
                    href: '#',
                    color: ''
                  }    
                ]
              },
            ]
          },
          {
            id: 'css',
            name: 'CSS',
            imageSrc: 'images/projects/housezzy.png',
            imageAlt: 'Featured CSS image',
            items: [
              {
                name: 'TailwindCss',
                href: '#',
                color: ''
              },
              {
                name: 'BootstrapCss',
                href: '#',
                color: ''
              }
            ]
          }    
        ]
      },
      {
        id: 'backend',
        name: 'Backend',
        languages: [
          {
            id: 'javascript',
            name: 'Javascript',
            items: [
              {
                name: 'NodeJs',
                href: '#',
                color: '',
                items: [
                  {
                    name: 'ExpressJs',
                    href: '#',
                    color: ''
                  },
                  {
                    name: 'Mongoose ORM',
                    href: '#',
                    color: ''
                  },
                  {
                    name: 'Sequelize ORM',
                    href: '#',
                    color: ''
                  }    
                ]
              }
            ]
          },
          {
            id: 'php',
            name: 'PHP',
            items: [
              {
                name: 'OOP',
                href: '#',
                color: ''
              },
              {
                name: 'Laravel',
                href: '#',
                color: ''
              }
            ]
          },
          {
            id: 'python',
            name: 'Python',
            items: [
              {
                name: 'Flask',
                href: '#',
                color: '',
                items: [
                  {
                    name: 'SQLAlchemy',
                    href: '#',
                    color: ''
                  },
                  {
                    name: 'Psycopg2',
                    href: '#',
                    color: ''
                  }
                ]
              }
            ]
          },
          {
            id: 'database',
            name: 'Database',
            items: [
              {
                name: 'MongoDB',
                href: '#',
                color: ''
              },
              {
                name: 'MySQL',
                href: '#',
                color: ''
              },
              {
                name: 'PostgresSQL',
                href: '#',
                color: ''
              },
              {
                name: 'Redis',
                href: '#',
                color: ''
              },
            ]
          },
          {
            id: 'deployment',
            name: 'Deployment',
            items: [
              {
                name: 'RESTful API',
                href: '#',
                color: ''
              },
              {
                name: 'Docker',
                href: '#',
                color: ''
              },
              {
                name: 'Kubernetes',
                href: '#',
                color: ''
              },
              {
                name: 'Git',
                href: '#',
                color: ''
              },
              {
                name: 'Testing',
                href: '#',
                color: ''
              }
            ]
          }
        ]
      }
    ]
  },
  projects: [
    {
      id: 'most-recent-projects',
      title: 'Most Recent Projects',
      projects: [
        {
          id: 'housezzy-studio',
          name: 'Housezzy Studio',
          url: 'https://housezzy.com',
          image: 'images/projects/housezzy.png',
          description: 'An architectural and engineering firm.'
        }, {
          id: 'ability-design',
          name: 'Ability Design',
          url: 'https://abilitydesign.co',
          image: 'images/projects/ability-design.png',
          description: 'A modern branding business.'
        }, {
          id: 'cortell',
          name: 'CoreTell',
          url: 'https://coretell.blogspot.com',
          image: 'images/projects/coretell.png',
          description: 'A new age blogging platform for latest tech updates.'
        }
      ]
    }, {
      id: 'other-projects',
      title: 'Other Project',
      projects: [
        {
          id: 'career-strive',
          name: 'Career Strive',
          url: '',
          image: 'images/projects/career-strive.png',
          description: 'A computer based testing and selection system for employment.'
        }, {
          id: 'form-template-search-app',
          name: 'Form Template Search App',
          url: 'https://astongemmy.github.io/form-template-search',
          image: 'images/projects/form-template-search.png',
          description: 'A simple React app for finding suitable form template.'
        }
      ]
    }
  ],
  clients: [
    {
      name: 'Housezzy Studio',
      image: 'images/clients/housezzy-1.png',
      color: 'text-yellow-600',
      bgColor: 'bg-white',
      borderColor: 'border-yellow-500'
    }, {
      name: 'Ability Design',
      image: 'images/clients/ability-design.svg',
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      borderColor: 'border-green-500'
    }
  ]
}

export default portfolioData;