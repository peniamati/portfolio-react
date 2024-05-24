import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from 'react-redux'

function Contact() {
  const {portfolioData} = useSelector((state) => state.root)
  const {contact} = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-center gap-20">
        <div className="flex flex-col gap-1 w-1/3">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(contact).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary text-sm">{key}: </span>
              <span className="text-tertiary text-sm">{contact[key]}</span>
            </p>
          ))}
          <p className="text-tertiary text-sm">{"}"}</p>
        </div>

        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/427c7775-f5bb-4ee1-9456-5ec1fa5c1b91/khYVIlYmRE.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
