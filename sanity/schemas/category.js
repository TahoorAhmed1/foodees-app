import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
})
