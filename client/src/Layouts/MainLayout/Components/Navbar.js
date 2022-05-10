import React from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  Button,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Assets/Images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarData } from './NavbarData';
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              flexGrow={1}
            >
              <Box component='img' src={Logo} height={100} width={300} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {NavbarData.map((item) => (
                  <MenuItem
                    onClick={() => navigate(item.path)}
                    key={item.id}
                    sx={
                      location.pathname === item.path
                        ? (theme) => ({
                            color: theme.palette.common.white,
                            backgroundColor: theme.palette.secondary.main,
                          })
                        : (theme) => ({
                            color: theme.palette.common.black,
                          })
                    }
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Box component='img' src={Logo} height={100} width={200} />
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NavbarData.map((item) => (
                <Button
                  key={item.id}
                  startIcon={item.icon}
                  variant={
                    location.pathname === item.path ? 'contained' : 'text'
                  }
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    '&:hover': { color: theme.palette.common.black },
                  })}
                  onClick={() => navigate(item.path)}
                  color='secondary'
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
