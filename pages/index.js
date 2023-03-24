import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo-black.svg";

export default function Home() {
  return (
    <main className=" bg-white p-10 h-screen">
      <div className=" lg:px-40 grid grid-cols-1 max-w-7xl gap-10 mx-auto mt-60">
        <div className="grid grid-cols-[30%_70%] max-w-7xl">
          <div className="">
            <Image className="" src={Logo} alt="Logo Studio G" width={100} height={100} />
          </div>
          <div className=" ">
            <h1 className="text-black text-7xl lg:text-8xl font-bold">CENTRO DEPORTIVO</h1>
          </div>
        </div>
        <div className=" grid grid-cols-1 max-w-7xl gap-10">
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque sint adipisci
            dolorum dolores nobis placeat a quas id itaque, obcaecati optio praesentium culpa
            cupiditate voluptate. In est ducimus eius. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quia doloremque sint adipisci dolorum dolores nobis placeat a quas id
            itaque, obcaecati optio praesentium culpa cupiditate voluptate. In est ducimus eius.
          </p>
          <div>
            <Link href="/register">
              <button className=" font-semibold shadow-xl border bg-black text-white px-10 w-full lg:w-52 hover:bg-black hover:text-white transition-colors 300s rounded-xl py-3 ">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
