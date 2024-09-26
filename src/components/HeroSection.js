import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "100%",
        }}
      >
        {slidesData.map((slide, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              minWidth: "100%", // Ensure each slide takes full width
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <Typography variant="h2" sx={{ mb: 2 }}>
                {slide.heading}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {slide.subHeading}
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                {slide.dates}
              </Typography>
              <Button
                variant="contained"
                href="upload/images/FIMC2024.pdf"
                target="_blank"
                rel="noreferrer"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                FIMC 2024 Brochure
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const slidesData = [
  {
    image: "https://www.fsm.ac.in/conference/fimc2024/images/akshar.JPG",
    heading: "The International Workshop on Sustainable Computing (IWSC 2025)",
    subHeading: "AI, Business Models, and the Future of Work",
    dates: "November 28-30, 2024 (Thursday, Friday and Saturday)",
  },
  {
    image: "https://www.fsm.ac.in/conference/fimc2024/images/akshar.JPG",
    heading: "The International Workshop on Sustainable Computing (IWSC 2025)",
    subHeading: "AI, Business Models, and the Future of Work",
    dates: "November 28-30, 2024 (Thursday, Friday and Saturday)",
  },
  // Add more slides as needed
];

export default HeroSection;
