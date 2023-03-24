import React from "react";
import Header from "./Header";

const User = ({
  user: {
    name,
    firstLastName,
    secondLastName,
    email,
    phone,
    dni,
    age,
    _id,
    weight,
    height,
    address,
    zipCode,
    city,
  },
}) => {
  return (
    <div>
      <Header />
      <div className="mt-10 max-w-6xl mx-auto px-5">
        <button className=" border-2 bg-red-400 px-10 py-3 w-52 rounded-xl">Edit</button>
        <button className=" bg-slate-500 px-10 py-3 w-52 rounded-xl">Save</button>
      </div>
      <div className=" max-w-6xl mx-auto grid grid-cols-1 gap-10 mt-10 p-5">
        <section className=" grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Nombre
            </h3>
            <p className="p-5">{name} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Primer Apellido
            </h3>
            <p className="p-5">{firstLastName} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Segundo Apellido
            </h3>
            <p className="p-5">{secondLastName} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              DNI
            </h3>
            <p className="p-5">{dni} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              ID:
            </h3>
            <p className="p-5">{_id} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Email
            </h3>
            <p className="p-5">{email} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Telefono
            </h3>
            <p className="p-5">{phone} </p>
          </div>
        </section>

        <section className=" grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Direccion
            </h3>
            <p className="p-5">{address} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Codigo postal
            </h3>
            <p className="p-5">{zipCode} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Ciudad
            </h3>
            <p className="p-5">{city} </p>
          </div>
        </section>

        <section className=" grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Edad
            </h3>
            <p className="p-5">{age} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Peso
            </h3>
            <p className="p-5">{weight} </p>
          </div>
          <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm hover:bg-slate-100 hover:scale-105 transition-all ">
            <h3 className=" font-semibold uppercase bg-slate-300 p-5 rounded-tl-lg rounded-bl-lg">
              Altura
            </h3>
            <p className="p-5">{height} </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default User;
