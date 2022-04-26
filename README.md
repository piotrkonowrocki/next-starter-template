# Next Starter Template
A personal [Next.js](https://nextjs.org/) preconfigured starter template that could be used with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents
1. [System Requirements](#system-requirements)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage & philosophy](#usage--philosophy)
    * [Code style](#code-style)
    * [File structure and naming conventions](#file-structure-and-naming-conventions)
    * [Masterpages](#masterpages)

## System Requirements
* Node.js 12.22.0 or later

## Features
This starter template comes with preinstalled and ready to use features:
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Sass](https://github.com/sass/sass)
* [eslint](https://github.com/eslint/eslint)
* [stylelint](https://github.com/stylelint/stylelint)
* [prettier](https://github.com/prettier/prettier)
* [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
* [sanitize.css](https://github.com/csstools/sanitize.css)
* [classnames](https://github.com/JedWatson/classnames)

## Installation
To get started, use the following command:
```bash
npx create-next-app --example https://github.com/piotrkonowrocki/next-starter-template
```

Inside your newly created app, you can run several commands.

To start development server use
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [`pages/index.tsx`](/pages/index.tsx). The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To build app and run it production mode use
```bash
npm run build
npm run start
```


## Usage & philosophy

### Code style
This template uses both [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) for subjective configuration code style validation.
* [eslint](https://github.com/eslint/eslint) is set up at `8.14.0` version,
* [eslint](https://github.com/eslint/eslint) configuration is extending `next/core-web-vitals`, `plugin:react/recommended`, `plugin:react-hooks/recommended` and `plugin:@typescript-eslint/recommended`,
* [eslint](https://github.com/eslint/eslint) is using [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) plugin for auto sort imports,
* [stylelint](https://github.com/stylelint/stylelint) is set up at `14.7.0` version,
* [stylelint](https://github.com/stylelint/stylelint) configuration is extending `stylelint-config-standard`,
* both [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) are using `prettier` plugins to display `prettier` deviations as errors.


### File structure and naming conventions
This template comes with basic folders structure and naming intention that can be changed and adjusted to your needs.

In imports, alias `@/` is used to reach `src/` directory. This allows to easly distinguish internal packages from npm and also is important for import sorting.

Starting structure includes:
```
┌── pages
├── public
└── src
    ├── assets
    ├── components
    │   ├── layout
    │   ├── masterpage
    │   └── ui
    ├── dictionaries
    ├── styles
    │   ├── base
    │   ├── layout
    │   └── utils
    ├── types
    └── utils
```
This is just a base structure, during your development you will need to add more top level directories like `api`, `contexts` or `hooks`.

Top level directories should be used only to store files used in between more than one component. Any `styles`, `utils` files etc., that belongs only to only one component should be placed in the same directory, as this component.

All files names except `components` and `styles` should be suffixed with file purpose before file extension.

Eg.: see [`dictionaries/site.dictionary.ts`](src/dictionaries/site.dictionary.ts)
### Masterpages
This template uses extended [Layout](https://nextjs.org/docs/basic-features/layouts) feature from [Next.js](https://nextjs.org/).

To create new layout, create new directory inside [`/src/components/masterpages/`](/src/components/masterpages/) with new masterpage and include it into [`/src/components/masterpages/masterpage.tsx`](/src/components/masterpages/masterpage.tsx) as new type of template.
