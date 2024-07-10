import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <div className="bg-primaryCream">
      <div className="mx-auto flex w-full max-w-[1350px] flex-col gap-5 bg-primaryCream px-5">
        <HeaderTop />
        <div className="w-full border"></div>
        <HeaderCenter />
        <div className="w-full border"></div>
        <HeaderBottom />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Header;
