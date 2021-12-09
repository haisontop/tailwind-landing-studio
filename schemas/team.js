export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "team_images",
      title: "Member images",
      type: "array",
      of: [
        {
          title: "Member Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
