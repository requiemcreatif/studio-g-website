import { connectToDatabase } from "../../util/mongodb";
import UserList from "../../components/UserList";
import Header from "@/components/Header";

export default function Dashboard({ users }) {
  return (
    <div>
      <Header />

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
