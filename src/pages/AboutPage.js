import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

const AboutTheConference = () => {
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
        About the Conference
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />
      {aboutData.map((para, index) => (
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

const aboutData = [
  `The International Conference on Sustainable Computing (ICSC 2025) will be held in Ho Chi Minh City, Vietnam, focusing on "Sustainable Computing for the Future." This conference aims to address the increasing demand for energy-efficient and sustainable computing solutions, covering key topics like AI, blockchain, green computing, and renewable energy integration.`,
  `ICSC 2025 will bring together researchers, industry leaders, and policymakers to explore how sustainable technologies can drive innovation while mitigating environmental impact. As we face global challenges like climate change, resource scarcity, and energy consumption, ICSC will serve as a collaborative platform to discuss and devise forward-thinking strategies in computing.`,
  `Structured across multiple tracks, the conference will offer deep insights into green technologies, AI’s role in sustainability, and innovative solutions for high-performance and energy-efficient computing. Attendees will have opportunities to engage in discussions, Conferences, and panels featuring success stories, cutting-edge research, and future directions in sustainable technology.`,
  `Our distinguished speakers and panelists represent diverse perspectives and are selected to provide holistic insights into the future of sustainable computing. Through networking sessions, keynotes, and discussions, participants will gain strategic knowledge and practical approaches to implement sustainable practices in the computing world.`,
  `Join us as we envision a future where sustainable computing solutions play a pivotal role in creating a resilient and environmentally responsible technological landscape.`,
];

export default AboutTheConference;
