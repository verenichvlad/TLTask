import useGetUsers from '@/hooks/useGetUsers';
import { LIMIT } from '@/infrastructure/constants';
import {
  CircularProgress,
  Container,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import UsersListEntry from './UsersListEntry';
import useGetUserPagesCount from '@/hooks/useGetUserPagesCount';
import { Box } from '@mui/system';
import { red } from '@mui/material/colors';

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { pagesCount } = useGetUserPagesCount();

  const { users, loading, error } = useGetUsers({
    limit: LIMIT,
    page: currentPage,
  });

  if (error) {
    return (
      <Typography variant="subtitle1" sx={{ color: red[200] }}>
        Error occured while trying to fetch data
      </Typography>
    );
  }

  return (
    <Container sx={{ mb: 3, mt: 3 }}>
      <Stack spacing={5} alignItems="center">
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}

        <TableContainer component={Paper}>
          <Table sx={{ height: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1">First Name</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1">Second Name</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1">Email</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1">Gender</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1">Admin</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => (
                <UsersListEntry key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          onChange={handlePageChange}
          sx={{ margin: '10px auto' }}
          count={pagesCount}
          color="primary"
        />
      </Stack>
    </Container>
  );

  function handlePageChange(_: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }
}
