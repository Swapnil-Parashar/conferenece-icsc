import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{ backgroundColor: "#0b1c2c" }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo" href="/">
          <img
            src="https://cuh.ac.in/images/logo6.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            href="/"
          >
            ICSC 2025
          </Button>
        </Typography>

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
              href="https://www.fsm.ac.in/conference/fimc2024/call-for-papers"
            >
              Call for Papers
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/guidelines"
            >
              Submission Guidelines
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/revision-instructions"
            >
              Revision Instructions
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/publication-opportunities"
            >
              Publication Opportunities
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/presentation"
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

        {/* "More" Dropdown */}
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
            {/* Hotel & Travel Dropdown */}
            <MenuItem onClick={(event) => handleMenuOpen(event, "hotelTravel")}>
              Hotel & Travel
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/how-to-reach-fore"
            >
              How to reach FORE
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/hotel-and-accommodation"
            >
              Hotel and Accommodation
            </MenuItem>

            {/* Sponsors & Exhibitors */}
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/sponsors-exhibitors"
            >
              Sponsors & Exhibitors
            </MenuItem>

            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.fsm.ac.in/conference/fimc2024/contact-us"
            >
              Contact Us
            </MenuItem>
          </Menu>
        </div>

        {/* Login/Signup Button */}
        <Button variant="contained" color="primary" sx={{ mx: 2 }} href="/login">
          Login
        </Button>

        {/* Logo at the end */}
        <IconButton edge="end" color="inherit" aria-label="logo" href="/">
          <img
            src="https://cuh.ac.in/images/logo6.png"
            alt="Logo"
            style={{ height: "40px", marginLeft: "16px" }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
