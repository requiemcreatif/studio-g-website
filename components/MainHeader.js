import Image from "next/image";
import Logo from "../images/studio-g-white.svg";

const MainHeader = () => {
  return (
    <div className=" top-0 fixed w-full bg-slate-900 border-b-[0.5px]">
      <div className="  px-5 py-5 flex justify-between max-w-[1200px] mx-auto">
        <nav className=" ">
          <Image src={Logo} alt="Logo Studio G" width={40} height={50} />
        </nav>
        <button className=" border-pink-500 border bg-[#transparent] rounded-full px-5 h-16 w-52 font-semibold text-pink-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default MainHeader;

// bg-[#316273] blue
