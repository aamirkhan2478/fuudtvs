import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navlink: {
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
      borderBottom: '1px solid black',
    },
  },
}));

export default useStyles;
