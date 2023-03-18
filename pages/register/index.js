import { useState } from "react";
import Header from "@/components/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  //const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Header />
      <div className=" p-5 mt-10">
        <h1 className=" text-center mb-10 text-4xl font-semibold">Crea tu cuenta</h1>
        <div className=" p-4 max-w-7xl mx-auto">
          <form className=" grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className=" grid lg:grid-cols-2 gap-6">
              <section className=" grid grid-cols-1 gap-3">
                <div className=" flex flex-col">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    className=" bg-white border border-gray-300 rounded-lg p-2"
                    placeholder="Entra su nombre"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className=" flex flex-col">
                  <label htmlFor="lastName">Primer apellido:</label>
                  <input
                    className=" border border-gray-300 rounded-lg p-2"
                    placeholder="Entra sus apellidos"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col">
                  <label htmlFor="lastName">Segundo apellido:</label>
                  <input
                    className=" border border-gray-300 rounded-lg p-2"
                    placeholder="Entra sus apellidos"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className=" flex flex-col">
                  <label htmlFor="lastName">Telefono:</label>
                  <input
                    className=" border border-gray-300 rounded-lg p-2"
                    placeholder="Entra su numero"
                    type="tel"
                    // id="lastName"
                    // name="lastName"
                    // value={lastName}
                    //onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col">
                  <label htmlFor="lastName">Direccion:</label>
                  <textarea
                    className=" h-full border border-gray-300 rounded-lg p-2"
                    placeholder="Entra su direccion"
                    type="text"
                    // id="lastName"
                    // name="lastName"
                    // value={lastName}
                    //onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </section>
              <section>
                <div className=" grid lg:grid-cols-1 gap-3">
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">DNI:</label>
                    <input
                      className=" border border-gray-300 rounded-lg p-2"
                      placeholder="Entra su DNI"
                      type="text"
                      // id="lastName"
                      // name="lastName"
                      // value={lastName}
                      //onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Edad:</label>
                    <input
                      className=" border border-gray-300 rounded-lg p-2"
                      placeholder="Entra su edad"
                      type="number"
                      // id="lastName"
                      // name="lastName"
                      // value={lastName}
                      //onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Altura:</label>
                    <input
                      className=" border border-gray-300 rounded-lg p-2"
                      placeholder="Entra su altura"
                      type="number"
                      // id="lastName"
                      // name="lastName"
                      // value={lastName}
                      //onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Peso:</label>
                    <input
                      className=" border border-gray-300 rounded-lg p-2"
                      placeholder="Entra su peso"
                      type="number"
                      // id="lastName"
                      // name="lastName"
                      // value={lastName}
                      //onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className=" flex flex-col">
                      <label htmlFor="email">Email:</label>
                      <input
                        className=" border border-gray-300 rounded-lg p-2"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className=" flex flex-col">
                      <label htmlFor="password">Contrasena:</label>
                      <input
                        className=" border border-gray-300 rounded-lg p-2"
                        placeholder="Enter your password"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-10">
              <h2 className=" text-center text-4xl font-semibold mb-10">Evaluacion inicial</h2>
              <div></div>
            </section>
            <section>
              <h2 className=" text-center text-4xl font-semibold mb-10">
                Objetivos / Entrenamientos
              </h2>
              <div></div>
            </section>
            <section>
              <h2 className=" text-center text-4xl font-semibold mb-10">
                Enfermedades / Lesiones / Patologias
              </h2>
              <div></div>
            </section>
            <div className=" grid lg:justify-center">
              <button
                className=" lg:w-72 transition-all 300s font-semibold border-custom-yellow border-solid border text-custom-yellow px-10 hover:bg-custom-yellow hover:text-white py-2 rounded-full"
                type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
