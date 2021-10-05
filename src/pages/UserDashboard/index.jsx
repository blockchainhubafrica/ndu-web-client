import React from "react";
import { RightBar, SideBar } from "../../components";

function UserDashboard() {
  return (
    <div className="flex" >
        <SideBar />
        <div className="centerCon">

        </div>
        <RightBar />
    </div>
  );
}

export { UserDashboard };
