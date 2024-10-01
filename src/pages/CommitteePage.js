import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

const ConferenceCommittee = () => {
  return (
    <Box
      id="conference-committee-section"
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Conference Committee
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />

      {committeeSections.map((section, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
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
                    height="180"
                    image={member.imageUrl ? member.imageUrl : "https://via.placeholder.com/150"}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
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
      { name: "Prof. Tankeshwar Kumar", affiliation: "Central University of Haryana, India" },
      { name: "Prof. Narsee Ram Bishnoi", affiliation: "Guru Jambheshwar University of Science & Technology, India" },
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
      { name: "Dr. Nitin Goyal", affiliation: "Central University of Haryana, India" },
      { name: "Dr. Thai-Nghe Nguyen", affiliation: "Can Tho University, Vietnam" },
      { name: "Dr. Sardar M. N. Islam", affiliation: "Victoria University, Australia" },
      { name: "Dr. Manju Lata", affiliation: "Chandigarh University, India" },
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
      { name: "Mr. Subrahmanyam B H V S", affiliation: "Central University of Haryana, India" },
      { name: "Mr. Deepak Kumar", affiliation: "Central University of Haryana, India" },
    ],
  },
];

export default ConferenceCommittee;
