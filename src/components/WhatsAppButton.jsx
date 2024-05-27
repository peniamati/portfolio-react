import React from 'react';
import whatsappLogo from '../images/WhatsApp.png';

const WhatsAppButton = () => {

  const mensaje = encodeURIComponent(`Hi, i am interested in your portfolio`);


  const handleClick = () => {

    window.open(`https://wa.me/+5492916446200/?text=${mensaje}`, '_blank');

  };


  return (

    <div className="whatsapp-button" onClick={handleClick}>

      <a href="">

        <img src={whatsappLogo} alt="logo de whatsapp" />

      </a>

    </div>

  );

};
export default WhatsAppButton;