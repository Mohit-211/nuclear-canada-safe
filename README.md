# Nuclear Safety Canada

A professional single-page website for **Radiation Safety & Nuclear Regulatory Services in Canada**.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

```bash
npm install
cp .env.example .env   # then fill in the email settings
npm run dev            # http://localhost:3000
```

`npm run build` and `npm start` run the production build.

## Contact Form

The form posts to `src/app/api/contact/route.ts`, which emails each enquiry through Gmail SMTP.
The required settings are listed in `.env.example`. `SMTP_PASSWORD` must be a Google App Password.
