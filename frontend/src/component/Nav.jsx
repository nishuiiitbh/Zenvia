import React, { useContext, useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleOutline, IoSearchCircleSharp, IoClose } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdOutlineShoppingBag, MdContacts } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
  let { userData, setUserData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);

  let {
    showSearch,
    setShowSearch,
    search,
    setSearch,
    getCartCount,
  } = useContext(shopDataContext);

  let [showProfile, setShowProfile] = useState(false);

  let profileRef = useRef(null);
  let searchRef = useRef(null);

  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/auth/logout",
        {
          withCredentials: true,
        }
      );

      console.log(result.data);
      setUserData(null);
      setShowProfile(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleSearchClickOutside = (event) => {
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
        setSearch("");
      }
    };

    document.addEventListener("click", handleSearchClickOutside);

    return () => {
      document.removeEventListener(
        "click",
        handleSearchClickOutside
      );
    };
  }, [showSearch]);

  return (
    <div className="w-full h-[70px] bg-[#ecfafaec] z-50 fixed top-0 left-0 flex items-center justify-between px-[15px] sm:px-[25px] lg:px-[30px] shadow-md shadow-black">

      <div className="w-auto lg:w-[25%] flex items-center justify-start gap-[8px] sm:gap-[10px]">
        <img
          src={logo}
          alt="Zenvia"
          className="w-[27px] sm:w-[30px]"
        />

        <h1 className="text-[21px] sm:text-[25px] text-black font-sans">
          Zenvia
        </h1>
      </div>

      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex items-center justify-center gap-[8px] xl:gap-[14px] text-white">

          <li
            className="text-[12px] xl:text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[9px] px-[14px] xl:px-[18px] rounded-2xl whitespace-nowrap"
            onClick={() => navigate("/")}
          >
            HOME
          </li>

          <li
            className="text-[12px] xl:text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[9px] px-[14px] xl:px-[18px] rounded-2xl whitespace-nowrap"
            onClick={() => navigate("/collection")}
          >
            COLLECTIONS
          </li>

          <li
            className="text-[12px] xl:text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[9px] px-[14px] xl:px-[18px] rounded-2xl whitespace-nowrap"
            onClick={() => navigate("/order")}
          >
            ORDERS
          </li>

          <li
            className="text-[12px] xl:text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[9px] px-[14px] xl:px-[18px] rounded-2xl whitespace-nowrap"
            onClick={() => navigate("/about")}
          >
            ABOUT
          </li>

          <li
            className="text-[12px] xl:text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[9px] px-[14px] xl:px-[18px] rounded-2xl whitespace-nowrap"
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </li>

        </ul>
      </div>

      <div className="w-auto lg:w-[25%] flex items-center justify-end gap-[10px] sm:gap-[15px]">

        {!showSearch && (
          <IoSearchCircleOutline
            className="w-[31px] h-[31px] sm:w-[36px] sm:h-[36px] text-black cursor-pointer"
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collection");
            }}
          />
        )}

        {showSearch && (
          <IoSearchCircleSharp
            className="w-[31px] h-[31px] sm:w-[36px] sm:h-[36px] text-black cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}

        {!userData && (
          <div ref={profileRef}>
            <FaCircleUser
              className="w-[26px] h-[26px] sm:w-[29px] sm:h-[29px] text-black cursor-pointer"
              onClick={() =>
                setShowProfile((prev) => !prev)
              }
            />
          </div>
        )}

        {userData && (
          <div
            ref={profileRef}
            className="w-[29px] h-[29px] sm:w-[30px] sm:h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer text-sm"
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
          >
            {userData?.name?.slice(0, 1)}
          </div>
        )}

        <div className="relative hidden lg:block">
          <MdOutlineShoppingCart
            className="w-[29px] h-[29px] text-black cursor-pointer"
            onClick={() => navigate("/cart")}
          />

          <p className="absolute w-[17px] h-[17px] flex items-center justify-center bg-black text-white rounded-full text-[9px] -top-[7px] -right-[8px]">
            {getCartCount()}
          </p>
        </div>

      </div>

      {showSearch && (
        <div
          ref={searchRef}
          className="w-full h-[75px] sm:h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 flex items-center justify-center px-[15px]"
        >
          <div className="relative w-[90%] sm:w-[80%] lg:w-[50%]">

            <input
              type="text"
              className="w-full h-[48px] sm:h-[50px] bg-[#233533] rounded-[30px] px-[20px] sm:px-[25px] pr-[55px] placeholder:text-white text-white text-[15px] sm:text-[16px] outline-none"
              placeholder="Search Here"
              onChange={(e) =>
                setSearch(e.target.value)
              }
              value={search}
            />

            <IoClose
              className="absolute right-[17px] top-1/2 -translate-y-1/2 w-[26px] h-[26px] text-white cursor-pointer"
              onClick={() => {
                setShowSearch(false);
                setSearch("");
              }}
            />

          </div>
        </div>
      )}

      {showProfile && (
        <div className="absolute w-[200px] sm:w-[220px] h-[150px] bg-[#000000e8] top-[110%] right-[3%] border border-[#aaa9a9] rounded-[10px] z-50">

          <ul className="w-full h-full flex items-start justify-around flex-col text-[16px] sm:text-[17px] py-[10px] text-white">

            {!userData && (
              <li
                className="w-full hover:bg-[#2f2f2f] px-[15px] py-[9px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}

            {userData && (
              <li
                className="w-full hover:bg-[#2f2f2f] px-[15px] py-[9px] cursor-pointer"
                onClick={handleLogout}
              >
                LogOut
              </li>
            )}

            <li
              className="w-full hover:bg-[#2f2f2f] px-[15px] py-[9px] cursor-pointer"
              onClick={() => {
                navigate("/order");
                setShowProfile(false);
              }}
            >
              Orders
            </li>

            <li
              className="w-full hover:bg-[#2f2f2f] px-[15px] py-[9px] cursor-pointer"
              onClick={() => {
                navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>

          </ul>
        </div>
      )}

      <div className="w-full h-[72px] sm:h-[78px] flex items-center justify-around px-[5px] sm:px-[15px] text-[10px] sm:text-[11px] fixed bottom-0 left-0 bg-[#191818] lg:hidden z-50">

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px] min-w-[55px]"
          onClick={() => navigate("/")}
        >
          <IoMdHome className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px]" />
          Home
        </button>

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px] min-w-[65px]"
          onClick={() => navigate("/collection")}
        >
          <HiOutlineCollection className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px]" />
          Collections
        </button>

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px] min-w-[55px]"
          onClick={() => navigate("/order")}
        >
          <MdOutlineShoppingBag className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px]" />
          Orders
        </button>

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px] min-w-[55px]"
          onClick={() => navigate("/contact")}
        >
          <MdContacts className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px]" />
          Contact
        </button>

        <button
          className="text-white flex items-center justify-center flex-col gap-[2px] min-w-[55px] relative"
          onClick={() => navigate("/cart")}
        >
          <MdOutlineShoppingCart className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px]" />

          <span>Cart</span>

          <p className="absolute w-[17px] h-[17px] flex items-center justify-center bg-white text-black font-semibold rounded-full text-[9px] -top-[5px] right-[7px]">
            {getCartCount()}
          </p>
        </button>

      </div>

    </div>
  );
}

export default Nav;