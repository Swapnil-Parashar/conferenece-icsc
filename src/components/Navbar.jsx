import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext"; // Import AuthContext for user authentication state
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { currentUser, logout } = useAuth(); // Get current user and logout function from AuthContext
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const menuItems = [
    { text: "About the Conference", href: "/about" },
    { text: "Conference Committee", href: "/committee" },
    { text: "FAQ", href: "/faq" },
    { text: "Call for Papers", href: "/" },
    { text: "Submission Guidelines", href: "/" },
    { text: "Revision Instructions", href: "/" },
    { text: "Publication Opportunities", href: "/" },
    { text: "Presentation", href: "/" },
    { text: "Awards", href: "/awards" },
    { text: "Event", href: "/events" },
    { text: "Important Dates", href: "/importantDates" },
    { text: "How to reach FORE", href: "/" },
    { text: "Hotel and Accommodation", href: "/" },
    { text: "Sponsors & Exhibitors", href: "/" },
    { text: "Contact Us", href: "/" },
  ];

  const drawerList = () => (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={index}
          component="a"
          href={item.href}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ backgroundColor: "#0b1c2c" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo" href="/">
            <img
              src="https://cuh.ac.in/images/logo6.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Button color="inherit" href="/">
              ICSC 2025
            </Button>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerList()}
              </Drawer>
            </>
          ) : (
            <>
              {/* About the Conference */}
              <div
                onMouseEnter={(event) => handleMenuOpen(event, "aboutConference")}
                onMouseLeave={handleMenuClose}
              >
                <Button color="inherit">About</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={currentMenu === "aboutConference"}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/about"
                  >
                    About the Conference
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/committee"
                  >
                    Conference Committee
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/faq"
                  >
                    FAQ
                  </MenuItem>
                </Menu>
              </div>

              {/* Submission Dropdown */}
              <div
                onMouseEnter={(event) => handleMenuOpen(event, "submission")}
                onMouseLeave={handleMenuClose}
              >
                <Button color="inherit">Submission</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={currentMenu === "submission"}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/"
                  >
                    Call for Papers
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/"
                  >
                    Submission Guidelines
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/"
                  >
                    Revision Instructions
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                    href="/"
                  >
                    Publication Opportunities
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                  >
                    Presentation
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="/awards">
                    Awards
                  </MenuItem>
                </Menu>
              </div>

              {/* Event */}
              <Button
                color="inherit"
                href="/events"
              >
                Event
              </Button>

              {/* Important Dates */}
              <Button
                color="inherit"
                href="/importantDates"
              >
                Important Dates
              </Button>

              {/* More Dropdown */}
              <div
                onMouseEnter={(event) => handleMenuOpen(event, "more")}
                onMouseLeave={handleMenuClose}
              >
                <Button color="inherit">More</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={currentMenu === "more"}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem onClick={(event) => handleMenuOpen(event, "hotelTravel")}>
                    Hotel & Travel
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                  >
                    How to reach FORE
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                  >
                    Hotel and Accommodation
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                  >
                    Sponsors & Exhibitors
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component="a"
                  >
                    Contact Us
                  </MenuItem>
                </Menu>
              </div>

              {/* Login/Logout Button */}
              {currentUser ? (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mx: 2 }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mx: 2 }}
                  href="/login"
                >
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
