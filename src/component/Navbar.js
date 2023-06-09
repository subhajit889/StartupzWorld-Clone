// import React, { useState } from "react";
// import Styles from "../styles/navbar.css";
// import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
// import { RxAvatar } from "react-icons/rx";
// import Logo from "../Assets/white-logo.png"

// const Navbar = () => {
//   const [menu, setMenu] = useState(true);

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };
//   return (
//     <div className="main">
//       <div className="navbar">
//         <div className="logo">
//           <img alt="logo" src={Logo} />
//         </div>
//         <ul className="link">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">StartUp</a>
//           </li>
//           <li>
//             <a href="#">Investors</a>
//           </li>
//           <li>
//             <a href="#"><RxAvatar />Login</a>
//           </li>
//         </ul>
//         <a href="#" className="actionBtn">
//           Add Listing {">"}
//         </a>
//         <div className="toggleBtn">
//           {menu ? (
//             <AiOutlineMenu alt="menu" onClick={toggleMenu} />
//           ) : (
//             <AiOutlineCloseSquare alt="menu" onClick={toggleMenu} />
//           )}
//         </div>
//       </div>
//       <div
//         style={menu ? { display: "none" } : null}
//         className="dropDownMenu"
//       >
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">StartUp</a>
//         </li>
//         <li>
//           <a href="#">Investors</a>
//         </li>
//         <li>
//           <a href="#"><RxAvatar />Login</a>
//         </li>
//         <li>
//           <a href="#" className="actionBtn">
//             Add Listing {">"}
//           </a>
//         </li>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "../styles/navbar.css";
import { AiOutlineCloseSquare, AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { MdBusiness } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Logo from "../Assets/white-logo.png"

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo">
          <img alt="logo" src={Logo} />
        </div>
        <ul className="link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">StartUp</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#" onClick={handleLoginClick}>
              <RxAvatar />Login<AiOutlineRight />
              {showLoginOptions && (
                <div className="loginOptions">
                  <button className="business-btn"><MdBusiness/>Business</button>
                  <button className="user-btn">User's</button>
                </div>
              )}
            </a>
          </li>
        </ul>
        <a href="#" className="actionBtn">
          Add Listing {">"}
        </a>
        <div className="toggleBtn">
          {menu ? (
            <AiOutlineMenu alt="menu" onClick={toggleMenu} />
          ) : (
            <AiOutlineCloseSquare alt="menu" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div style={menu ? { display: "none" } : null} className="dropDownMenu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">StartUp</a>
        </li>
        <li>
          <a href="#">Investors</a>
        </li>
        <li>
          <a href="#" onClick={handleLoginClick}>
            <RxAvatar />Login<AiOutlineRight />
            {showLoginOptions && (
              <div className="loginOptions">
                <button className="business-btn"><MdBusiness/>Business</button>
                <button className="user-btn">User's</button>
              </div>
            )}
          </a>
        </li>
        <li>
          <a href="#" className="actionBtn">
            Add Listing {">"}
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;

