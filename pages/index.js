import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo-black.svg";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <div className=" bg-white">
      <MainHeader />
      <main className=" p-10 h-screen">
        <div className=" lg:px-40 grid grid-cols-1 max-w-[1200px] gap-16 mx-auto mt-60 bg-[#000000] rounded-[25px] p-10 ">
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
              consectetur adipisicing elit. Quia doloremque sint adipisci dolorum dolores nobis
              placeat a quas id itaque, obcaecati optio praesentium culpa cupiditate voluptate. In
              est ducimus eius.
            </p>
            <div>
              <Link href="/register">
                <button className=" bg-red-700 text-white rounded-full px-5 py-3 h-20 w-52 font-semibold">
                  Registrar
                </button>
              </Link>
            </div>
          </div>
        </div>
        <section className=" grid lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto mt-20">
          <div className="shadow-md transition duration-300 rounded-[25px] p-10 h-80 grid grid-rows-[40%_60%] bg-white">
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
          <div className=" shadow-md transition duration-300 bg-white rounded-[25px] p-10 h-80 grid grid-rows-[40%_60%]">
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
          <div className="shadow-md transition duration-300 bg-white rounded-[25px] p-10 h-80 grid grid-rows-[40%_60%]">
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
