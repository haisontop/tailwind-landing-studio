export default {
  name: "hero",
  title: "Home Hero",
  type: "document",
  fields: [
    {
      name: "hero_images",
      title: "Hero images",
      type: "array",
      of: [
        {
          title: "Hero Image",
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
