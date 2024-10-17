import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

// Import your images
import greenComputingImage from '../assets/green_computing.jpg';
import aiSustainabilityImage from '../assets/ai_sustainability.jpg';
import renewableEnergyImage from '../assets/renewable_energy.png';

const themesData = [
  {
    title: "Green Computing",
    description:
      "Explore how energy-efficient technologies can reduce the environmental impact of computing and pave the way for a more sustainable future.",
    image: greenComputingImage, // Replace icon with relevant image
  },
  {
    title: "AI for Sustainability",
    description:
      "Understand the role of Artificial Intelligence in advancing sustainability across industries.",
    image: aiSustainabilityImage, // Replace icon with relevant image
  },
  {
    title: "Renewable Energy Integration",
    description:
      "Learn how computing technologies can help integrate renewable energy into the grid.",
    image: renewableEnergyImage, // Replace icon with relevant image
  },
];

const Themes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Themes of the Conference
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {themesData.map((theme, index) => (
          <Card
            key={index}
            sx={{
              width: "30%",
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={theme.image}
              alt={theme.title}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {theme.title}
              </Typography>
              <Typography variant="body2">{theme.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Themes;
