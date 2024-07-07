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

const  panels = [
  { id: "panel1", title: "О компании", content: "Content for О компании" },
  { id: "panel2", title: "Преимущества сотрудников", content: "Content for Преимущества сотрудников" },
  { id: "panel3", title: "Достижения компании", content: "Content for Достижения компании" },
  { id: "panel4", title: "Карьерный рост", content: "Content for Карьерный рост" },
  { id: "panel5", title: "Стоимость доставки", content: "Content for Стоимость доставки" },
  { id: "panel6", title: "Стать поставщиком", content: "Content for Стать поставщиком" },
  { id: "panel7", title: "Возможен ли возврат денежных средств?", content: "Content for Возможен ли возврат денежных средств?" },
  { id: "panel8", title: "Правила расторжения договора?", content: "Content for Правила расторжения договора?" },
  { id: "panel9", title: "О компании", content: "Content for О компании" },
  { id: "panel10", title: "Преимущества сотрудников", content: "Content for Преимущества сотрудников" },
  { id: "panel11", title: "Достижения компании", content: "Content for Достижения компании" },
  { id: "panel12", title: "Карьерный рост", content: "Content for Карьерный рост" },
  { id: "panel13", title: "Стоимость доставки", content: "Content for Стоимость доставки" },
  { id: "panel14", title: "Стать поставщиком", content: "Content for Стать поставщиком" },
  { id: "panel15", title: "Возможен ли возврат денежных средств?", content: "Content for Возможен ли возврат денежных средств?" },
  { id: "panel16", title: "Правила расторжения договора?", content: "Content for Правила расторжения договора?" }

];


export default  function FaqAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {panels.map((panel) => (
        <Accordion
          key={panel.id}
          expanded={expanded === panel.id}
          onChange={handleChange(panel.id)}
        >
          <AccordionSummary aria-controls={`${panel.id}-content`} id={`${panel.id}-header`}>
            <Typography className="text-primaryBlack" sx={{ fontSize: "24px" }}>
              {panel.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {panel.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}