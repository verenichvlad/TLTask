import { User } from '@/hooks/useGetUsers';
import { Avatar, Checkbox, TableCell, TableRow } from '@mui/material';

export default function UsersListEntry(props: UsersListEntryProps) {
  const { user } = props;

  const fullGender = user.gender === 'M' ? 'Male' : 'Female';

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">
        <Avatar src={user.image} alt="User Avatar" />
      </TableCell>
      <TableCell align="right">{user.firstName}</TableCell>
      <TableCell align="right">{user.lastName}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{fullGender}</TableCell>
      <TableCell align="right">
        <Checkbox disabled checked={user.isAdmin} />
      </TableCell>
    </TableRow>
  );
}

type UsersListEntryProps = {
  user: User;
};
