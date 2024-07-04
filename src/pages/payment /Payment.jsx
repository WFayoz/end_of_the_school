import React from "react";
import PaymentSection1 from "./PaymentSection1";
import PaymentSection2 from "./PaymentSection2";
import PaymentSection3 from "./PaymentSection3";
import FormSection from "../../components/customComponents/FormSection";

const Payment = () => {
  return (
    <div>
      <PaymentSection1 />
      <PaymentSection2 />
      <PaymentSection3 />
      <FormSection />
      <div className="mb-36"></div>
    </div>
  );
};

export default Payment;
