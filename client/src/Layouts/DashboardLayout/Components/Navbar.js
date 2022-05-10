import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import CustomDialog from '../../ReusableComponents/CustomDialog';
import useStyles from '../Assets/Styles/navbarStyles';
import Profile from '../Assets/Images/profile.svg';
import { logoutUser } from '../../../Redux/Actions/authAction';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setVisible, visible }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [confirmDialog, setConfirmDialog] = React.useState({
    isOpen: false,
    title: '',
    subtitle: '',
    color: '',
    text: '',
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = jwt_decode(localStorage.getItem('authToken'));

  const Logout = () => {
    setConfirmDialog({
      isOpen: true,
      title: 'Are you sure you want to logout?',
      subtitle:
        'Select "Logout" below if you are ready to end your current session.',
      color: 'error',
      text: 'Logout',
      onConfirm: () => {
        dispatch(logoutUser());
        navigate('/');
      },
    });
  };
  return (
    <>
      <CustomDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={() => setVisible(!visible)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            flexGrow={1}
            color='white'
            fontWeight='bold'
          >
            Welcome Back: {user.name}
          </Typography>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <Avatar>
              <Box component='img' src={Profile} alt='Profile' />
            </Avatar>
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Button className={classes.menuHover} onClick={Logout}>
              <MenuItem>Logout</MenuItem>
            </Button>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
