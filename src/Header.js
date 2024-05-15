import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/Actions/UserAction";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="px-2 py-4 flex justify-between flex-wrap ">
      <div>
        <p className="font-semibold text-red-500 text-3xl">tailwebs.</p>
      </div>
      <div className="flex gap-8 items-center">
        <div>
          <p className="font-semibold">Home</p>
        </div>
        <div>
          <p
            className="font-semibold cursor-pointer"
            onClick={() => {
              navigate("/");
              dispatch(logout());
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
