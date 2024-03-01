// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    //kind: 'local',
    kind: 'github',
    repo: {
        owner: 'aledebarba',
        name: 'cms-keystatic-astro',
    }
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        coverImage: fields.image({
            label: "Cover Image",
            directory: "public/images/posts",
          }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    links: collection({
      label: 'Links',
      slugField: 'title',
      path: 'src/content/links/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        url: fields.url({
            label: "Link Url",
            validation: {
                isRequired: true,
            }
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    })},
    singletons: {
        landingPageSettings: singleton({
            label: 'Site Settings',
            schema: {
                slug: fields.slug({
                    name: { label:"Slug" },
                    slug: { generate: ()=>"settings"  },
                }),
                heroCts: fields.text({
                    label: "Hero Call To Action",
                    defaultValue: "Welcome!",
                }),
                heroImage: fields.image({
                    label: "Hero Image",
                    directory: "public/images/home",
                    publicPath: "/images/home/",
                  }),
                heroButton: fields.text({
                    label: "Hero Button Content",
                    defaultValue: "Learn More",
                }),
                heroButtonLink: fields.text({
                    label: "Hero Button Link",
                    defaultValue: "/",
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                })
            },
        })},
    });