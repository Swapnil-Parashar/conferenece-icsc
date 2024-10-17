import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const importantDates = [
  { event: "ICSC 2025", date: "June 16-17, 2025" },
  {
    event: "Doctoral Colloquium",
    date: "June 16, 2025 (Nomination Deadline: May 1, 2025)",
  },
  { event: "Pre-Conference Conference", date: "June 16, 2025" },
  {
    event: "Conference Inauguration & Paper Presentations",
    date: "June 17, 2025",
  },
  { event: "Editors' Meet", date: "June 17, 2025" },
  { event: "Valedictory", date: "June 17, 2025" },
];

const submissionDeadlines = [
  { event: "Submission System Opens", date: "January 15, 2025" },
  { event: "Submission Deadline", date: "February 15, 2025" },
  { event: "Decision Notification", date: "March 15, 2025" },
  { event: "Camera-Ready Submission", date: "April 30, 2025" },
];

const ImportantDates = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "30px 10px", // Small screens
          sm: "40px 15px", // Medium screens
          md: "50px 20px", // Larger screens
        },
        backgroundColor: "#f5f5f5",
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
        Important Dates
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{
          marginTop: "-25px",
          marginBottom: "25px",
          width: "100%",
          maxWidth: "300px", // Limit image size on larger screens
        }}
      />

      {/* Conference Dates */}
      <Typography
        variant="h4"
        sx={{
          mt: {
            xs: 3, // Small screens
            sm: 4, // Medium screens
            md: 4, // Larger screens
          },
          mb: 2,
          fontSize: {
            xs: "1.5rem", // Small screens
            sm: "2rem",   // Medium screens
            md: "2.5rem", // Larger screens
          },
        }}
      >
        Conference Dates
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: {
            xs: "100%", // Full width on small screens
            sm: "90%",  // Adjust width for medium screens
            md: "80%",  // Limit width on larger screens
          },
          margin: "0 auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Event</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {importantDates.map((date, index) => (
              <TableRow key={index}>
                <TableCell>{date.event}</TableCell>
                <TableCell>{date.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Submission Deadlines */}
      <Typography
        variant="h4"
        sx={{
          mt: {
            xs: 4, // Small screens
            sm: 6, // Medium screens
            md: 6, // Larger screens
          },
          mb: 2,
          fontSize: {
            xs: "1.5rem", // Small screens
            sm: "2rem",   // Medium screens
            md: "2.5rem", // Larger screens
          },
        }}
      >
        Submission Deadlines
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: {
            xs: "100%", // Full width on small screens
            sm: "90%",  // Adjust width for medium screens
            md: "80%",  // Limit width on larger screens
          },
          margin: "0 auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Event</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submissionDeadlines.map((deadline, index) => (
              <TableRow key={index}>
                <TableCell>{deadline.event}</TableCell>
                <TableCell>{deadline.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ImportantDates;
