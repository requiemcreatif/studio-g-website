import Image from "next/image";
import Link from "next/link";
import LogoStudio from "../images/Logo-App-Studio-g.svg";

export default function Home() {
  return (
    <main className=" bg-black p-10 h-screen">
      <div className=" bg-black pt-40 px-3 text-center">
        <div className=" flex justify-center">
          <Image className="pb-10" src={LogoStudio} alt="Logo Studio G" width={80} height={100} />
        </div>
        <h1 className="text-custom-yellow text-4xl pb-10 lg:text-7xl font-bold">
          CENTRO DEPORTIVO
        </h1>
        <Link href="/register">
          <button className=" font-semibold border-custom-yellow border-solid border text-custom-yellow px-10 hover:bg-custom-yellow hover:text-black py-2 rounded-full">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
}
