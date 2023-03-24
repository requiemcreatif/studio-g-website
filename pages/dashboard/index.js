import { useState } from "react";
import { connectToDatabase } from "../../util/mongodb";
import UserList from "../../components/UserList";
import Header from "@/components/Header";

// export default function Dashboard({ users }) {
//   return (
//     <div>
//       <Header />
//       <div className=" p-5 mx-auto flex justify-center">
//         <input
//           className=" outline-none h-20 py-2 px-10 rounded-full shadow-lg w-full lg:w-3/5 border"
//           type="text"
//         />
//       </div>

//       <div>
//         <UserList users={users} />
//       </div>
//     </div>
//   );
// }

export default function Dashboard({ users }) {
  const [user, setUser] = useState(users);
  return (
    <div>
      <Header />
      <div className=" p-5 mx-auto flex justify-center">
        <input
          className=" outline-none h-20 py-2 px-10 rounded-full shadow-lg w-full lg:w-3/5 border"
          type="text"
        />
      </div>
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-3 p-5 lg:max-w-[1500px] mx-auto mt-20">
        {user.map((user) => (
          <div key={user._id}>
            <UserList user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const db = await connectToDatabase();
  const data = await db.collection("users").find({}).toArray();
  const users = JSON.parse(JSON.stringify(data));
  return {
    props: {
      users: users,
    },
  };
};
