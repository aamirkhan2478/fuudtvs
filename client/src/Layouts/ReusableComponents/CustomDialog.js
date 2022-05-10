import { NotListedLocation } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: 'center',
  },
  dialogTitle: {
    textAlign: 'center',
  },
  dialogAction: {
    justifyContent: 'center',
  },
  titleIcon: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}));
const CustomDialog = ({ confirmDialog, setConfirmDialog }) => {
  const classes = useStyles();
  return (
    <>
      <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
        <DialogTitle className={classes.dialogTitle}>
          <IconButton disableRipple className={classes.titleIcon}>
            <NotListedLocation />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography variant='h6'>{confirmDialog.title}</Typography>
          <Typography variant='subtitle1'>{confirmDialog.subtitle}</Typography>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button
            variant='contained'
            color='inherit'
            onClick={() =>
              setConfirmDialog({ ...confirmDialog, isOpen: false })
            }
          >
            No
          </Button>
          <Button
            variant='contained'
            color={confirmDialog.color}
            onClick={confirmDialog.onConfirm}
          >
            {confirmDialog.text}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomDialog;
