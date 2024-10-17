import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import {
  tankeshwarKumar,
  narsiRBishnoi,
  nitinGoyal,
  ntNghe,
  sardarIslam,
  manjuLata,
} from '../assets'; // Import the images from the assets folder

const ConferenceCommittee = () => {
  return (
    <Box
      id="conference-committee-section"
      sx={{
        padding: {
          xs: "30px 10px", // Small screens
          sm: "40px 15px", // Medium screens
          md: "50px 20px", // Larger screens
        },
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: {
            xs: 3,  // Small screens
            sm: 4,  // Medium screens
            md: 4,  // Larger screens
          },
          fontSize: {
            xs: "1.75rem", // Small screens
            sm: "2.5rem",  // Medium screens
            md: "3rem",    // Larger screens
          },
        }}
      >
        Conference Committee
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{
          marginTop: "-25px",
          marginBottom: "25px",
          width: "100%",     // Responsive width
          maxWidth: "300px", // Limit max width
        }}
      />

      {committeeSections.map((section, index) => (
        <Box key={index} sx={{ mb: { xs: 5, sm: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              mb: {
                xs: 2,  // Small screens
                sm: 3,  // Medium screens
                md: 3,  // Larger screens
              },
              fontSize: {
                xs: "1.5rem", // Small screens
                sm: "2rem",   // Medium screens
                md: "2.5rem", // Larger screens
              },
            }}
          >
            {section.title}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {section.members.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card
                  sx={{
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
  sx={{
    width: "180px",       // Set width to 180px
    height: "180px",      // Set height to 180px
    objectFit: "cover",   // Maintain aspect ratio and cover the entire area
    margin: "0 auto",     // Center the image horizontally
    borderRadius: "50%",  // Optionally, make the image circular if you want
  }}
  image={member.imageUrl ? member.imageUrl : "https://via.placeholder.com/150"}
  alt={member.name}
/>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: {
                          xs: "1rem",  // Small screens
                          sm: "1.25rem", // Medium screens
                          md: "1.5rem", // Larger screens
                        },
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        fontSize: {
                          xs: "0.875rem", // Small screens
                          sm: "1rem",     // Medium screens
                          md: "1rem",     // Larger screens
                        },
                      }}
                    >
                      {member.affiliation}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

const committeeSections = [
  {
    title: "Patrons",
    members: [
      { name: "Prof. Tankeshwar Kumar", affiliation: "Central University of Haryana, India", imageUrl: tankeshwarKumar },
      { name: "Prof. Narsee Ram Bishnoi", affiliation: "Guru Jambheshwar University of Science & Technology, India", imageUrl: narsiRBishnoi },
    ],
  },
  {
    title: "Conference Advisory Board",
    members: [
      { name: "Dr. Vikas Kumar", affiliation: "Central University of Haryana, India" },
      { name: "Dr. Rajkumar Buyya", affiliation: "University of Melbourne, Australia" },
      { name: "Dr. Susy Suhendra", affiliation: "Gunadarma University, Indonesia" },
      { name: "Dr. Saurabh Mittal", affiliation: "FORE School of Management, India" },
      { name: "Dr. Risdiyanta", affiliation: "Janabadra University, Indonesia" },
      { name: "Dr. Anu Gupta", affiliation: "Colorado State University, USA" },
      { name: "Dr. Surender Kumar", affiliation: "Jaipuria Institute of Management, India" },
      { name: "Dr. Sandhya Rai", affiliation: "Bennett University, India" },
      { name: "Dr. Pooja Nanda", affiliation: "Amity University, India" },
      { name: "Dr. Dejene Tessema", affiliation: "Addis Ababa Science and Technology University, Ethiopia" },
      { name: "Dr. Ravinder Rena", affiliation: "South Africa" },
      { name: "Dr. Jakob Svensson", affiliation: "Malmö University, Sweden" },
      { name: "Dr. Rasika Dayarathna", affiliation: "University of Colombo, Sri Lanka" },
      { name: "Dr. Sandeep Singh Kang", affiliation: "Chandigarh University, India" },
      { name: "Dr. Ioseb Berikashvili", affiliation: "Caucasus University, Georgia" },
    ],
  },
  {
    title: "Conference Programme Chairs",
    members: [
      { name: "Dr. Nitin Goyal", affiliation: "Central University of Haryana, India", imageUrl: nitinGoyal },
      { name: "Dr. Thai-Nghe Nguyen", affiliation: "Can Tho University, Vietnam", imageUrl: ntNghe },
      { name: "Dr. Sardar M. N. Islam", affiliation: "Victoria University, Australia", imageUrl: sardarIslam },
      { name: "Dr. Manju Lata", affiliation: "Chandigarh University, India", imageUrl: manjuLata },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Dr. Ramesh Sharda", affiliation: "Oklahoma State University, USA" },
      { name: "Dr. Duc Ngoc Nguyen", affiliation: "HUTECH High-Tech Institute, Vietnam" },
      { name: "Dr. Ashish Gupta", affiliation: "Auburn University, USA" },
      { name: "Dr. Gabriel Ayodej Ogunmola", affiliation: "Sharda University, Uzbekistan" },
      { name: "Dr. Maria Engberg", affiliation: "Malmö University, Sweden" },
      { name: "Dr. Errol Francke", affiliation: "Cape Peninsula University of Technology, South Africa" },
      { name: "Dr. K.G Srinivasa", affiliation: "Indian Institute of Information Technology (IIIT) Raipur, India" },
      { name: "Dr. Dinesh Singh", affiliation: "Deenbandhu Chhotu Ram University of Science and Technology, India" },
      { name: "Dr. Aashish Bhardwaj", affiliation: "Guru Tegh Bahadur Institute of Technology, India" },
      { name: "Dr. Jimson Mathew", affiliation: "Indian Institute of Technology Patna, India" },
      { name: "Dr. Gesty Ernestivita", affiliation: "Janabadra University, Indonesia" },
    ],
  },
  {
    title: "Web Development Team",
    members: [
      { name: "Mr. Swapnil Parashar", affiliation: "Central University of Haryana, India" },
      { name: "Mr. Subrahmanyam B H V S P", affiliation: "Central University of Haryana, India" },
      { name: "Mr. Deepak Kumar", affiliation: "Central University of Haryana, India" },
    ],
  },
];

export default ConferenceCommittee;
