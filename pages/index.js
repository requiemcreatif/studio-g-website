import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-black text-white p-3 text-center">
      <h1>Studio G - Training center</h1>
    </div>
  );
}
