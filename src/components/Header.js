import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL } from "../constants/Constants";
import { addUser, removeUser } from "../utils/userSlice";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { languages } from "../constants/Constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="logo"></img>
      {user && (
        <div className="flex justify-around">
          {showGptSearch && (
            <select
              className="bg-gray-600 text-white m-4 px-4 rounded"
              onChange={(e) => handleChange(e)}
            >
              {languages.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.value}
                  </option>
                );
              })}
            </select>
          )}
          <img
            className="w-12 m-auto rounded"
            src={user.photoURL}
            alt="user-icon"
          ></img>
          <button
            className="px-4 my-2 m-4 rounded font-bold flex justify-between items-center bg-indigo-600 text-white"
            onClick={() => handleGptSearch()}
          >
            {/* {showGptSearch?"Home":"AI Search"} */}
            {showGptSearch ? "Home" : "AI Search"}
            {/* {showGptSearch?<AiFillHome className="text-3xl pl-2 font-semibold/>:<AiOutlineSearch className="text-3xl pl-2 font-semibold" />} */}
          </button>
          <button
            className="ml-5 mr-2 font-bold text-red-900 hover:text-white"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
