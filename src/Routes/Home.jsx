import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { userList } = useContext(UserContext);

  return (
    <main className="">
      <h1>Home</h1>
      <img src="/public/doctor.jpg" alt="" />
      <div className="card-grid">
        {userList.map((users) => (
          <Link to={"/users/" + users.id} key={users.id}>
            <h4>{users.id}</h4>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
