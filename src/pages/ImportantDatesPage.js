import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const importantDates = [
  { event: "IWSC 2025", date: "June 16-17, 2025" },
  { event: "Doctoral Colloquium", date: "June 16, 2025 (Nomination Deadline: May 1, 2025)" },
  { event: "Pre-Conference Workshop", date: "June 16, 2025" },
  { event: "Conference Inauguration & Paper Presentations", date: "June 17, 2025" },
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
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Important Dates
      </Typography>
      <img
        src="https://www.fsm.ac.in/conference/fimc2024/images/heading_main_border.png"
        alt="border"
        style={{ marginTop: "-25px", marginBottom: "25px" }}
      />

      {/* Conference Dates */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Conference Dates
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Event</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
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
      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        Submission Deadlines
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Event</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
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
