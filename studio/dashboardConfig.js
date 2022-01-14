export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e153763bc6d2f77309b6c9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n1qf5svp',
                  apiId: 'a4889c0f-c316-466a-9309-c631a6dd8b29'
                },
                {
                  buildHookId: '61e1537688d6c3e3d3a2b85e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-okd1ws4m',
                  apiId: '0af2d13d-ba85-4eb0-8c10-f122d9f464c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sherozsamatov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-okd1ws4m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
