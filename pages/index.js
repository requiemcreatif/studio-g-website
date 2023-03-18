import Image from "next/image";
import Link from "next/link";
import LogoStudio from "../images/Logo-App-Studio-g.svg";

export default function Home() {
  return (
    <main className=" bg-black p-10 h-screen">
      <div className=" bg-black pt-24 px-3 text-center">
        <div className=" flex justify-center">
          <Image className="pb-24" src={LogoStudio} alt="Logo Studio G" width={80} height={100} />
        </div>
        <h1 className="text-custom-yellow text-7xl pb-16 lg:pb-48 lg:text-9xl font-bold">
          CENTRO DEPORTIVO
        </h1>
        <p className="text-custom-yellow pb-24 lg:px-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque sint adipisci
          dolorum dolores nobis placeat a quas id itaque, obcaecati optio praesentium culpa
          cupiditate voluptate. In est ducimus eius.
        </p>
        <Link href="/register">
          <button className=" font-semibold border-custom-yellow border-solid border text-custom-yellow px-10 w-full lg:w-52 hover:bg-custom-yellow hover:text-black py-2 rounded-full">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
}
