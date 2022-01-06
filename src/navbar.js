import React, { useState } from "react";
import Sidenavbar from "./sidenavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="navcolor">
        <button onClick={() => toggleModal()} className="login">
          <i class="bx bxs-user-circle"> </i>Guest
        </button>
      </div>
      {modal ? (
        <Link to="logout">
          <button className="loginbox">
            <i class="bx bxs-user-circle"></i>
            <span>
              <Link to="/" id="logout">
                <i class="bx bx-key"></i>Logout
              </Link>
            </span>
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Navbar;
