import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  file: {
    fontSize: '16px',
    background: 'white',
    borderRadius: '50px',
    boxShadow: '5px 5px 10px black',
    width: '350px',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
    '&::-webkit-file-upload-button': {
      color: 'white',
      background: theme.palette.primary.main,
      Padding: '20px',
      border: 'none',
      borderRadius: '50px',
      boxShadow: '1px 0 1px #6b4559',
      outline: 'none',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
}));

export default useStyles;
