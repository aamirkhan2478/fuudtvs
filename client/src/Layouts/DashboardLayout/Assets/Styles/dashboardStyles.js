import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  textGreen: {
    color: theme.palette.primary.main,
  },
  textBlue:{
    color: theme.palette.secondary.main
  }
}));

export default useStyles;
