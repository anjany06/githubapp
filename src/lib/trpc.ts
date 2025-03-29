import { createTRPCClient } from '@trpc/react-query';
import { appRouter } from '@/server/api/root';
import { httpLink } from '@trpc/client';

const url = '/api/trpc';

export const trpc = createTRPCClient(appRouter, {
  links: [
    httpLink({
      url,
    }),
  ],
});