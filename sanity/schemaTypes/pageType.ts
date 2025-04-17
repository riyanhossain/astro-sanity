import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',

  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Basic info
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),

    // Page builder with sections
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      of: [{type: 'heroSection'}, {type: 'textSection'}],
      validation: (rule) => rule.required().min(1),
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
            },
          ],
        },
      },
    }),

    // SEO fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'This title is used for search engines and browser tabs',
      validation: (rule) =>
        rule.max(60).warning('Longer titles may be truncated in search results'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Longer descriptions may be truncated in search results'),
    }),

    //oG image
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'seo',
      options: {
        accept: 'image/*',
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      sections: 'sections',
      heroImage: 'sections.0.image',
      ogImage: 'ogImage',
    },
    prepare({title, slug, heroImage, ogImage}) {
      return {
        title: title,
        subtitle: slug,
        media: ogImage ?? heroImage,
      }
    },
  },
})
