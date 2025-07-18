import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from '../prisma';
import { bearer, jwt, openAPI } from 'better-auth/plugins';

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: { enabled: true },
  plugins: [jwt(), openAPI(), bearer()],
});

export { auth };
