import React, { useState, useMemo } from "react";
import { connectToDatabase } from "../../util/mongodb";
import UserList from "../../components/UserList";
import Header from "@/components/Header";

function Dashboard({ users }) {
  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <div>
      <Header />
      <div className=" p-5 mx-auto flex justify-center">
        <input
          className=" outline-none h-20 py-2 px-10 rounded-full shadow-lg w-full lg:w-3/5 border"
          type="text"
        />
      </div>
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-3 p-5 lg:max-w-[1500px] mx-auto mt-20 lg:px-10">
        {memoizedUsers.map((user) => (
          <div key={user._id}>
            <UserList user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const db = await connectToDatabase();
  const data = await db.collection("users").find({}).toArray();
  const users = JSON.parse(JSON.stringify(data));
  console.log(users);

  return {
    props: {
      users: users,
    },
  };
};

export default React.memo(Dashboard);
