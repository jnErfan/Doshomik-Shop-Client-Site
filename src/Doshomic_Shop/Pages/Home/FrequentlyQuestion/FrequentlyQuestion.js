import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// Popup Accordion Styles
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Questions Fake data
const questions = [
  {
    id: "1",
    question: "What constitutes a positive or negative vote in Doshomik Shops?",
    answer:
      "The standard definition of a quorum in Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies to Doshomik Shops, with one additional provision. The provides that absentee votes will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
  {
    id: "2",
    question: "Can an abstention vote be cast at a Doshomik Shop meeting?",
    answer:
      "Definition of a quorum in Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies provides that absentee votes will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
  {
    id: "3",
    question: "Can a faculty member on OCSA or FML serve on a Doshomik Shop?",
    answer:
      "Quorum in Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies to Doshomik Shops, with one additional provision. The Handbook (4.1.8.3) provides that absentee votes will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
  {
    id: "4",
    question: "How will additional members of Doshomik Shops  members?",
    answer:
      "Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies to Doshomik Shops, with one additional provision. that absentee votes will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
  {
    id: "5",
    question: "How can absentee ballots be cast?",
    answer:
      "Standard definition of a quorum in Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies to Doshomik Shops, with one additional provision. The Handbook will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
  {
    id: "6",
    question: "Why should members of the Doshomik Shop fill  their votes?",
    answer:
      "The standard definition of a quorum in Robert's Rules of Order is that the majority of an assembly must be present to conduct business. That is, if there are twenty members of a group, eleven must be present to constitute a quorum. The same requirement for a quorum applies to Doshomik Shops, with one additional provision. The Handbook  provides that absentee votes will be counted in Doshomik Shops, whereas Robert's Rules really do not provide for a mixture of absentee and in-person votes in an assembly",
  },
];

// Customers Questions And Answers Design
const FrequentlyQuestion = () => {
  const [expanded, setExpanded] = useState("panel10");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ my: "100px" }}>
      <Box sx={{ textAlign: "center", my: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Frequently Asked Question
        </Typography>
        <Typography variant="body1" className="text-secondary px-5">
          FAQ stands for Frequently Asked Questions An FAQ is a list of commonly
          asked questions and answers on a website about topics <br />
          such as list is often used in articles, websites, email lists, and
          online forums where common questions tend to recur.
        </Typography>
      </Box>
      <Box>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
          sx={{ border: 0 }}
          className="shadow-sm mb-4 rounded-3"
        >
          <AccordionSummary
            aria-controls="panel10d-content"
            id="panel10d-header"
          >
            <Typography variant="h6" sx={{ color: "#363636" }}>
              What constitutes a quorum in a Doshomik Shop?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: 0 }}>
            <Typography className="text-secondary">
              Following quorum protocols keep an organization balanced. Learn
              quorum definition, what constitutes a quorum, Robert's Rules
              quorum and That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to Doshomik Shops, with one additional provision.
              The Handbook that absentee votes will be counted in Doshomik
              Shops, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </Typography>
          </AccordionDetails>
        </Accordion>
        {questions.map(({ id, question, answer }) => (
          <Accordion
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
            sx={{ border: 0 }}
            className="shadow-sm mb-4 rounded-3"
            key={id}
          >
            <AccordionSummary
              aria-controls={`panel${id}d-content`}
              id={`panel${id}d-header`}
            >
              <Typography variant="h6" sx={{ color: "#363636" }}>
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 0 }}>
              <Typography className="text-secondary">{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FrequentlyQuestion;
