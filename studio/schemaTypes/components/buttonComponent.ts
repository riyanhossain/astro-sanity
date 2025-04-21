import {defineField, defineType} from 'sanity'

export const buttonComponent = defineType({
  name: 'buttonComponent',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: 'Where should this button link to?',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isExternal',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
})
