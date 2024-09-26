import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

const Introduction = () => {
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
      <Typography variant="h2" sx={{ mb: 2 }}>
        Introduction
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />
      {introData.map((para, index) => (
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
          key={index}
          className={isVisible ? "fadeIn" : ""}
        >
          {para}
        </Typography>
      ))}
    </Box>
  );
};

const introData = [
  `The International Workshop on Sustainable Computing (IWSC 2025), themed "Sustainable Computing for the Future," aims to address the critical intersection between sustainability and computing. As we transition towards greener technologies, the role of energy-efficient computing, AI, and blockchain becomes pivotal in shaping the future. IWSC 2025 offers a platform to explore how these technologies can be harnessed to build sustainable business models, improve resource management, and tackle global challenges.`,
  `Our workshop will bring together leading experts, researchers, and practitioners from around the globe to discuss advancements in AI, green computing, and blockchain that are reshaping the technological landscape. These discussions will delve into practical solutions, innovations in energy-efficient computing, and sustainable technology integration. Attendees will engage in knowledge-sharing sessions, workshops, and panels that focus on the role of computing in sustainability and its potential to contribute to cleaner, greener futures.`,
  `This conference isn't just a technical discussion but a forward-thinking initiative to promote sustainability in every aspect of computing, from cloud computing and IoT to AI-driven energy solutions. Join us to envision a future where sustainable computing leads the way in innovation, economic growth, and environmental responsibility.`
  // Add other paragraphs similarly
];

export default Introduction;
