import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paperColor: {
    backgroundColor: '#27ae60',
    color: 'white',
  },
  active: {
    backgroundColor: 'blue',
    borderBottom: '1px solid blue',
  },
  noActive: {
    borderBottom: '1px solid blue',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 1,
  },
  sidebarVisible: {
    display: 'flex',
  },
  sidebarHide: {
    display: 'none',
  },
}));

export default useStyles;
