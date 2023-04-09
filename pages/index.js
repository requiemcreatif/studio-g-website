import Link from "next/link";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <div className=" h-screen bg-[#1e293b] ">
      <MainHeader />
      <main className=" lg:py-10 h-[auto] lg:h-screen bg-slate-900">
        <section className=" pt-20 border-b-[0.5px]">
          <div className=" lg:px-0 grid grid-cols-1 max-w-[1200px] gap-16 mx-auto py-20 px-10">
            <div className=" mx-auto grid grid-cols-1 max-w-7xl">
              <div className=" ">
                <h1 className="text-white text-7xl text-center lg:text-9xl lg:text-center  font-bold">
                  CENTRO DEPORTIVO
                </h1>
              </div>
            </div>
            <div className=" grid grid-cols-1 max-w-7xl gap-16 mx-auto">
              <h3 className="text-white text-center text-2xl ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque sint
                adipisci dolorum dolores nobis placeat a quas id itaque, obcaecati optio praesentium
                culpa cupiditate voluptate. In est ducimus eius. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </h3>
              <div className=" mx-auto pb-10">
                <Link href="/register">
                  <button
                    className=" hover:scale-105 cursor-pointer transition-all duration-300 text-2xl
                  bg-sky-500 text-white rounded-full px-7 h-[43px] w-[180px] font-semibold">
                    Registrar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-10 pt-20 grid lg:px-1 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto text-white  ">
          <div className=" hover:scale-105 cursor-pointer transition-all duration-500 p-10 h-[auto] grid grid-rows-[30%_50%_20%] hover:bg-[#1e293b] hover:rounded-xl">
            <div className="">
              <h2 className="font-semibold text-4xl uppercase pb-5">Entrenamiento Personal</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
            <div className=" py-5 font-medium text-sky-500">
              <button>Read more...</button>
            </div>
          </div>

          <div className=" hover:scale-105 cursor-pointer transition-all duration-500 p-10 h-[auto] grid grid-rows-[30%_50%_20%] hover:bg-[#1e293b] hover:rounded-xl">
            <div>
              <h2 className="font-semibold text-4xl uppercase">Entrenamiento Funcional</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
            <div className=" py-5 font-medium text-sky-500">
              <button>Read more...</button>
            </div>
          </div>
          <div className=" hover:scale-105 cursor-pointer transition-all duration-500 p-10 h-[auto] grid grid-rows-[30%_50%_20%] hover:bg-[#1e293b] hover:rounded-xl">
            <div>
              <h2 className="font-semibold text-4xl uppercase">Readaptacion y recuperacion</h2>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
            <div className=" py-5 font-medium text-sky-500">
              <button>Read more...</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="bg-[#1e293b] h-[80px]">
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-center text-2xl font-semibold">
              © 2021 Studio-g | Centro Deportivo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// bg-[#febf13] yellow
//shadow-[0_0_5px_rgba(0,0,0,0.3)]
// bg-slate-900
//bg-[#1e293b] dark blue
