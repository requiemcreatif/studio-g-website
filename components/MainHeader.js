import Image from "next/image";
import Logo from "../images/logo-black.svg";

const MainHeader = () => {
  return (
    <div className="shadow-md bg-white fixed w-full">
      <div className="  p-5 flex justify-between max-w-[1200px] mx-auto">
        <nav className=" ">
          <Image src={Logo} alt="Logo Studio G" width={45} height={50} />
        </nav>
        <button className="  bg-[#000000] rounded-md px-5 h-16 w-52 font-semibold text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default MainHeader;

// bg-[#316273] blue
