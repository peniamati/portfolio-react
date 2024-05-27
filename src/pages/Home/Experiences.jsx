import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from 'react-redux'

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const {portfolioData} = useSelector((state) => state.root)
  const {experiences} = portfolioData;

  const isSpanish = experiences[0].language === "ES";
  return (
    <div>
      <SectionTitle title={isSpanish ? "Experiencias" : "Experiences"} />

      <div className="flex py-10 gap-20 text-center sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div 
              onClick={() => {
                setSelectedItemIndex(index)
              }}
              className="cursor-pointer"  
            >
              <h1
                className={`text-xl px-5 py-2
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-2/3 sm:w-full">
          <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
          <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
          <p className="text-white">{experiences[selectedItemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
