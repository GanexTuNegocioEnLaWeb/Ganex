import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date(),
		heroImage: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
	}),
});

const proyectos = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date(),
		heroImage: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog, proyectos };
