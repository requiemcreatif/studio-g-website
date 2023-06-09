import { useState, useEffect } from "react";
import Header from "@/components/Header";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setcity] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    if (registrationStatus === "success" || registrationStatus === "error") {
      const timeoutId = setTimeout(() => {
        setRegistrationStatus(null);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [registrationStatus]);

  async function handleSubmit(e) {
    e.preventDefault();
    setRegistrationStatus("submitting");

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        firstLastName,
        secondLastName,
        phone,
        dni,
        age,
        height,
        weight,
        address,
        zipCode,
        city,
      });
      if (response.status === 201) {
        setRegistrationStatus("success");

        // Reset form values after successful submission
        setName("");
        setEmail("");
        // setPassword("");
        setFirstLastName("");
        setSecondLastName("");
        setPhone("");
        setDni("");
        setAge("");
        setHeight("");
        setWeight("");
        setAddress("");
        setZipCode("");
        setcity("");

        // ...reset the rest of your form input values...
      } else {
        setRegistrationStatus("error");
      }
    } catch (error) {
      console.error(error);
      setRegistrationStatus("error");
    }
  }

  return (
    <div>
      <Header />
      <div className=" p-5 mt-10">
        <h1 className=" text-center mb-10 text-4xl font-semibold">Crea tu cuenta</h1>
        <div className=" p-4 max-w-7xl mx-auto">
          {registrationStatus === "success" && (
            <p className="text-green-500">Registration successful!</p>
          )}
          {registrationStatus === "error" && (
            <p className="text-red-500">Registration failed. Please try again later.</p>
          )}
          {registrationStatus === "submitting" && (
            <p className="text-blue-500">Submitting registration...</p>
          )}

          <form className=" grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className=" grid lg:grid-cols-2 gap-6">
              <section className=" grid grid-cols-1 gap-3">
                <div className=" flex flex-col">
                  <label htmlFor="name">Nombre:</label>
                  <input
                    className=" bg-white border border-gray-300 rounded-lg p-4"
                    placeholder="Entra su nombre"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Primer apellido:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su primer apellido"
                      type="text"
                      id="firstLastName"
                      name="firstLastName"
                      value={firstLastName}
                      onChange={(e) => setFirstLastName(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Segundo apellido:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su segundo apellido"
                      type="text"
                      id="secondLastName"
                      name="secondLastName"
                      value={secondLastName}
                      onChange={(e) => setSecondLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className=" flex flex-col">
                  <label htmlFor="lastName">Telefono:</label>
                  <input
                    className=" bg-white border border-gray-300 rounded-lg p-4"
                    placeholder="Entra su numero"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col">
                  <label htmlFor="lastName">Direccion:</label>
                  <input
                    className=" bg-white border border-gray-300 rounded-lg p-4"
                    placeholder="Entra su direccion"
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Codigo Postal:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su codigo"
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Ciudad:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su ciudad"
                      type="text"
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                    />
                  </div>
                </div>
              </section>
              <section>
                <div className=" grid lg:grid-cols-1 gap-3">
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">DNI:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su DNI"
                      type="text"
                      id="dni"
                      name="dni"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Edad:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su edad"
                      type="number"
                      id="age"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Altura:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su altura"
                      type="number"
                      id="height"
                      name="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label htmlFor="lastName">Peso:</label>
                    <input
                      className=" bg-white border border-gray-300 rounded-lg p-4"
                      placeholder="Entra su peso"
                      type="number"
                      id="weight"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="grid lg:grid-cols-1 gap-6">
                    <div className=" flex flex-col">
                      <label htmlFor="email">Email:</label>
                      <input
                        className=" bg-white border border-gray-300 rounded-lg p-4"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-10">
              <div className=" bg-white p-4 rounded-md">
                <h2 className=" text-left text-3xl font-semibold ">Evaluacion inicial</h2>
              </div>
              <div>
                <h3 className=" p-2">Practicas deporte habitualmente ?</h3>
              </div>

              <div className="flex gap-4 p-5">
                <div className="flex gap-4">
                  <h3 className=" p-2">Si</h3>
                  <input type="checkbox" />
                </div>

                <div className="flex gap-4">
                  <h3 className=" p-2">Frecuencia</h3>
                  <input className=" p-2 rounded-md" type="text " />
                </div>
              </div>

              <div className="flex gap-4 p-5">
                <h3 className=" p-2">No</h3>
                <input type="checkbox" />
              </div>
            </section>
            <section>
              <div className=" bg-white p-4 rounded-md">
                <h2 className=" text-left text-3xl font-semibold ">Objetivos | Entrenamientos</h2>
              </div>
            </section>
            <section>
              <div className=" bg-white p-4 rounded-md">
                <h2 className=" text-left text-3xl font-semibold ">
                  Enfermedades| Lesiones | Patologias
                </h2>
              </div>
            </section>
            <div className=" grid ">
              <button
                className=" lg:w-72 transition-all 300s font-semibold border-black border-solid border text-black px-10 hover:bg-custom-yellow hover:text-white py-3 rounded-lg mt-10"
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
