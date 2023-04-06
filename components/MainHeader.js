import Image from "next/image";
import Logo from "../images/studio-g-white.svg";

const MainHeader = () => {
  return (
    <div className=" top-0 fixed w-full bg-[transparent]">
      <div className="  p-5 flex justify-between max-w-[1200px] mx-auto">
        <nav className=" ">
          <Image src={Logo} alt="Logo Studio G" width={45} height={50} />
        </nav>
        <button className="  bg-[#ffffff] rounded-md px-5 h-16 w-52 font-semibold text-blackl">
          Login
        </button>
      </div>
    </div>
  );
};

export default MainHeader;

// bg-[#316273] blue
