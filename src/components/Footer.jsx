import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#0b1c2c", paddingTop: "20px", color: "white" }}
    >
      <Container sx={{ padding: "10px" }}>
        <Grid container spacing={4}>
          {/* Central University of Haryana Section */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box sx={{ marginBottom: { xs: 2, sm: 3 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: 1,
                }}
              >
                CENTRAL UNIVERSITY OF HARYANA
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
                Mahendragarh, Haryana - 123031 (India)
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: 2,
                }}
              >
                Quick Links
              </Typography>
              <hr style={{ borderColor: "white" }} />
              <Typography>
                <Link
                  href="/about"
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
                  href="/events"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: 2,
                }}
              >
                Contact Information
              </Typography>
              <hr style={{ borderColor: "white" }} />
              <Typography
                sx={{
                  marginBottom: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Phone: +91- 011-41242424
                <br />
                Email: icsc2025@gmail.com
                <br />
                <span style={{ marginLeft: "50px" }}>
                  icsc.conveners@icsc.ac.in
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box
        sx={{
          backgroundColor: "#095a83",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              textAlign: "center",
            }}
          >
            © 2025 | ICSC. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
