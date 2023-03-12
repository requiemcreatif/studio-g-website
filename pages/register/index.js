import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" p-5">
      <h1>Register</h1>
      <form className=" grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <section className=" grid grid-cols-2 gap-3">
          <div className=" flex flex-col">
            <label htmlFor="name">Nombre:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Entra su nombre"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="lastName">appellidos:</label>
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
        </section>
        <section className=" grid grid-cols-2 gap-3">
          <div className=" flex flex-col">
            <label htmlFor="lastName">Direccion:</label>
            <textarea
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Entra su direccion"
              type="text"
              // id="lastName"
              // name="lastName"
              // value={lastName}
              //onChange={(e) => setLastName(e.target.value)}
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
        </section>

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
        <section className=" grid grid-cols-3 gap-3">
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
        </section>

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

        <button
          className=" font-semibold border-custom-yellow border-solid border text-custom-yellow px-10 hover:bg-custom-yellow hover:text-black py-2 rounded-full"
          type="submit">
          Register
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
