---
layout: blog
title: What are Content Collections?
date: 2025-10-16T01:10:00.000+00:00
thumbnail: ../../assets/images/sea.png
rating: 5
---


## What are Content Collections?

You can define a **collection** from a set of data that is structurally similar. This can be a directory of blog posts, a JSON file of product items, or any data that represents multiple items of the same shape.

Collections stored locally in your project or on your filesystem can have entries of Markdown, MDX, Markdoc, YAML, TOML, or JSON files:

* Directorysrc/
* Directory

  **newsletter/**

  the “newsletter” collection
* Directory

  **authors/**

  the “author” collection

With an appropriate collection loader, you can fetch remote data from any external source, such as a CMS, database, or headless payment system.

## TypeScript configuration for collections

Content collections rely on TypeScript to provide Zod validation, Intellisense and type checking in your editor. If you are not extending one of Astro’s `strict` or `strictest` TypeScript settings, you will need to ensure the following `compilerOptions` are set in your `tsconfig.json`:

## Defining Collections

Individual collections use `defineCollection()` to configure:

* a 

  `loader`

   for a data source (required)
* a 

  `schema`

   for type safety (optional, but highly recommended!)

### The collection config file

tsconfig.json
