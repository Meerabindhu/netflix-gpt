import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/fontawesome-free-solid";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({userData}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {displayName = ''} = userData || {};

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
      });
  };

  
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid,email,displayName}))
          navigate('/browse');
        } else {
            dispatch(removeUser())
            navigate('/');
        }
      });
  },[]);


  return (
    <div class="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between items-center pr-8">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Header Logo"
        class="w-48"
      />
      <div
        className="flex flex-col"
        onMouseOver={() => setOpenDropdown(true)}
        onMouseOut={() => setOpenDropdown(false)}
      >
        <div className="flex items-center">
          <img
            src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="User Logo"
          />
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
  );
};

export default Header;
