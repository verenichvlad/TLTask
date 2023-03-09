import { gql, useQuery } from '@apollo/client';
import useOnError from './useOnError';

const GET_USERS = gql`
  query GetUsers($limit: Int!, $page: Int!) {
    users(pageSize: $limit, page: $page) {
      id
      firstName
      lastName
      gender
      image
      isAdmin
      email
    }
  }
`;

export default function useGetUsers(props: useGetUsersProps) {
  const { limit, page } = props;
  const { onError } = useOnError();

  const { loading, error, data } = useQuery<UsersRes>(GET_USERS, {
    variables: { limit, page },
    onError,
  });

  return { users: data?.users || [], loading, error };
}

type UsersRes = {
  users: User[];
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'F' | 'M';
  image: string;
  isAdmin: boolean;
  email: string;
};

type useGetUsersProps = {
  limit: number;
  page: number;
};
