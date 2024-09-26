import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#0b1c2c", paddingTop: "20px", color: "white" }}
    >
      <Container sx={{ padding: "10px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box sx={{ marginBottom: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", marginBottom: 1 }}
              >
                CENTRAL UNIVERSITY OF HARYANA
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Mahendragarh, Haryana - 123031 (India)
              </Typography>
            </Box>
          </Grid>
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", marginBottom: 2 }}
              >
                Quick Links
              </Typography>
              <hr style={{ borderColor: "white" }} />
              <Typography>
                <Link
                  href="https://www.fsm.ac.in/conference/fimc2024/about-the-conference"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    margin: "5px 0",
                  }}
                >
                  About the Conference
                </Link>
                <Link
                  href="https://www.fsm.ac.in/conference/fimc2024/event"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    margin: "5px 0",
                  }}
                >
                  Event
                </Link>
                <Link
                  href="https://www.fsm.ac.in/conference/fimc2024/submission"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    margin: "5px 0",
                  }}
                >
                  Submission
                </Link>
                <Link
                  href="https://www.fsm.ac.in/conference/fimc2024/vi-information"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    margin: "5px 0",
                  }}
                >
                  Visa Information
                </Link>
                <Link
                  href="https://www.fsm.ac.in/conference/fimc2024/reg-information"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    margin: "5px 0",
                  }}
                >
                  Registration Information
                </Link>
              </Typography>
            </Box>
          </Grid>
          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", marginBottom: 2 }}
              >
                Contact Information
              </Typography>
              <hr style={{ borderColor: "white" }} />
              <Typography sx={{ marginBottom: 2 }}>
                Phone: +91- 011-41242424
                <br />
                Email: fimc2024@fsm.ac.in
                <br />
                <span style={{ marginLeft: "50px" }}>
                  fimc.conveners@fsm.ac.in
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box sx={{ backgroundColor: "#095a83", padding: "10px" }}>
        <Container>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            © 2024 | FIMC. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
