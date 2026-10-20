import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Entries get their array position as id, so editors never have to write ids by hand.
function listFile(path: string) {
  return file(path, {
    parser: (text) =>
      JSON.parse(text).map((entry: object, index: number) => ({ id: String(index), ...entry })),
  });
}

function singleFile(path: string, id: string) {
  return file(path, { parser: (text) => [{ id, ...JSON.parse(text) }] });
}

const link = z.object({ label: z.string(), url: z.url() });

const profile = defineCollection({
  loader: singleFile('src/content/profile.json', 'profile'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string(),
    summary: z.string(),
    email: z.email(),
    phone: z.string().optional(),
    photo: z.string().optional(),
    cv: z.string(),
    links: z.array(link),
    web3formsKey: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: listFile('src/content/experience.json'),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().optional(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: listFile('src/content/projects.json'),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    link: z.url().optional(),
  }),
});

const certifications = defineCollection({
  loader: listFile('src/content/certifications.json'),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    year: z.string().optional(),
    link: z.url().optional(),
  }),
});

const education = defineCollection({
  loader: listFile('src/content/education.json'),
  schema: z.object({
    institution: z.string(),
    qualification: z.string(),
    start: z.string(),
    end: z.string().optional(),
    details: z.string().optional(),
  }),
});

const skills = defineCollection({
  loader: listFile('src/content/skills.json'),
  schema: z.object({
    group: z.string(),
    items: z.array(z.string()).min(1),
  }),
});

export const collections = { profile, experience, projects, certifications, education, skills };
