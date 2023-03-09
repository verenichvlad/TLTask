import useLogout from '@/hooks/useLogout';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export default function Header() {
  const { logout } = useLogout();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User List
        </Typography>
        <Button onClick={logout} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
