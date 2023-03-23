const UserList = ({ users }) => {
  return (
    <div className=" grid grid-cols-1 gap-5 lg:grid-cols-3 p-5 lg:max-w-[1500px] mx-auto">
      {users.map((user) => (
        <div key={user._id} className="  bg-white rounded-xl shadow-lg grid grid-cols-[30%_70%]">
          <div className="p-8">
            <div className=" bg-black text-white w-40 h-40 rounded-full "></div>
          </div>
          <div className=" p-8">
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Nombre:</h3>
              <p></p> {user.name}
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Primer apellido:</h3>
              <p>{user.firstLastName}</p>
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Segundo apellido:</h3>
              <p>{user.secondLastName}</p>
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Email:</h3>
              <p>{user.email}</p>
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Telefono:</h3>
              <p>{user.phone}</p>
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">DNI:</h3>
              <p>{user.dni}</p>
            </div>
            <div className="flex gap-2">
              <h3 className=" font-semibold uppercase">Edad:</h3>
              <p>{user.age}</p>
            </div>
            {/* <p>
              <h3>Altura:</h3> {user.height}
            </p>
            <p>
              <h3>Peso:</h3> {user.weight}
            </p>
            <p>
              <h3>Dirrecion:</h3> {user.address}
            </p>
            <p>
              <h3>Codigo Postal:</h3> {user.zipCode}
            </p>
            <p>
              <h3>Ciudad:</h3> {user.city}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
