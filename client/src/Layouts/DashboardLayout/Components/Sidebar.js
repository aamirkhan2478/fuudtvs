import React, { useEffect } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import useStyles from "../Assets/Styles/sidebarStyles";
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { adminData, studentData, userData } from "./SidebarData";
import Logo from "../Assets/Images/Logo.png";
import { useDispatch } from "react-redux";
import { loadUser } from "../../../Redux/Actions/authAction";

const drawerWidth = 240;
const Sidebar = ({ visible }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const loadUsers = () => {
    dispatch(loadUser());
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const adminLinks = (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {adminData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
        className={visible ? classes.sidebarVisible : classes.sidebarHide}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {adminData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );

  const studentLinks = (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {studentData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
        className={visible ? classes.sidebarVisible : classes.sidebarHide}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {studentData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );

  const userLinks = (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {userData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", sm: "flex" },
        }}
        classes={{ paper: classes.paperColor }}
        className={visible ? classes.sidebarVisible : classes.sidebarHide}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Box
            component="div"
            onClick={() => navigate("/")}
            sx={{
              marginBottom: 2,
              marginTop: 2,
              cursor: "pointer",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src={Logo} alt="Logo" height={60} width={60} />
            <Typography variant="span">FUUDTVS</Typography>
          </Box>
          <Divider />
          {userData.map((item) => (
            <List key={item.id}>
              <ListItem
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path
                    ? classes.active
                    : classes.noActive
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );

  const user = jwt_decode(localStorage.getItem("authToken"));
  return (
    <>
      {user.role === "Admin"
        ? adminLinks
        : user.role === "Student"
        ? studentLinks
        : userLinks}
    </>
  );
};

export default Sidebar;
