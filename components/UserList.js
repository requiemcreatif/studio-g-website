const UserList = ({ user: { name, firstLastName, secondLastName, email, phone, dni, age } }) => {
  return (
    <div>
      <div className=" hover:scale-105 cursor-pointer transition-all delay-100 300s bg-white rounded-xl shadow-lg grid grid-cols-[30%_70%]">
        <div className="p-8 bg-black rounded-tl-xl rounded-bl-xl bg-[url('https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60')] bg-center bg-no-repeat w-[150px]]">
          {/* <div className=" bg-white text-white w-40 h-40 rounded-full "></div> */}
        </div>
        <div className=" p-8">
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Nombre:</h3>
            <p>{name}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Primer apellido:</h3>
            <p>{firstLastName}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Segundo apellido:</h3>
            <p>{secondLastName}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Email:</h3>
            <p>{email}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Telefono:</h3>
            <p>{phone}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">DNI:</h3>
            <p>{dni}</p>
          </div>
          <div className="flex gap-2">
            <h3 className=" font-semibold uppercase">Edad:</h3>
            <p>{age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
