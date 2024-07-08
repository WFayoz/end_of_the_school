import React from "react";

const FaqMap = () => {
  return (
    <div className="relative my-28 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1272608464124!2d69.26538967543686!3d41.284334702381955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8abf6cafffff%3A0xf891468a94f4bf81!2sFrontend%20Web%20Developer!5e0!3m2!1sen!2s!4v1719918016414!5m2!1sen!2s"
        width="100%"
        height="389"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <button className="buttonG absolute bottom-3 right-3">
        Пункт выдачи
      </button>
    </div>
  );
};

export default FaqMap;
