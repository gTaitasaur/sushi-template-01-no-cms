import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const menuCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{json,yaml,yml,md,mdx}', base: './src/content/menu' }),
  schema: ({ image }) => z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
    category: z.string(),
    image: image().optional(),
    featured: z.boolean().optional(),
  })
});

const locationsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{json,yaml,yml,md,mdx}', base: './src/content/locations' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    phone: z.string(),
    schedule: z.string(),
    mapUrl: z.string().optional(),
  })
});

export const collections = {
  'menu': menuCollection,
  'locations': locationsCollection,
};
