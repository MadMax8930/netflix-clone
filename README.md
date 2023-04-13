## Netflix Clone with [`Next.js`] with Google authentication

- React TS -> Frontend Library
- Next.js -> Server side rendering
- Tailwind -> Styling
- Prisma -> Data abstraction layer
- MongoDB -> Storage needs
- NextAuth -> Authentication
- Vercel -> Deployment

### Run server:

```bash
npm run dev
# or
yarn dev
```

### Documentation:

Next.js docs: [https://nextjs.org/docs].
Tailwind docs: [https://tailwindcss.com/docs/installation].

Tsx files in the `pages` directory are the pages.
For example `pages/auth.tsx`redirects to (http://localhost:3000/auth).
Pages can be edited by modifying `pages/index.tsx` (http://localhost:3000).

The `pages/api` directory is mapped to `/api/*`. 
Files in this directory are treated as API routes or endpoints:
[https://nextjs.org/docs/api-routes/introduction]

### Dependencies

- npx create-next-app --typescript ./    (Y,Y,N,N,@)

- npm install -D prisma
- npx prisma init
- npm install @prisma/client
- npx prisma db push
- npm install next-auth
- npm install bcrypt -D @types/bcrypt
- npm install axios
- npm install react-icons
- npm install @next-auth/prisma-adapter
- npm install swr
- npm install lodash -D @types/lodash
- npm install zustand

## Project deployed on Vercel: 

[https://nextflix-replica.vercel.app/]