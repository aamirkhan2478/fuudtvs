import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  blueText: {
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
