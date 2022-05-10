import { makeStyles } from '@mui/styles';
import HomeImage from '../Images/Home.jpg';
const useStyles = makeStyles((theme) => ({
  landing: {
    background: `url(${HomeImage}) no-repeat center center/cover`,
    position: 'relative',
    height: '100vh',
  },
  darkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  landingInner: {
    color: theme.palette.common.white,
    height: '100%',
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export default useStyles;
