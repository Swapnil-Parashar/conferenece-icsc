import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { hoChiMinhCity1, hoChiMinhCity2, hoChiMinhCity3 } from "../assets"; // Assuming compressed images or WebP are in the assets folder

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
        height: {
          xs: "70vh", // Smaller height on mobile devices
          sm: "80vh", // Adjust height on small screens
          md: "100vh", // Full height on larger screens
        },
        overflow: "hidden",
        width: "100vw", // Ensure the container takes the full viewport width
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}vw)`, // Ensure the translation shifts by 100% of the viewport width
          width: `${slidesData.length * 100}vw`, // Ensure the container holds all slides
          height: "100%", // Full height for the container
        }}
      >
        {slidesData.map((slide, index) => (
          <Box
            key={index}
            sx={{
              width: "100vw", // Ensure each slide takes full viewport width
              height: "100%", // Full height for each slide
              position: "relative",
            }}
          >
            <picture>
              <source
                srcSet={`${slide.imageWebp}`}
                type="image/webp"
                media="(max-width: 600px)" // Load WebP images on mobile devices
              />
              <source srcSet={`${slide.image}`} type="image/jpeg" />
              <img
                src={slide.image}
                alt={slide.heading}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the container without distortion
                }}
              />
            </picture>
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
                padding: {
                  xs: "10px", // Small screens
                  sm: "20px", // Medium screens
                  md: "40px", // Larger screens
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: {
                    xs: "1.75rem", // Smaller heading on small screens
                    sm: "2.5rem",  // Medium screens
                    md: "3rem",    // Larger screens
                  },
                }}
              >
                {slide.heading}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: {
                    xs: "1.25rem", // Adjust subheading for mobile
                    sm: "1.75rem", // Medium screens
                    md: "2.25rem", // Larger screens
                  },
                }}
              >
                {slide.subHeading}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontSize: {
                    xs: "1rem",    // Small screens
                    sm: "1.25rem", // Medium screens
                    md: "1.5rem",  // Larger screens
                  },
                }}
              >
                {slide.dates}
              </Typography>
              <Button
                variant="contained"
                href="upload/images/ICSC2025.pdf"
                target="_blank"
                rel="noreferrer"
                sx={{
                  fontSize: {
                    xs: "0.75rem", // Small screens
                    sm: "1rem",   // Medium screens
                    md: "1.25rem", // Larger screens
                  },
                  padding: {
                    xs: "8px 16px", // Small screens
                    sm: "10px 20px", // Medium screens
                    md: "12px 24px", // Larger screens
                  },
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                ICSC 2025 Brochure
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
    image: hoChiMinhCity1, // JPEG fallback
    imageWebp: "assets/hoChiMinhCity1.webp", // WebP version
    heading: "The International Conference on Sustainable Computing (ICSC 2025)",
    subHeading: "AI, Business Models, and the Future of Work",
    dates: "June 16-17, 2025",
  },
  {
    image: hoChiMinhCity2,
    imageWebp: "assets/hoChiMinhCity2.webp",
    heading: "The International Conference on Sustainable Computing (ICSC 2025)",
    subHeading: "AI, Business Models, and the Future of Work",
    dates: "June 16-17, 2025",
  },
  {
    image: hoChiMinhCity3,
    imageWebp: "assets/hoChiMinhCity3.webp",
    heading: "The International Conference on Sustainable Computing (ICSC 2025)",
    subHeading: "AI, Business Models, and the Future of Work",
    dates: "June 16-17, 2025",
  },
];

export default HeroSection;
