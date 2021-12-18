export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "heroText",
      title: "Hero Text",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "offerings",
      title: "Our Offering",
      type: "array",
      of: [
        {
          type: "object",
          name: "offering",
          title: "Offering",
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
            {
              name: 'mobileIcon',
              type: 'image',
              title: 'Mobile Icon',
              options: {
                hotspot: false,
              },
            },
          ],
        },
      ],
    },
    {
      name: "specialities",
      title: "Our specialities",
      type: "array",
      of: [
        {
          type: "object",
          name: "specialist",
          title: "Specialist",
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'backgroundImage',
              type: 'image',
              title: 'Background image',
              options: {
                hotspot: false,
              },
            },
          ],
        },
      ],
    },
  ],
};
