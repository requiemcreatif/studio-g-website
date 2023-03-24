import { connectToDatabase } from "../../util/mongodb";
import { ObjectId } from "mongodb";
import User from "../../components/User";

const UserDetail = ({ user }) => {
  return <User user={user} />;
};

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const db = await connectToDatabase();
  const user = await db.collection("users").findOne({ _id: new ObjectId(_id) });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: JSON.parse(JSON.stringify(user)) },
  };
}

export default UserDetail;
