import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq-section"
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Frequently Asked Questions (FAQs)
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: 2,
            borderRadius: 2,
            mb: 2,
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fff" }}>
            <Typography variant="body1" sx={{ color: "#555" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const faqData = [
  {
    question: "What is the theme of IWSC 2025?",
    answer:
      "The theme of the IWSC 2025 conference is 'Sustainable Computing for the Future.' It focuses on energy-efficient computing, AI, and blockchain, addressing global sustainability challenges and exploring how these technologies can lead to greener, more responsible futures.",
  },
  {
    question: "Who should attend the conference?",
    answer:
      "This workshop is ideal for researchers, industry professionals, doctoral scholars, faculty members, and students interested in AI, green computing, blockchain, and sustainable technology. It offers excellent networking opportunities with global experts.",
  },
  {
    question: "Where is the conference held?",
    answer:
      "The IWSC 2025 will be held in Ho Chi Minh City, Vietnam. Specific details, including the exact venue, will be shared closer to the event date.",
  },
  {
    question: "What is the schedule for the conference?",
    answer:
      "IWSC 2025 spans two days, June 16-17, 2025, and includes keynote speeches, technical sessions, panel discussions, and networking events. A detailed schedule will be available on the conference website soon.",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "You can register via the conference website under the 'Registration' section. Early bird discounts and special rates for students will be available. After registration, participants will receive a confirmation email with event details.",
  },
  {
    question: "Are there opportunities for networking?",
    answer:
      "Yes, IWSC 2025 offers plenty of networking opportunities through scheduled coffee breaks, luncheons, workshops, and an evening gala dinner, allowing participants to connect with peers and industry leaders.",
  },
  {
    question: "How can participants submit papers or proposals for sessions?",
    answer:
      "Interested participants can submit their abstracts and proposals through the conference portal. Detailed submission guidelines can be found on the ‘Submissions’ page of the website.",
  },
  {
    question: "What is the review process for papers?",
    answer:
      "Papers undergo a double-blind peer review. Selected papers are evaluated for their originality, relevance, and contribution to sustainable computing, ensuring only high-quality research is accepted for presentation.",
  },
  {
    question: "What are the publication opportunities?",
    answer:
      "Accepted papers will have the opportunity to be published in reputed journals focusing on sustainable computing, AI, and blockchain. Specific publication details will be provided during the conference.",
  },
  {
    question:
      "Will the conference be held offline, online, or in a hybrid mode?",
    answer:
      "The conference will be held in hybrid mode, with both offline sessions in Ho Chi Minh City and online access available for international participants.",
  },
  {
    question: "Is there any accommodation provision?",
    answer:
      "While the conference does not provide accommodation, recommendations for nearby hotels and travel arrangements will be listed on the website under the 'Accommodation' section.",
  },
];

export default FAQ;
