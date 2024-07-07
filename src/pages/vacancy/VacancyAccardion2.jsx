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

const panels = [
  {
    id: "panel1",
    title: "Специалист по медицинскому оборудованию",
    content: "Content for О компании",
  },
  {
    id: "panel2",
    title: "Офис менеджер",
    content: "Content for Преимущества сотрудников",
  },
  {
    id: "panel3",
    title: "HR–менеджер",
    content: "Content for Достижения компании",
  },
];

export default function VacancyAccordion2() {
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
          <AccordionSummary
            aria-controls={`${panel.id}-content`}
            id={`${panel.id}-header`}
          >
            <Typography
              className="text-primaryBlack"
              sx={{ fontSize: "24px", marginRight: "10px" }}
            >
              {panel.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mt-5">
                <p className="text-secondaryGray">Обязанности:</p>
                <ul className="list-disc ml-5 flex flex-col gap-1">
                    <li>Работа с входящими/исходящими звонками</li>
                    <li>Работа с договорами составление/заключение</li>
                    <li>Ведение деловой переписки (эл. почта, переписка в мессенджерах)</li>
                    <li>Выполнение плановых показателей</li>
                </ul>
            </div>
            <div className="mt-5">
                <p className="text-secondaryGray">Требования:</p>
                <ul className="list-disc ml-5 flex flex-col gap-1">
                    <li>Опыт работы телефонных продаж</li>
                    <li>Опыт работы в CRM</li>
                    <li>Способность восприятия большого объема информации</li>
                </ul>
            </div>
            <div className="mt-5">
                <p className="text-secondaryGray">График работы:</p>
                <ul className="list-disc ml-5 flex flex-col gap-1">
                    <li>Оформление с первого рабочего дня</li>
                    <li>00:00 - 23:59</li>
                </ul>
            </div>
            <button className="buttonG mt-10">Отправить резюме</button>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
