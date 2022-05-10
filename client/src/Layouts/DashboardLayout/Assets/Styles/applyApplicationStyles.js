import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  textRed: {
    color: theme.palette.error.main,
  },
  textBlue: {
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
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
  addImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    background: '#d2ddff',
    color: '#000',
    width: '200px',
    height: '200px',
    border: '1px solid teal',
    backgroundColor: '#d2ddff',
    borderRadius: 10,
    objectFit: 'cover',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  submitBtn: {
    color: 'white',
    width:'300px'
  },
}));

export default useStyles;
