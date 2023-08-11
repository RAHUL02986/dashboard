import Card from "./Card";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
function Home() {
    const user = useContext(UserContext);
  return (
    <>
      <h1 className="center">🚀 Welcome to Homepage!</h1>
      {user.isLogin ? <Card userInfo={user.userInfo} /> : <p className="center m5">Please Login to display user</p>}
    </>
  );
}

export default Home;
