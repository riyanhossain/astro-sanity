import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'spacer',
  title: 'Spacer',
  type: 'object',
  fields: [
    defineField({
      name: 'height',
      title: 'Default Height',
      type: 'number',
      description:
        'Default spacing height in pixels (applies to all screen sizes unless overridden)',
      validation: (Rule) => Rule.required().min(0).max(500),
      initialValue: 40,
    }),
    defineField({
      name: 'xsHeight',
      title: 'Extra Small Screens (>=480px)',
      type: 'number',
      description: 'Height for mobile phones (in pixels)',
    }),
    defineField({
      name: 'smHeight',
      title: 'Small Screens (≥640px)',
      type: 'number',
      description: 'Height for small screens and up (in pixels)',
    }),
    defineField({
      name: 'mdHeight',
      title: 'Medium Screens (≥768px)',
      type: 'number',
      description: 'Height for medium screens and up (in pixels)',
    }),
    defineField({
      name: 'lgHeight',
      title: 'Large Screens (≥1024px)',
      type: 'number',
      description: 'Height for large screens and up (in pixels)',
    }),
    defineField({
      name: 'xlHeight',
      title: 'Extra Large Screens (≥1280px)',
      type: 'number',
      description: 'Height for extra large screens and up (in pixels)',
    }),
  ],
  preview: {
    select: {
      height: 'height',
    },
    prepare({height}) {
      return {
        title: 'Spacer',
        subtitle: `Default Height: ${height || 40}px`,
      }
    },
  },
})
