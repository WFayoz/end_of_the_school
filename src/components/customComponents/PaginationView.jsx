import React, { useState } from "react";
import Pagination from "../../components/customComponents/Pagination"; // Make sure this component exists
import data from "../../services/FaqData";
import { Accordion as MuiAccordion } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GoPlusCircle } from "react-icons/go";

// Styled Components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #E1DFE7`,
  borderLeft: `none`,
  borderRight: `none`,
  borderBottom: `none`,
  "&:first-of-type": {
    borderTop: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<GoPlusCircle className="text-[24px] text-black" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#F8F7F3" : "#F8F7F3",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
  fontSize: "16px",
  fontStyle: "normal",
  paddingTop: "24px",
  paddingBottom: "24px",
  background: "#F8F7F3",
  borderTop: "1px solid white",
}));

const PaginationView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="App">
      <h1 className="my-4 text-center text-2xl font-bold">
        Pagination Example
      </h1>
      <ul className="mx-auto max-w-md list-inside list-disc">
        {paginatedData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              <Typography
                className="text-primaryBlack"
                sx={{ fontSize: "24px" }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationView;
