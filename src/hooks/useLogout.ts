import { TOKEN } from '@/infrastructure/constants';
import { useRouter } from 'next/router';

export default function useLogout() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem(TOKEN);
    router.push('/login');
  }

  return { logout };
}
