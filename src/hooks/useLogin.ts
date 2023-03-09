import { TOKEN } from '@/infrastructure/constants';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function useLogin() {
  const router = useRouter();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  function onCompleted(data: LoginRes) {
    localStorage.setItem(TOKEN, data.login.token);
    router.push('/');
  }

  return { login, loading, error };
}

type LoginRes = {
  login: {
    token: string;
  };
};
