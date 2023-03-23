import { connectToDatabase } from "../../util/mongodb";
import UserList from "../../components/UserList";
import Header from "@/components/Header";

export default function Dashboard({ users }) {
  return (
    <div>
      <Header />
      <div className=" p-5 mx-auto flex justify-center">
        <input
          className=" outline-none h-20 py-2 px-10 rounded-full shadow-lg w-full lg:w-3/5 border"
          type="text"
        />
      </div>

      <div>
        <UserList users={users} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await connectToDatabase();
  const collection = await db.collection("users");
  const users = await collection.find({}).toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
