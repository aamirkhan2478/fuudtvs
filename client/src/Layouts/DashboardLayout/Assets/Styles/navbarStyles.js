import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  menuHover: {
    '&:hover': {
      backgroundColor: 'blue',
      color:theme.palette.common.white
    },
  },
}));

export default useStyles;
