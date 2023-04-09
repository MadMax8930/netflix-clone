## Netflix Clone with [`Next.js`]

- React TS -> Frontend Library
- Next.js -> Server side rendering
- Tailwind -> Styling
- Prisma -> Data abstraction layer
- MongoDB -> Storage needs
- NextAuth -> Authentication
- Vercel -> Deployment

### Dependencies

npx create-next-app --typescript ./    (Y,Y,N,N,@)
npm install -D prisma
npx prisma init
npm install @prisma/client
npx prisma db push (connecting prisma with mongodb)
npm install next-auth
npm install bcrypt
npm install -D @types/bcrypt

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Docs

Next.js documentation: [https://nextjs.org/docs].
Tailwind documentation: [https://tailwindcss.com/docs/installation].

Create tsx files in the `pages` directory to make new pages.
For example `pages/test.tsx`redirects to (http://localhost:3000/test).
Pages can be edited by modifying `pages/index.tsx` (http://localhost:3000).

The `pages/api` directory is mapped to `/api/*`. 
Files in this directory are treated as API routes or endpoints:
[https://nextjs.org/docs/api-routes/introduction]

## Project deployed on Vercel: 

[]