import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/fontawesome-free-solid";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { header_logo, user_logo, supported_lang } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLangConfig } from "../utils/configSlice";

const Header = ({ userData }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getGPTSearch = useSelector((store) => store.gpt?.showGptSearch);
  const { displayName = "" } = userData || {};

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This is called when component unmounts
    return () => {
      subscribe();
    };
  }, []);

  const toggleGPTSearchButton = () => {
    dispatch(toggleGPTSearch());
  };

  const changeLanguage = (e) => {
    dispatch(changeLangConfig(e.target.value));
  };

  return (
    <div class="z-50 absolute bg-gradient-to-b from-black w-full flex justify-between items-center pr-8">
      <img src={header_logo} alt="Header Logo" class="w-48" />
      <div className="flex">
        {getGPTSearch && (
          <select
            className="mr-8 p-2 bg-gray-900 border-0 text-white rounded-md"
            onClick={changeLanguage}
          >
            {supported_lang.map((lang) => (
              <option value={lang.lang_identifier}>
                {lang.lang_placeholder}
              </option>
            ))}
          </select>
        )}
        <button
          className="text-white bg-blue-600 rounded-lg p-2 mr-8"
          onClick={toggleGPTSearchButton}
        >
          {getGPTSearch ? 'Home Page' : 'GPT Search'}
        </button>
        <div
          className="flex flex-col"
          onMouseOver={() => setOpenDropdown(true)}
          onMouseOut={() => setOpenDropdown(false)}
        >
          <div className="flex items-center">
            <img src={user_logo} alt="User Logo" />
            <FontAwesomeIcon
              className="pl-3 cursor-pointer"
              icon={openDropdown ? faCaretUp : faCaretDown}
            />
          </div>
          {openDropdown && (
            <div className="bg-[rgba(0,0,0,.9)] text-white p-3 absolute top-12 right-4">
              <div className="p-1 cursor-pointer">{displayName}</div>
              <div className="p-1 cursor-pointer" onClick={handleSignOut}>
                SignOut
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
