import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageComponent',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for screen readers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption to display below the image',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'Width of the image (e.g., "100%", "500px")',
      initialValue: '100%',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max Width',
      type: 'string',
      description: 'Maximum width of the image (e.g., "800px")',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Full Width', value: 'fullWidth'},
          {title: 'Contained', value: 'contained'},
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'fullWidth',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Image',
        subtitle: 'Image Component',
        media,
      }
    },
  },
})
