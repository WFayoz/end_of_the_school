import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GoPlusCircle } from "react-icons/go";

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
    expandIcon={<GoPlusCircle className="text-[24px] text-white" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#088269" : "#088269",
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
  color: "white",
  fontSize: "16px",
  fontStyle: "normal",
  paddingTop: "24px",
  paddingBottom: "24px",
  background: "#088269",
  borderTop: "1px solid white",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="text-primaryWhite" sx={{ fontSize: "24px" }}>
            О компании
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Но синтетическое тестирование, в своём классическом представлении,
            допускает внедрение поэтапного и последовательного развития
            общества. В рамках спецификации современных стандартов, сторонники
            тоталитаризма в науке будут функционально разнесены.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="text-primaryWhite" sx={{ fontSize: "24px" }}>
            Преимущества сотрудников
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Но синтетическое тестирование, в своём классическом представлении,
            допускает внедрение поэтапного и последовательного развития
            общества. В рамках спецификации современных стандартов, сторонники
            тоталитаризма в науке будут функционально разнесены.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="text-primaryWhite" sx={{ fontSize: "24px" }}>
            Достижения компании
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Но синтетическое тестирование, в своём классическом представлении,
            допускает внедрение поэтапного и последовательного развития
            общества. В рамках спецификации современных стандартов, сторонники
            тоталитаризма в науке будут функционально разнесены.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="text-primaryWhite" sx={{ fontSize: "24px" }}>
            Карьерный рост
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Но синтетическое тестирование, в своём классическом представлении,
            допускает внедрение поэтапного и последовательного развития
            общества. В рамках спецификации современных стандартов, сторонники
            тоталитаризма в науке будут функционально разнесены.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
