import { AUTH_ERROR, GQL_ERROR_CODES, JWT_EXPIRED } from '@/infrastructure/constants';
import { ApolloError } from '@apollo/client';
import { useRouter } from 'next/router';

export default function useOnError() {
  const router = useRouter();

  function onError(error: ApolloError) {
    const errorCodes = error.graphQLErrors.map(gqlError => gqlError.extensions.code) as number[];
    const isAuthError =
      errorCodes.includes(GQL_ERROR_CODES[AUTH_ERROR]) ||
      errorCodes.includes(GQL_ERROR_CODES[JWT_EXPIRED]);

    if (isAuthError) {
      router.push('/login');
    } else {
      console.log(error.message);
    }
  }

  return { onError };
}
