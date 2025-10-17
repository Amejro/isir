import { file, glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: ({image}) =>
		z.object({
			title: z.string(),
			// teaser: z.string(),
			date: z.date(),
			thumbnail: image(),
		}),
});

const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
	schema: ({image}) =>
		z.object({
			title: z.string(),
			teaser: z.string(),
			autor: z.string(),
			date: z.date(),
			thumbnail: image(),
		}),
});



const project = defineCollection({
	loader: file("src/data/projects.json"),
	schema: ({image}) =>
		z.object({
			id: z.string(),
			title: z.string(),
			subtitle: z.string(),
			target: z.number(),
			raised: z.number(),
			cover: image(),
		}),
});



export const collections = { blog, news,project };

