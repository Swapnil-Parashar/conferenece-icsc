import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const UnderDevelopment = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirects to the homepage
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5", // Light background color
        padding: "0 20px", // Padding for smaller screens
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "2rem", // Small screens
              sm: "3rem", // Medium screens
              md: "4rem", // Larger screens
            },
            color: "#333",
            mb: 3,
          }}
        >
          Page Under Development
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1rem",  // Small screens
              sm: "1.25rem", // Medium screens
              md: "1.5rem", // Larger screens
            },
            color: "#666",
            mb: 4,
          }}
        >
          Details will be Updated Soon
        </Typography>

        <Button
  variant="contained"
  color="primary"
  onClick={handleGoHome}
  sx={{
    padding: {
      xs: "6px 12px",  // Smaller padding for small screens
      sm: "8px 16px",  // Smaller padding for medium screens
      md: "10px 20px", // Slightly bigger for larger screens
    },
    fontSize: {
      xs: "0.75rem",   // Smaller font for small screens
      sm: "0.875rem",  // Medium font for medium screens
      md: "1rem",      // Normal font for larger screens
    },
  }}
>
  Go Back to Homepage
</Button>
      </Box>
    </Box>
  );
};

export default UnderDevelopment;
