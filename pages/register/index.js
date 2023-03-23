import { useState, useEffect } from "react";
import Header from "@/components/Header";

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

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
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
      }),
    });

    if (response.ok) {
      setRegistrationStatus("success");

      // Reset form values after successful submission
      setName("");
      setEmail("");
      setPassword("");
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
                    className=" border border-gray-300 rounded-lg p-2"
                    placeholder="Entra su segundo apellido"
                    type="text"
                    id="secondLastName"
                    name="secondLastName"
                    value={secondLastName}
                    onChange={(e) => setSecondLastName(e.target.value)}
                  />
                </div>

                <div className=" flex flex-col">
                  <label htmlFor="lastName">Telefono:</label>
                  <input
                    className=" border border-gray-300 rounded-lg p-2"
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
                    className=" border border-gray-300 rounded-lg p-2"
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
                      className="border border-gray-300 rounded-lg p-2"
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
                      className="border border-gray-300 rounded-lg p-2"
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
                      className=" border border-gray-300 rounded-lg p-2"
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
                      className=" border border-gray-300 rounded-lg p-2"
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
                      className=" border border-gray-300 rounded-lg p-2"
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
                      className=" border border-gray-300 rounded-lg p-2"
                      placeholder="Entra su peso"
                      type="number"
                      id="weight"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
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
