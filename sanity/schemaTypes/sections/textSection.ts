import {defineField, defineType} from 'sanity'

export const textSection = defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().max(1),
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'array',
      of: [{type: 'buttonComponent'}],
      validation: (rule) => rule.max(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content.0.children.0.text',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Text Section',
        subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : 'No content provided',
      }
    },
  },
})
