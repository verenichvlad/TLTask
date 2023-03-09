import { LIMIT } from '@/infrastructure/constants';
import { gql, useQuery } from '@apollo/client';
import useOnError from './useOnError';

const GET_USERS_TOTAL = gql`
  query GetUsersTotal {
    usersTotal
  }
`;

export default function useGetUserPagesCount() {
  const { onError } = useOnError();

  const { data } = useQuery<UsersTotalRes>(GET_USERS_TOTAL, {
    onError,
  });

  const pagesCount = data?.usersTotal ? data?.usersTotal / LIMIT : 1;

  return { pagesCount: Math.ceil(pagesCount) };
}

type UsersTotalRes = {
  usersTotal: number;
};
