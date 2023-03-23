import Link from "next/link";
import Image from "next/image";
import LogoStudio from "../images/Logo-App-Studio-g.svg";

const Header = () => {
  return (
    <div className=" h-24 grid grid-cols-2 bg-white text-black px-6 py-2">
      <div className=" p-4">
        <Image className="pb-10" src={LogoStudio} alt="Logo Studio G" width={40} height={20} />
      </div>

      <div className=" pt-5 flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
