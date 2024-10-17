import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { nitinGoyal, ntNghe, sardarIslam, manjuLata } from "../assets"; // Assuming these images are correctly imported

// Array of editors' data including individual images
const editors = [
  {
    name: "Dr. Nitin Goyal",
    title: "Assistant Professor, Central University of Haryana, India",
    image: nitinGoyal,
  },
  {
    name: "Dr. Thai-Nghe Nguyen",
    title: "Dean, Can Tho University, Vietnam",
    image: ntNghe,
  },
  {
    name: "Dr. Sardar M. N. Islam",
    title: "Professor, Victoria University, Australia",
    image: sardarIslam,
  },
  {
    name: "Dr. Manju Lata",
    title: "Associate Professor, Chandigarh University, India",
    image: manjuLata,
  },
];

const Events = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "30px 10px", // Small screens
          sm: "40px 15px", // Medium screens
          md: "50px 20px", // Larger screens
        },
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: {
            xs: 3, // Small screens
            sm: 4, // Medium screens
            md: 4, // Larger screens
          },
          fontSize: {
            xs: "1.75rem", // Small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",    // Larger screens
          },
        }}
      >
        Events
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{
          marginTop: "-25px",
          marginBottom: "25px",
          width: "100%",
          maxWidth: "300px", // Limit the max width
        }}
      />

      {/* Editors' Meet Event */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontSize: {
            xs: "1.5rem", // Small screens
            sm: "2rem",   // Medium screens
            md: "2.5rem", // Larger screens
          },
          mb: 2,
        }}
      >
        Editors' Meet
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontSize: {
            xs: "0.9rem",  // Small screens
            sm: "1rem",    // Medium screens
            md: "1.1rem",  // Larger screens
          },
        }}
      >
        We are honored to host an Editors’ Meet featuring distinguished academic
        leaders from across the globe. Join us for in-depth discussions on the
        latest trends in sustainable computing and scholarly publishing.
      </Typography>

      {/* Cards for each editor */}
      <Grid container spacing={4}>
        {editors.map((editor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
             <CardMedia
  component="img"
  sx={{
    width: "180px",       // Set width to 180px
    height: "180px",      // Set height to 180px
    objectFit: "cover",   // Maintain aspect ratio and cover the entire area
    margin: "0 auto",     // Center the image horizontally
    borderRadius: "50%",  // Make the image circular
  }}
  image={editor.image ? editor.image : "https://via.placeholder.com/150"}
  alt={editor.name}
/>

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: {
                      xs: "1rem",  // Small screens
                      sm: "1.25rem", // Medium screens
                      md: "1.5rem", // Larger screens
                    },
                  }}
                >
                  {editor.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: "0.875rem",  // Small screens
                      sm: "1rem",      // Medium screens
                      md: "1rem",      // Larger screens
                    },
                  }}
                >
                  {editor.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Keynote Speakers */}
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{
          mt: {
            xs: 4, // Small screens
            sm: 6, // Medium screens
            md: 6, // Larger screens
          },
          fontSize: {
            xs: "1.5rem", // Small screens
            sm: "2rem",   // Medium screens
            md: "2.5rem", // Larger screens
          },
        }}
      >
        Keynote Speakers
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontSize: {
            xs: "0.9rem",  // Small screens
            sm: "1rem",    // Medium screens
            md: "1.1rem",  // Larger screens
          },
        }}
      >
        To be announced
      </Typography>

      {/* Visit to Ho Chi Minh City Landmarks */}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.5rem", // Small screens
            sm: "2rem",   // Medium screens
            md: "2.5rem", // Larger screens
          },
        }}
      >
        Visit to Ho Chi Minh City Landmarks - June 16
      </Typography>
      <Box
        sx={{
          textAlign: "left",
          marginTop: 3,
          fontSize: {
            xs: "0.9rem", // Small screens
            sm: "1rem",   // Medium screens
            md: "1.1rem", // Larger screens
          },
        }}
      >
        <Typography variant="body1">
          As part of our conference, we offer a guided tour of key landmarks in
          Ho Chi Minh City. This will provide participants with a cultural
          experience, blending learning with an appreciation of Vietnam’s rich
          heritage.
        </Typography>

        <Box sx={{ mt: 2, ml: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: {
                xs: "1.1rem", // Small screens
                sm: "1.25rem", // Medium screens
                md: "1.5rem", // Larger screens
              },
              mb: 1,
            }}
          >
            Details:
          </Typography>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>
              <strong>Date:</strong> June 16
            </li>
            <li>
              <strong>Location:</strong> Landmark Tour, Ho Chi Minh City
            </li>
            <li>
              <strong>Registration Fee:</strong> USD 20
            </li>
          </ul>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: {
                xs: "0.9rem", // Small screens
                sm: "1rem",   // Medium screens
                md: "1.1rem", // Larger screens
              },
            }}
          >
            Due to limited slots, registration is required. Early registration
            is encouraged to secure your spot in this exciting event.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
