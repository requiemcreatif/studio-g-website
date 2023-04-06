import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo-black.svg";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <div className=" h-screen">
      <MainHeader />
      <main className=" lg:py-10 h-[auto] bg-gradient-to-r from-gray-700 via-gray-900 to-black  lg:h-screen ">
        <section className=" pt-20">
          <div className=" lg:px-0 grid grid-cols-1 max-w-[1200px] gap-16 mx-auto rounded-[25px] py-20 px-10">
            <div className="grid grid-cols-1 max-w-7xl">
              <div className=" ">
                <h1 className="text-white text-7xl lg:text-9xl font-bold">CENTRO DEPORTIVO</h1>
              </div>
            </div>
            <div className=" grid grid-cols-1 max-w-7xl gap-16">
              <p className="text-white text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque sint
                adipisci dolorum dolores nobis placeat a quas id itaque, obcaecati optio praesentium
                culpa cupiditate voluptate. In est ducimus eius. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
              <div>
                <Link href="/register">
                  <button
                    className=" hover:scale-105 cursor-pointer transition-all duration-300 
                  bg-gradient-to-b from-red-500 to-red-800
                   text-white rounded-full px-5 h-[40px] w-52 font-semibold">
                    Registrar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-10 py-20 grid lg:px-1 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto ">
          <div className="shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:scale-105 hover:rounded-none cursor-pointer transition-all duration-500 rounded-[15px] p-10 h-80 grid grid-rows-[40%_60%] bg-white">
            <div>
              <h2 className="font-semibold text-3xl uppercase">Entrenamiento Personal</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
          </div>

          <div className="shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:scale-105 hover:rounded-none cursor-pointer transition-all duration-500 rounded-[15px] p-10 h-80 grid grid-rows-[40%_60%] bg-white">
            <div>
              <h2 className="font-semibold text-3xl uppercase">Entrenamiento Funcional</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
          </div>
          <div className="shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:scale-105 hover:rounded-none cursor-pointer transition-all duration-500 rounded-[15px] p-10 h-80 grid grid-rows-[40%_60%] bg-white">
            <div>
              <h2 className="font-semibold text-3xl uppercase">Readaptacion y recuperacion</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// bg-[#febf13] yellow
