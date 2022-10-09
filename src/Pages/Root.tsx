import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Root() {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;