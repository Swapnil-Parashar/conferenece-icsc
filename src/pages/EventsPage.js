import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

// Array of editors' data including individual images
const editors = [
  {
    name: "Dr. Nitin Goyal",
    title: "Assistant Professor, Central University of Haryana, India",
    image: null,
  },
  {
    name: "Dr. Thai-Nghe Nguyen",
    title: "Dean, Can Tho University, Vietnam",
    image: null,
  },
  {
    name: "Dr. Sardar M. N. Islam",
    title: "Professor, Victoria University, Australia",
    image: null,
  },
  {
    name: "Dr. Manju Lata",
    title: "Associate Professor, Chandigarh University, India",
    image: null,
  },
];

const Events = () => {
  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Events
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />

      {/* Editors' Meet Event */}
      <Typography variant="h4" component="div" gutterBottom>
        Editors' Meet
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We are honored to host an Editors’ Meet featuring distinguished academic
        leaders from across the globe. Join us for in-depth discussions on the
        latest trends in sustainable computing and scholarly publishing.
      </Typography>

      {/* Cards for each editor */}
      <Grid container spacing={4}>
        {editors.map((editor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={editor.image || "https://via.placeholder.com/150"} // Use the editor's image, or fallback to the default image
                alt={editor.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {editor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {editor.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Keynote Speakers */}
      <Typography variant="h4" component="div" gutterBottom sx={{ mt: 6 }}>
        Keynote Speakers
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        To be announced
      </Typography>

      {/* Visit to Ho Chi Minh City Landmarks */}
      <Typography variant="h4">
        Visit to Ho Chi Minh City Landmarks - June 16
      </Typography>
      <Box sx={{ textAlign: "left", marginTop: 3 }}>
        <Typography variant="body1">
          As part of our conference, we offer a guided tour of key landmarks in
          Ho Chi Minh City. This will provide participants with a cultural
          experience, blending learning with an appreciation of Vietnam’s rich
          heritage.
        </Typography>

        <Box sx={{ mt: 2, ml: 2 }}>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            Details:
          </Typography>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>
              <strong>Date:</strong> June 16
            </li>
            <li>
              <strong>Location:</strong> Landmark Tour, Ho Chi Minh City
            </li>
            <li>
              <strong>Registration Fee:</strong> USD 20
            </li>
          </ul>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Due to limited slots, registration is required. Early registration
            is encouraged to secure your spot in this exciting event.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
