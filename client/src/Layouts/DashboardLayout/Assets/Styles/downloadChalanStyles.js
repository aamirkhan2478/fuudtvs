import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  blueText: {
    color: theme.palette.secondary.main,
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20,
    width: 300,
    height: 300,
    padding: 4,
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  chalanImage: {
    borderRadius: 20,
    width: 300,
    height: 300,
  },
  paidChalanText: {
    marginTop: 7,
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
}));

export default useStyles;
