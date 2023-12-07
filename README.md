This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dev Guidelines

#### Token for local development use

Just head to. https://www.urllize.com/dash/user/api to create a new token and put it in .env.local (you can copy from .env.development)
If need login, please use https://www.urllize.com/try_demo to login, password redirhub123

#### I18N

Don't worry. Just left English strings

#### Comtomizable skin

1, Customizable colors and the ability to support light/dark mode.

2, we need to build project to 3 different platforms which need different color preferences.

#### Others

1. For parts of the UI in Figma that do not have detailed expressions (like loading status, hover effects etc...), please refer to https://app.bitly.com/

2. If an external link is involved in the UI, please use .env or similar to dynamically configure it. If the variable is not given, please hide this external link.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
