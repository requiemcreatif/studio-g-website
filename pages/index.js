import Image from "next/image";
import Link from "next/link";
import LogoStudio from "../images/Logo-App-Studio-g.svg";

export default function Home() {
  return (
    <main className=" bg-white p-10 h-screen">
      <div className="">
        {/* <div className=" flex justify-center">
          <Image className="pb-24" src={LogoStudio} alt="Logo Studio G" width={80} height={100} />
        </div> */}
        <div className="grid grid-cols-1 gap-5 max-w-7xl mx-auto lg:grid-cols-2 ">
          <div>
            <h1 className="text-black text-7xl pb-5 lg:text-8xl font-bold">CENTRO DEPORTIVO</h1>
            <Link href="/register">
              <button className=" font-semibold shadow-xl border text-black px-10 w-full lg:w-52 hover:bg-black hover:text-white transition-colors 300s py-3 rounded-xl ">
                Register
              </button>
            </Link>
          </div>

          <p className="text-black pb-24">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque sint adipisci
            dolorum dolores nobis placeat a quas id itaque, obcaecati optio praesentium culpa
            cupiditate voluptate. In est ducimus eius. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quia doloremque sint adipisci dolorum dolores nobis placeat a quas id
            itaque, obcaecati optio praesentium culpa cupiditate voluptate. In est ducimus eius.
          </p>
        </div>
      </div>
    </main>
  );
}
