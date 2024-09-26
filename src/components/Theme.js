import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

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

const themesData = [
  {
    title: "Green Computing",
    description:
      "Explore how energy-efficient technologies can reduce the environmental impact of computing and pave the way for a more sustainable future.",
    image:
      "https://www.example.com/images/green-computing.jpg", // Replace with real image URL
  },
  {
    title: "AI for Sustainability",
    description:
      "Understand the role of Artificial Intelligence in advancing sustainability across industries by improving energy management and reducing waste.",
    image: "https://www.example.com/images/ai-sustainability.jpg", // Replace with real image URL
  },
  {
    title: "Renewable Energy Integration",
    description:
      "Learn how computing technologies can help integrate renewable energy into the grid to support a more sustainable energy ecosystem.",
    image:
      "https://www.example.com/images/renewable-energy.jpg", // Replace with real image URL
  },
];

export default Themes;
