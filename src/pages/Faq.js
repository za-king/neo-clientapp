import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { dataProfile } from "../components/faqcomp/profile.";
import { dataMentoring } from "../components/faqcomp/mentoring";
import { dataKonseling } from "../components/faqcomp/konseling";

function Faq() {
  const datas = [dataProfile, dataMentoring, dataKonseling];
  const buttonStyle =
    "[#FF1800]  hover:bg-[#FF1800]     shadow-2xl hover:rounded-full w-[100px] h-[36px] border-solid border-2 border-[#FF1800] rounded-md ";
  const buttonStyleActive =
    "bg-[#FF1800]  outline-none rounded-full   shadow-2xl  w-[100px] h-[36px] border-solid border-2 border-[#FF1800]  ";

  const [click, setClick] = useState(0);

  const handleClick = (index) => {
    setClick(index);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className=" bg-[#F4F8FE] h-screen justify-center flex flex-col items-stretch">
        <div className="justify-center flex flex-col items-center mt-24">
          <h1 className="flex text-4xl font-sans font-medium">F.A.Q</h1>
        </div>

        <div className="justify-center flex flex-row items-center p-5 space-x-4 mb-10">
          <button
            onClick={() => handleClick(0)}
            className={click === 0 ? buttonStyleActive : buttonStyle}
          >
            Profile
          </button>
          <button
            onClick={() => handleClick(1)}
            className={click === 1 ? buttonStyleActive : buttonStyle}
          >
            Mentoring
          </button>
          <button
            onClick={() => handleClick(2)}
            className={click === 2 ? buttonStyleActive : buttonStyle}
          >
            Konseling
          </button>
        </div>

        {datas[click].map((data) => {
          return (
            <div key={data.id} className="  pb-3 px-20 ">
              <Accordion
                expanded={expanded === data.panel}
                onChange={handleChange(data.panel)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "50%", flexShrink: 0 }}>
                    {data.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{data.body}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}

        <div className="mb-48"></div>
      </div>
    </>
  );
}

export default Faq;
